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
    this.formInit();
  }

  formInit() {
    this.registerForm = this.fb.group(
      {
        hospital_name: ['', [Validators.required, Validators.minLength(2)]],
        hospital_address: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}')]],
        conPassword: ['', [Validators.required, Validators.minLength(8)]],
        phone_number: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]{10,}$')]]
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
        hospital_name: this.registerForm.value.hospital_name,
        hospital_address: this.registerForm.value.hospital_address,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        // role: 'user',
        // category: 'org',
        phone_number: this.registerForm.value.phone_number
      }
      this.authSrv.register(payload).subscribe({
        next: (res) => {
          this.notifySrv.notifySuccess('Registration successful')

          // after successful registration, navigate to company info registration page
          this.router.navigateByUrl('/dashboard')
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
