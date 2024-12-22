import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DropdownComponent } from "@component/shared/dropdown/dropdown.component";
import { OptionsHorizComponent } from "@component/shared/options-horiz/options-horiz.component";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
import { CalendarModule } from "primeng/calendar";

@Component({
	selector: "app-make-payment",
	standalone: true,
	imports: [
		DropdownComponent,
		CommonModule,
		TopBannerComponent,
		OptionsHorizComponent,
		CalendarModule,
		FormsModule,
	],
	templateUrl: "./add-arm.component.html",
})
export class AddArmComponent {
	payfor = ["National Grid", "Electricity", "Natural Gas"];
	currencies = ["USD", "GBP", "EUR"];
	medium = ["Paypal", "Visa", "Mastercard"];
	date: Date | undefined;
}
