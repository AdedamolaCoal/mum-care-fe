import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AddMotherModalComponent } from "@component/shared/add-mother-modal/add-mother-modal.component";
import { DropdownComponent } from "@component/shared/dropdown/dropdown.component";
import { OptionsHorizComponent } from "@component/shared/options-horiz/options-horiz.component";
import { OptionsVerticalComponent } from "@component/shared/options-vertical/options-vertical.component";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
// import { paymentAccountData } from "@data/accounts/paymentAccount";
import { ChartOptions } from "@pages/dashboards/style-01/style-01.component";
import { ArmSuppService } from "@service/arm-supp.service";
import { NotifyService } from "@service/notify.service";
import { TableService } from "@service/table.service";
import { NgApexchartsModule } from "ng-apexcharts";
import { ModalService } from "ngx-modal-ease";
// import { AddSupplementComponent } from "../add-supplement/add-supplement.component";

@Component({
  selector: "supplement-overview",
  standalone: true,
  imports: [
    TopBannerComponent,
    CommonModule,
    NgApexchartsModule,
    OptionsVerticalComponent,
  ],
  templateUrl: "./supplement-overview.component.html",
})
export class SupplementOverviewComponent {
  totalTransferChart!: ChartOptions;
  supplements;
  supplementsData: any; // should house the data from the api
  pages: number[] = [];

  constructor(
    private modalService: ModalService,
    private suppSrv: ArmSuppService,
    private notify: NotifyService
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

  // getLocale(number: number) {
  // 	return new Intl.NumberFormat("en-US", {
  // 		style: "currency",
  // 		currency: "usd",
  // 		minimumFractionDigits: 2,
  // 		maximumFractionDigits: 2,
  // 	}).format(number);
  // }
  // addAccountModal() {
  // 	this.modalService.open(AddSupplementComponent, {
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
