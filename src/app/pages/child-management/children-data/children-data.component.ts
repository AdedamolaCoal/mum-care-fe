import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
// import { this.children } from "@data/invoice/this.children";
import { TableService } from "@service/table.service";
import { MotherChildService } from "@service/mother-child.service";
import { SharedService } from "@service/shared.service";
import { Router } from "@angular/router";
import { NotifyService } from "@service/notify.service";
@Component({
  selector: "iv-app-style-01",
  standalone: true,
  imports: [CommonModule, TopBannerComponent],
  templateUrl: "./children-data.component.html",
})
export class ChildrenDataComponent {
  childrenData;
  children: any; // save the data from the endpoint to this variable
  pages: number[] = [1];
  //   currentFilter = this.filters[0];
  constructor(
    private childSrv: MotherChildService,
    private sharedSrv: SharedService,
    private router: Router,
    private notify: NotifyService
  ) {
    this.childrenData = new TableService();
    this.childrenData.initialize(this.children, 12);
  }
  ngOnInit() {
    this.getChildren();
    this.pages = Array.from(
      { length: this.childrenData.totalPages },
      (_, i) => i + 1
    );
  }

  getChildren() {
    this.childSrv.getChildren().subscribe({
      next: (res) => {
        this.children = res;
        this.childrenData.initialize(this.children, 12);
      },
      error: (err) => {
        this.notify.notifyError(err.message);
      },
    });
  }

  onEdit(id: string) {
    this.sharedSrv.setViewMode(false);
    this.router.navigateByUrl("/child/edit-child/" + id);
  }

  onView(id: string) {
    this.sharedSrv.setViewMode(true);
    this.router.navigateByUrl("/child/view-child/" + id);
  }

  onDelete(id: string) {
    this.childSrv.deleteChild(id).subscribe({
      next: (res) => {
        this.notify.notifySuccess("Child data deleted successfully");
        this.getChildren();
      },
      error: (err) => {
        this.notify.notifyError(err.message);
      },
    });
  }
}
