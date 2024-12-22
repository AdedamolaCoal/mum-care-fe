import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DropdownComponent } from "@component/shared/dropdown/dropdown.component";
import { OptionsHorizComponent } from "@component/shared/options-horiz/options-horiz.component";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
import { CalendarModule } from "primeng/calendar";

@Component({
	selector: "add-supplement",
	standalone: true,
	imports: [
		TopBannerComponent,
		DropdownComponent,
		OptionsHorizComponent,
		CalendarModule,
		FormsModule,
	],
	templateUrl: "./add-supplement.component.html",
})
export class AddSupplementComponent {
	currencies = ["USD", "GBP", "EUR"];
	date: Date | undefined;
}
