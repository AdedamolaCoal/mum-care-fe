import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DropdownComponent } from "@component/shared/dropdown/dropdown.component";
import { OptionsHorizComponent } from "@component/shared/options-horiz/options-horiz.component";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
import { CalendarModule } from "primeng/calendar";

@Component({
	selector: "app-add-child",
	standalone: true,
	imports: [
		CommonModule,
		TopBannerComponent,
		OptionsHorizComponent,
		DropdownComponent,
		CalendarModule,
		FormsModule,
	],
	templateUrl: "./add-child.component.html",
})
export class AddChildComponent {
	templates = ["Web Design", "Marketing", "UI/UX Design"];
	categories = ["Design", "Development", "Uncategorized"];
	date: Date | undefined;
}
