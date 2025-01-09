import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { AddMotherModalComponent } from '@component/shared/add-mother-modal/add-mother-modal.component'
import { DropdownComponent } from '@component/shared/dropdown/dropdown.component'
import { OptionsVerticalComponent } from '@component/shared/options-vertical/options-vertical.component'
import { PaginationComponent } from '@component/shared/pagination/pagination.component'
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component'
import { creditsData } from '@data/accounts/credits'
import { paymentAccountData } from '@data/accounts/paymentAccount'
import { depositData } from '@data/accounts/totalDepostits'
import { TableService } from '@service/table.service'
import { ModalService } from 'ngx-modal-ease'

@Component({
  selector: 'app-bank-account',
  standalone: true,
  imports: [CommonModule, DropdownComponent, TopBannerComponent, OptionsVerticalComponent, PaginationComponent],
  templateUrl: './bank-account.component.html'
})
export class BankAccountComponent {
  paymentAccounts
  pages: number[] = []
  totalDeposits
  yourCredits
  depositPages: number[] = []
  creditPages: number[] = []
  constructor(private modalService: ModalService) {
    this.paymentAccounts = new TableService()
    this.paymentAccounts.initialize(paymentAccountData, 8)
    this.totalDeposits = new TableService()
    this.totalDeposits.initialize(depositData, 4)
    this.yourCredits = new TableService()
    this.yourCredits.initialize(creditsData, 8)
  }

  areAllItemsChecked(): boolean {
    return this.yourCredits.tableData.length > 1 && this.yourCredits.tableData.every((item) => item.isChecked)
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
    this.pages = Array.from({ length: this.paymentAccounts.totalPages }, (_, i) => i + 1)
    this.depositPages = Array.from({ length: this.totalDeposits.totalPages }, (_, i) => i + 1)
    this.creditPages = Array.from({ length: this.totalDeposits.totalPages }, (_, i) => i + 1)
  }

  addAccountModal() {
    this.modalService.open(AddMotherModalComponent, {
      modal: {
        enter: 'enter-going-down 0.3s ease-out',
        leave: 'fade-out 0.5s'
      },
      overlay: {
        leave: 'fade-out 0.5s'
      },
      data: {
        type: 'Angular modal library'
      }
    })
  }
}
