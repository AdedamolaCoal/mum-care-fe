import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
import { ArmSuppService } from "@service/arm-supp.service";
import { NotifyService } from "@service/notify.service";
import { SharedService } from "@service/shared.service";
import { TableService } from "@service/table.service";
import { NgApexchartsModule } from "ng-apexcharts";

@Component({
  selector: "app-immunization-overview",
  standalone: true,
  imports: [TopBannerComponent, CommonModule, NgApexchartsModule],
  templateUrl: "./immunization-overview.component.html",
})
export class ImmunizationOverviewComponent {
  immunization;
  immunizationData: any; // this would house the data from the api
  pages: number[] = [];
  constructor(
    private sharedSrv: SharedService,
    private immunizationSrv: ArmSuppService,
    private notify: NotifyService,
    private router: Router
  ) {
    this.immunization = new TableService();
    this.immunization.initialize(this.immunizationData, 8);
  }

  ngOnInit() {
    this.getImmunizationData();
    this.pages = Array.from(
      { length: this.immunization.totalPages },
      (_, i) => i + 1
    );
  }

  onView(id: string) {
    this.sharedSrv.setViewMode(true);
    this.router.navigateByUrl("/immunization/view-immunization/" + id);
  }

  onEdit(id: string) {
    this.sharedSrv.setViewMode(false);
    this.router.navigateByUrl("/immunization/edit-immunization/" + id);
  }

  onDelete(id: string) {
    this.immunizationSrv.deleteImmunization(id).subscribe({
      next: (res) => {
        this.notify.notifySuccess("Immunization deleted successfully");
        this.getImmunizationData();
      },
      error: (err) => {
        this.notify.notifyError(err.message);
      },
    });
  }

  getImmunizationData() {
    this.immunizationSrv.getImmunization().subscribe({
      next: (res) => {
        this.immunizationData = res;
        this.immunization.initialize(this.immunizationData, 8);
      },
      error: (err) => {
        this.notify.notifyError(err.message);
      },
    });
  }
}
