import { inject, Injectable } from '@angular/core'
import { ToastrService } from 'ngx-toastr'

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private toastr = inject(ToastrService)
  constructor() {}

  notifySuccess(message: string, title?: string) {
    this.toastr.success(message, title, {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      closeButton: true
    })
  }

  notifyError(message: string, title?: string) {
    this.toastr.error(message, title, {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      closeButton: true
    })
  }

  notifyInfo(message: string, title?: string) {
    this.toastr.info(message, title, {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      closeButton: true
    })
  }

  notifyWarning(message: string, title?: string) {
    this.toastr.warning(message, title, {
      timeOut: 3000,
      positionClass: 'toast-top-right',
      closeButton: true
    })
  }
}
