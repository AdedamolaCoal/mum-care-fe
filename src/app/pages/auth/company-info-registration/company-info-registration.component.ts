import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from '@service/auth.service'
import { NotifyService } from '@service/notify.service'

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './company-info-registration.component.html'
})
export class CompanyInfoRegistrationComponent implements OnInit {
  passwordVisible = false
  conPasswordVisible = false
  registerForm!: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private authSrv: AuthService, private notifySrv: NotifyService) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      companyName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      description: ['', [Validators.required]],
      rcNumber: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.registerForm.markAllAsTouched()
    if (this.registerForm.valid) {
      const payload = { ...this.registerForm.value }

      // TODO: this api isn't ready yet, I just placed it here for now as a placeholder
      this.authSrv.companyInfo(payload).subscribe({
        next: (res) => {
          //success notification
          this.notifySrv.notifySuccess('Company Info Registration Successful')

          // after successful registration, navigate to login page
          this.router.navigateByUrl('/auth/sign-in')
        },
        error: (error) => {
          // error handling notification should be here
          this.notifySrv.notifyError(error.error.message)
        }
      })
    } else {
      console.log('Error')
    }
  }
}
