import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { OptionsVerticalComponent } from "@component/shared/options-vertical/options-vertical.component";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
import { ArmSuppService } from "@service/arm-supp.service";
import { MotherChildService } from "@service/mother-child.service";
import { NotifyService } from "@service/notify.service";
import { SharedService } from "@service/shared.service";
import { TableService } from "@service/table.service";
import { NgApexchartsModule } from "ng-apexcharts";
import { ModalService } from "ngx-modal-ease";

@Component({
  selector: "app-payment-overview",
  standalone: true,
  imports: [TopBannerComponent, CommonModule, NgApexchartsModule],
  templateUrl: "./arm-overview.component.html",
})
export class AntenatalRecordsOverviewComponent {
  arm;
  armData: any; // this would house the data from the api
  pages: number[] = [];
  constructor(
    private sharedSrv: SharedService,
    private armSrv: ArmSuppService,
    private notify: NotifyService,
    private router: Router,
    private motherSrv: MotherChildService
  ) {
    this.arm = new TableService();
    this.arm.initialize(this.armData, 8);
  }

  ngOnInit() {
    this.getArmData();
    this.pages = Array.from({ length: this.arm.totalPages }, (_, i) => i + 1);
  }

  onView(id: string) {
    this.sharedSrv.setViewMode(true);
    this.router.navigateByUrl("/arm/view-arm/" + id);
  }

  onEdit(id: string) {
    this.sharedSrv.setViewMode(false);
    this.router.navigateByUrl("/arm/edit-arm/" + id);
  }

  onDelete(id: string) {
    this.armSrv.deleteARM(id).subscribe({
      next: (res) => {
        this.notify.notifySuccess("ARM deleted successfully");
        this.getArmData();
      },
      error: (err) => {
        this.notify.notifyError(err.message);
      },
    });
  }

  getArmData() {
    this.armSrv.getARM().subscribe({
      next: (res: any) => {
        this.armData = res.antenatal_records;
        this.arm.initialize(this.armData, 8);
      },
      error: (err) => {
        this.notify.notifyError(err.message);
      },
    });
  }

  // openModal() {
  // 	this.modalService.open(CreateBankAccountModalComponent, {
  // 		modal: {
  // 			enter: "enter-going-down 0.3s ease-out",
  // 			leave: "fade-out 0.5s",
  // 		},
  // 		overlay: {
  // 			leave: "fade-out 0.5s",
  // 		},
  // 		data: {
  // 			type: "Angular modal library",
  // 		},
  // 	});
  // }
}
