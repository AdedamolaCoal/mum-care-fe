import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { DropdownComponent } from "@component/shared/dropdown/dropdown.component";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
import { invoiceData } from "@data/invoice/invoiceData";
import { TableService } from "@service/table.service";
import { OptionsVerticalComponent } from "../../../components/shared/options-vertical/options-vertical.component";
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
	invoices;
	pages: number[] = [1];
	filters = ["all", "paid", "unpaid", "rejected"];
	currentFilter = this.filters[0];
	constructor() {
		this.invoices = new TableService();
		this.invoices.initialize(invoiceData, 12);
	}
	setFilter(filter: string) {
		this.currentFilter = filter;
		if (filter == "all") {
			this.invoices.initialize(invoiceData, 12);
			this.pages = Array.from(
				{ length: this.invoices.totalPages },
				(_, i) => i + 1
			);
		} else {
			const result = invoiceData.filter((item) => item.status == filter);
			this.invoices.initialize(result);
			this.invoices.paginate(1);
			this.pages = [1];
		}
	}
	ngOnInit() {
		this.pages = Array.from(
			{ length: this.invoices.totalPages },
			(_, i) => i + 1
		);
	}
}
