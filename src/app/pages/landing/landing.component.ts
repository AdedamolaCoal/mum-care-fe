import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
	selector: "app-landing",
	standalone: true,
	styleUrls: ["./landing.component.scss"],
	imports: [RouterLink, CommonModule],
	templateUrl: "./landing.component.html",
})
export class LandingComponent implements OnInit{
	moreSection: boolean = false;

	activeRoute: ActivatedRoute = inject(ActivatedRoute);
	subObs: any;

	ngOnInit(): void {
		this.subObs = this.activeRoute.fragment.subscribe((fragment) => {
			// console.log(fragment);
			if (fragment) {
				this.moveToSection(fragment);
			}
		})
	}

	// getActiveRoute(data: string) {
	// 	this.activeRoute.fragment.subscribe((data) => {
	// 		this.moveToSection(data);
	// 	})
	// }

	moveToSection(section: string) {
		document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
	}

	toggleMoreSection() {
		this.moreSection = !this.moreSection;
	}
}
