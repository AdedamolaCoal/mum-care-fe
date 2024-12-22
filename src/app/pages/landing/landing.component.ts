import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
	selector: "app-landing",
	standalone: true,
	styleUrls: ["./landing.component.scss"],
	imports: [RouterLink, CommonModule],
	templateUrl: "./landing.component.html",
})
export class LandingComponent {
	moreSection: boolean = false;

	toggleMoreSection() {
		this.moreSection = !this.moreSection;
	}
}
