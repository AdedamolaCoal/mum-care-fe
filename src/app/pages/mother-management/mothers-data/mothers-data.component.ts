import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { DropdownComponent } from "@component/shared/dropdown/dropdown.component";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
// import { this.motherData } from "@data/invoice/this.motherData";
import { TableService } from "@service/table.service";
import { OptionsVerticalComponent } from "../../../components/shared/options-vertical/options-vertical.component";
import { MotherChildService } from "@service/mother-child.service";
import { NotifyService } from "@service/notify.service";
import { SharedService } from "@service/shared.service";
import { Router } from "@angular/router";
@Component({
  selector: "mothers",
  standalone: true,
  imports: [CommonModule, TopBannerComponent, OptionsVerticalComponent],
  templateUrl: "./mothers-data.component.html",
})
export class MothersDataComponent {
  mothers;
  motherData: any; // this should house the data from the mother api
  pages: number[] = [1];
  // filters = ["all", "paid", "unpaid", "rejected"];
  // currentFilter = this.filters[0];
  constructor(
    private motherSrv: MotherChildService,
    private notify: NotifyService,
    private sharedSrv: SharedService,
    private router: Router
  ) {
    this.mothers = new TableService();
    this.mothers.initialize(this.motherData, 12);
  }
  ngOnInit() {
    this.getMothers();
    this.pages = Array.from(
      { length: this.mothers.totalPages },
      (_, i) => i + 1
    );
  }

  onEdit(id: string) {
    this.sharedSrv.setViewMode(false);
    this.router.navigateByUrl("/mothers/edit-mother/" + id);
  }

  onView(id: string) {
    this.sharedSrv.setViewMode(true);
    this.router.navigateByUrl("/mothers/view-mother/" + id);
    // const data = this.motherData.find((item: any) => item.id === id);
    // this.router.navigate(["/mothers/view-mother/"], {queryParams: {id: data.id}});
  }

  onDelete(id: string) {
    this.motherSrv.deleteMother(id).subscribe({
      next: (res) => {
        this.notify.notifySuccess("Mother deleted successfully");
        this.getMothers();
      },
      error: (err) => {},
    });
  }

  getMothers() {
    this.motherSrv.getAllMothers().subscribe({
      next: (res) => {
        this.motherData = res;
        this.mothers.initialize(this.motherData, 12);
      },
      error: (err) => {
        this.notify.notifyError(err.message);
      },
    });
  }
}
