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
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {
  passwordVisible = false
  conPasswordVisible = false
  registerForm!: FormGroup
  toggleVisibility() {
    this.passwordVisible = !this.passwordVisible
  }
  toggleConVisibility() {
    this.conPasswordVisible = !this.conPasswordVisible
  }

  constructor(private fb: FormBuilder, private router: Router, private authSrv: AuthService, private notifySrv: NotifyService) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        firstname: ['', [Validators.required, Validators.minLength(2)]],
        lastname: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}')]],
        conPassword: ['', [Validators.required, Validators.minLength(8)]],
        phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]{10,}$')]]
      },
      {
        validators: this.authSrv.matchFieldValues('password', 'conPassword')
      }
    )
  }

  onSubmit() {
    this.registerForm.markAllAsTouched()
    if (this.registerForm.valid) {
      const payload = {
        name: this.registerForm.value.firstname + ' ' + this.registerForm.value.lastname,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        role: 'user',
        category: 'org',
        phoneNumber: this.registerForm.value.phoneNumber
      }
      this.authSrv.registerOrg(payload).subscribe({
        next: (res) => {
          this.notifySrv.notifySuccess('User Registration successful')

          // after successful registration, navigate to company info registration page
          this.router.navigateByUrl('/auth/reg-company-info')
        },
        error: (error) => {
          // error handling notification
          this.notifySrv.notifyInfo(error.error.message)
        }
      })
    } else {
      console.log('Error')
    }
  }
}
