import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
import { ArmSuppService } from "@service/arm-supp.service";
import { NotifyService } from "@service/notify.service";
import { SharedService } from "@service/shared.service";
import { TableService } from "@service/table.service";
import { NgApexchartsModule } from "ng-apexcharts";
import { ModalService } from "ngx-modal-ease";

@Component({
  selector: "supplement-overview",
  standalone: true,
  imports: [TopBannerComponent, CommonModule, NgApexchartsModule],
  templateUrl: "./supplement-overview.component.html",
})
export class SupplementOverviewComponent {
  supplements;
  supplementsData: any; // should house the data from the api
  pages: number[] = [];

  isView: boolean = false;

  constructor(
    private suppSrv: ArmSuppService,
    private notify: NotifyService,
    private sharedSrv: SharedService,
    private router: Router
  ) {
    this.supplements = new TableService();
    this.supplements.initialize(this.supplementsData, 10);
  }

  ngOnInit() {
    this.getSupplements();
    this.pages = Array.from(
      { length: this.supplements.totalPages },
      (_, i) => i + 1
    );
  }

  getSupplements() {
    this.suppSrv.getSupplements().subscribe({
      next: (res) => {
        this.supplementsData = res;
        this.supplements.initialize(this.supplementsData, 10);
      },
      error: (err) => {
        this.notify.notifyError(err.message);
      },
    });
  }

  onEdit(id: string) {
    this.sharedSrv.setViewMode(false);
    this.router.navigateByUrl("/supplement/edit-supplement/" + id);
  }

  onDelete(id: string) {
    this.suppSrv.deleteSupplement(id).subscribe({
      next: (res) => {
        this.getSupplements();
        this.notify.notifySuccess("Supplement Deleted Successfully");
      },
      error: (err) => {
        this.notify.notifyError(err.message);
      },
    });
  }

  onView(id: string) {
    this.sharedSrv.setViewMode(true);
    this.router.navigateByUrl("/supplement/view-supplement/" + id);
  }
}
