import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { DropdownComponent } from "@component/shared/dropdown/dropdown.component";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
// import { this.children } from "@data/invoice/this.children";
import { TableService } from "@service/table.service";
import { OptionsVerticalComponent } from "../../../components/shared/options-vertical/options-vertical.component";
import { Child } from "@pages/models/child.model";
interface Invoice {
	id: number;
	title: string;
	invoice: string;
	amount: number;
	dueDate: string;
	status: string;
	time: string;
	rate: number;
}
@Component({
	selector: "iv-app-style-01",
	standalone: true,
	imports: [
		CommonModule,
		TopBannerComponent,
		DropdownComponent,
		OptionsVerticalComponent,
	],
	templateUrl: "./children-data.component.html",
})
export class ChildrenDataComponent {
	childrenData;
	children: any; // save the data from the endpoint to this variable
	pages: number[] = [1];
	filters = ["all", "paid", "unpaid", "rejected"];
	currentFilter = this.filters[0];
	constructor() {
		this.childrenData = new TableService();
		this.childrenData.initialize(this.children, 12);
	}
	// setFilter(filter: string) {
	// 	this.currentFilter = filter;
	// 	if (filter == "all") {
	// 		this.childrenData.initialize(this.children, 12);
	// 		this.pages = Array.from(
	// 			{ length: this.childrenData.totalPages },
	// 			(_, i) => i + 1
	// 		);
	// 	} else {
	// 		const result = this.children.filter((item: any) => item.status == filter);
	// 		this.childrenData.initialize(result);
	// 		this.childrenData.paginate(1);
	// 		this.pages = [1];
	// 	}
	// }
	ngOnInit() {
		this.pages = Array.from(
			{ length: this.childrenData.totalPages },
			(_, i) => i + 1
		);
	}
}
