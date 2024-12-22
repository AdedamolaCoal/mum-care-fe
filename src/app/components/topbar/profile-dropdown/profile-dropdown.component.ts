import { NgClass } from "@angular/common";
import { Component, HostListener, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "@service/auth.service";
import { NotifyService } from "@service/notify.service";

@Component({
	selector: "app-profile-dropdown",
	standalone: true,
	imports: [NgClass, RouterLink],
	templateUrl: "./profile-dropdown.component.html",
})
export class ProfileDropdownComponent implements OnInit {
	isUser: string = "";
	isEmail: string = "";

	constructor(
		private authSrv: AuthService,
		private route: Router,
		private notifySrv: NotifyService
	) {}

	user() {
		// const user = localStorage.getItem('user') || ''
		// if (!user) {
		//   return
		// }

		// const userData = JSON.parse(user)
		const userData = this.authSrv.getUser();
		this.isUser = userData.name;
		this.isEmail = userData.email;
	}

	logout() {
		// const token: any = JSON.parse(localStorage.getItem('refreshToken') || '')
		const token = this.authSrv.getRefreshToken();
		if (token) {
			const body: any = { refreshToken: token };
			this.authSrv.logout(body).subscribe({
				next: () => {
					this.notifySrv.notifySuccess("Logged out successfully");
					localStorage.clear();
					this.route.navigate(["/auth/sign-in"]);
				},
				error: (error) => {
					this.notifySrv.notifyError(error.error.message);
				},
			});
		}
	}

	isOpen = false;
	toggleOpen() {
		this.isOpen = !this.isOpen;
	}
	@HostListener("document:click", ["$event"])
	onDocumentClick(event: MouseEvent): void {
		// Check if the click event target is not within the sidebar
		if (
			!document.querySelector("#profile")!.contains(event.target as Node) &&
			!document.querySelector("#profile-btn")!.contains(event.target as Node)
		) {
			this.isOpen = false; // Close the sidebar
		}
	}

	ngOnInit(): void {
		this.user();
	}
}
