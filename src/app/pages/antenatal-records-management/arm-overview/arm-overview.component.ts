import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CreateBankAccountModalComponent } from "@component/shared/create-bank-account-modal/create-bank-account-modal.component";
import { DropdownComponent } from "@component/shared/dropdown/dropdown.component";
import { OptionsHorizComponent } from "@component/shared/options-horiz/options-horiz.component";
import { OptionsVerticalComponent } from "@component/shared/options-vertical/options-vertical.component";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
// import { recentPaymentData } from "@data/payments/arm";
import { ChartOptions } from "@pages/dashboards/style-01/style-01.component";
import { ArmSuppService } from "@service/arm-supp.service";
import { NotifyService } from "@service/notify.service";
import { TableService } from "@service/table.service";
import { NgApexchartsModule } from "ng-apexcharts";
import { ModalService } from "ngx-modal-ease";

@Component({
  selector: "app-payment-overview",
  standalone: true,
  imports: [
    TopBannerComponent,
    OptionsVerticalComponent,
    CommonModule,
    NgApexchartsModule,
  ],
  templateUrl: "./arm-overview.component.html",
})
export class AntenatalRecordsOverviewComponent {
  // actionsData = [
  // 	{
  // 		id: 1,
  // 		title: "Make Transfer",
  // 		desc: "365 Credits",
  // 		icon: "las text-2xl xxl:text-3xl la-exchange-alt",
  // 	},
  // 	{
  // 		id: 2,
  // 		title: "Pay for QR Code",
  // 		desc: "500+ Service Provider",
  // 		icon: "las text-2xl xxl:text-3xl la-qrcode",
  // 	},
  // 	{
  // 		id: 3,
  // 		title: "Pay for Paypal",
  // 		desc: "32 Credits",
  // 		icon: "lab text-2xl xxl:text-3xl la-paypal",
  // 	},
  // ];

  // overviewChartOptions!: ChartOptions;
  arm;
  armData: any; // this would house the data from the api
  pages: number[] = [];
  constructor(
    private modalService: ModalService,
    private armSrv: ArmSuppService,
    private notify: NotifyService
  ) {
    this.arm = new TableService();
    this.arm.initialize(this.armData, 8);
  }

  ngOnInit() {
    this.pages = Array.from({ length: this.arm.totalPages }, (_, i) => i + 1);
  }

  getArmData() {
    this.armSrv.getARM().subscribe({
      next: (res) => {
        this.armData = res;
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
