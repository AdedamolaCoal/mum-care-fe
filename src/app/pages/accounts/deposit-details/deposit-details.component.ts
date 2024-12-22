import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { AddAccountModalComponent } from '@component/shared/add-account-modal/add-account-modal.component'
import { DropdownComponent } from '@component/shared/dropdown/dropdown.component'
import { OptionsVerticalComponent } from '@component/shared/options-vertical/options-vertical.component'
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component'
import { depositData } from '@data/accounts/totalDepostits'
import { TableService } from '@service/table.service'
import { ModalService } from 'ngx-modal-ease'

@Component({
  selector: 'app-deposit-details',
  standalone: true,
  imports: [CommonModule, DropdownComponent, TopBannerComponent, OptionsVerticalComponent],
  templateUrl: './deposit-details.component.html'
})
export class DepositDetailsComponent {
  totalDeposits
  pages: number[] = []
  constructor(private modalService: ModalService) {
    this.totalDeposits = new TableService()
    this.totalDeposits.initialize(depositData, 4)
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
    this.pages = Array.from({ length: this.totalDeposits.totalPages }, (_, i) => i + 1)
  }

  addAccountModal() {
    this.modalService.open(AddAccountModalComponent, {
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
