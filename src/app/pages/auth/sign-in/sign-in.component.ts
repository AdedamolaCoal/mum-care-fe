import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router, RouterLink, RouterModule } from "@angular/router";
import { AuthService } from "@service/auth.service";
import { NotifyService } from "@service/notify.service";
import { StorageService } from "@service/storage.service";

@Component({
  selector: "app-sign-in",
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
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
      const payload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      };
      this.authSrv.login(payload).subscribe({
        next: (res: any) => {
          console.log(res);
          this.notifySrv.notifySuccess("Login successful");
          const data = res;
          this.storageSrv.setItem("token", data?.access_token);
          this.storageSrv.setItem("refreshToken", data?.refresh_token);

          const user = res.user;
          this.storageSrv.setItem("user", user);

          this.router.navigate(["/dashboard"]);
        },
        error: (error: any) => {
          this.notifySrv.notifyError(
            error.message,
            error.code === 401 ? "Unauthorized" : ""
          );
          console.log(error);
        },
      });
    } else {
      console.log(this.loginForm.errors, this.loginForm);
    }
  }
}
