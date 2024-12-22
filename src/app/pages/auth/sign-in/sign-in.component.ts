import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "@service/auth.service";
import { NotifyService } from "@service/notify.service";
import { StorageService } from "@service/storage.service";

@Component({
	selector: "app-sign-in",
	standalone: true,
	imports: [RouterLink, ReactiveFormsModule, CommonModule],
	templateUrl: "./sign-in.component.html",
})
export class SignInComponent {
	passwordVisible = false;
	loginForm!: FormGroup;

	userToken: string = "";
	userRefreshToken: string = "";
	user: any;

	toggleVisibility() {
		this.passwordVisible = !this.passwordVisible;
	}

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private authSrv: AuthService,
		private storageSrv: StorageService,
		private notifySrv: NotifyService
	) {}

	ngOnInit() {
		this.loginForm = this.fb.group({
			email: ["", [Validators.required, Validators.email]],
			password: ["", [Validators.required, Validators.minLength(6)]],
		});
	}

	onSubmit() {
		this.loginForm.markAllAsTouched();
		if (this.loginForm.valid) {
			// this.authSrv.login(this.loginForm.value).subscribe({
			//   next: (res: any) => {
			//     this.notifySrv.notifySuccess('Login successful')
			//     const tokens = res.tokens
			//     this.storageSrv.setItem('userToken', tokens.access?.token)
			//     this.storageSrv.setItem('refreshToken', tokens.refresh?.token)
			this.storageSrv.setItem(
				"token",
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEzMSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJpbm5vY2VudGNlY2lsaWE0NUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJpbm5vY2VudGNlY2lsaWE0NUBnbWFpbC5jb20iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IlZGWlQzVlBSVVFNN042TUhMVlZYM1JWRjJUS0JDVUVMIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjpbIlRlYW1NZW1iZXIiLCJWYW4gc2FsZXMiXSwiaHR0cDovL3d3dy5hc3BuZXRib2lsZXJwbGF0ZS5jb20vaWRlbnRpdHkvY2xhaW1zL3RlbmFudElkIjoiNCIsInN1YiI6IjEzMSIsImp0aSI6IjY2ZWRkMzc5LTI2N2QtNDMyNC05ZWY0LTI5MWI4OTcwNjE5YyIsImlhdCI6MTczNDUzNzI5NywidG9rZW5fdmFsaWRpdHlfa2V5IjoiMmFhMDAwZmYtYzI0Mi00ZmQ1LWIwNDItYjdmMThkMzVmMjBiIiwidXNlcl9pZGVudGlmaWVyIjoiMTMxQDQiLCJ0b2tlbl90eXBlIjoiMCIsInJlZnJlc2hfdG9rZW5fdmFsaWRpdHlfa2V5IjoiOGY1OTkxZmEtYTIwMS00N2VmLWFhYTUtOTcyY2ZlMDQwODhjIiwibmJmIjoxNzM0NTM3Mjk3LCJleHAiOjE3MzQ2MjM2OTcsImlzcyI6IkFyY2giLCJhdWQiOiJBcmNoIn0.4jdkXsrrB4Fx81Qfhl6uTfcQpZa0cGiDwIdalBo3T3c"
			);

			//     const user = res.user
			//     this.storageSrv.setItem('user', JSON.stringify(user))

			this.router.navigate(["/dashboard"]);
			//   },
			//   error: (error: any) => {
			//     this.notifySrv.notifyError(error.error.message, error.error.code === 401 ? 'Unauthorized' : '')
			//     console.log(error)
			//   }
			// })
		} else {
			console.log(this.loginForm.errors, this.loginForm);
		}
	}
}
