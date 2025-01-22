import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { DropdownComponent } from "@component/shared/dropdown/dropdown.component";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
// import { this.motherData } from "@data/invoice/this.motherData";
import { TableService } from "@service/table.service";
import { OptionsVerticalComponent } from "../../../components/shared/options-vertical/options-vertical.component";
import { MotherChildService } from "@service/mother-child.service";
import { NotifyService } from "@service/notify.service";
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
    private notify: NotifyService
  ) {
    this.mothers = new TableService();
    this.mothers.initialize(this.motherData, 12);
  }
  // setFilter(filter: string) {
  // 	this.currentFilter = filter;
  // 	if (filter == "all") {
  // 		this.mothers.initialize(this.motherData, 12);
  // 		this.pages = Array.from(
  // 			{ length: this.mothers.totalPages },
  // 			(_, i) => i + 1
  // 		);
  // 	} else {
  // 		const result = this.motherData.filter((item: any) => item.status == filter);
  // 		this.mothers.initialize(result);
  // 		this.mothers.paginate(1);
  // 		this.pages = [1];
  // 	}
  // }
  ngOnInit() {
    this.pages = Array.from(
      { length: this.mothers.totalPages },
      (_, i) => i + 1
    );
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
