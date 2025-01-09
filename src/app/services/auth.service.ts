import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment/environment";
import {
	AbstractControl,
	FormGroup,
	ValidationErrors,
	ValidatorFn,
} from "@angular/forms";
import { NotifyService } from "./notify.service";
import { StorageService } from "./storage.service";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	env = environment.url;

	constructor(private http: HttpClient, private notifySrv: NotifyService, private storageSrv: StorageService) {}

	// Check if the user is logged in
	isLoggedIn(): boolean {
		// check for token in localStorage
		return !!localStorage.getItem("token");
	}

	// get user data from local storage
	getUser() {
		const user = this.storageSrv.getItem("user");
		if (!user) {
			this.notifySrv.notifyError("User not found");
			return;
		}
		return user;
	}

	// get token from local storage
	getToken() {
		const token = localStorage.getItem("token");

		if (!token) {
			this.notifySrv.notifyError("Token not found");
			return;
		}
		return token;
	}

	// get refresh token from local storage
	getRefreshToken() {
		const refreshToken = localStorage.getItem("refreshToken");

		if (!refreshToken) {
			this.notifySrv.notifyError("Token not found");
			return;
		}
		return refreshToken;
	}

	// login api
	login(body: { email: string; password: string }) {
		return this.http.post(`${this.env}/login`, body);
	}

	// register api for hospital
	register(body: {
		hospital_name: string;
		hospital_address: string;
		email: string;
		password: string;
		phone_number: number;
	}) {
		return this.http.post(`${this.env}auth/register`, body);
	}

	// register api for company information
	// companyInfo(body: {
	// 	companyName: string;
	// 	companyEmail: string;
	// 	companyDescription: string;
	// 	rcNumber: string;
	// }) {
	// 	return this.http.post(`${this.env}auth`, body);
	// }

	// logout api
	logout(token: any) {
		return this.http.post(`${this.env}auth/logout`, token);
	}

	// match two fields for password validation
	matchFieldValues(control1: string, control2: string): ValidatorFn {
		return (control: AbstractControl): ValidationErrors | null => {
			const group = control as FormGroup;

			if (!group || !group.controls) {
				return null;
			}

			const control1Control = group.controls[control1];
			const control2Control = group.controls[control2];

			if (!control1Control || !control2Control) {
				return null;
			}

			const control1Value = control1Control.value;
			const control2Value = control2Control.value;

			if (!control1Value && !control2Value) {
				return null;
			}

			const result =
				control1Value === control2Value
					? null
					: {
							fieldsDoNotMatch: true,
					  };
			return result;
		};
	}
}
