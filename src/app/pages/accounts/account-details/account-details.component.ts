import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { DropdownComponent } from '@component/shared/dropdown/dropdown.component'
import { OptionsVerticalComponent } from '@component/shared/options-vertical/options-vertical.component'
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component'
import { paymentAccountData } from '@data/accounts/paymentAccount'
import { TableService } from '@service/table.service'

@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [DropdownComponent, CommonModule, TopBannerComponent, OptionsVerticalComponent],
  templateUrl: './account-details.component.html'
})
export class AccountDetailsComponent {
  paymentAccount
  pages: number[] = []
  constructor() {
    this.paymentAccount = new TableService()
    this.paymentAccount.initialize(paymentAccountData, 10)
  }
  getLocale(number: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'usd',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(number)
  }
  ngOnInit() {
    this.pages = Array.from({ length: this.paymentAccount.totalPages }, (_, i) => i + 1)
  }
}
