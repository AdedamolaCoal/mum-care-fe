import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { AddCardModalComponent } from '@component/shared/add-card-modal/add-card-modal.component'
import { DropdownComponent } from '@component/shared/dropdown/dropdown.component'
import { OptionsHorizComponent } from '@component/shared/options-horiz/options-horiz.component'
import { OptionsVerticalComponent } from '@component/shared/options-vertical/options-vertical.component'
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component'
import { creditsData } from '@data/accounts/credits'
import { TableService } from '@service/table.service'
import { ModalService } from 'ngx-modal-ease'

@Component({
  selector: 'app-card-overview',
  standalone: true,
  imports: [CommonModule, TopBannerComponent, OptionsHorizComponent, OptionsVerticalComponent, DropdownComponent, RouterLink],
  templateUrl: './card-overview.component.html'
})
export class CardOverviewComponent {
  yourCredits
  pages:number[]=[]
  cards = [
    {
      id: 1,
      balance: 80700.0,
      expire: "12/27",
      background: "bg-[#4371E9]",
    },
    {
      id: 2,
      balance: 80700.0,
      expire: "12/27",
      background: "bg-[#20B757]",
    },
    {
      id: 3,
      balance: 80700.0,
      expire: "12/27",
      background: "bg-[#47264C]",
    },
    {
      id: 4,
      balance: 80700.0,
      expire: "12/27",
      background: "bg-[#0E777E]",
    },
    {
      id: 5,
      balance: 80700.0,
      expire: "12/27",
      background: "bg-[#5F4607]",
    },
    {
      id: 6,
      balance: 80700.0,
      expire: "12/27",
      background: "bg-[#205CB7]",
    },
    {
      id: 7,
      balance: 80700.0,
      expire: "12/27",
      background: "bg-[#343436]",
    },
  ]
  constructor(private modalService: ModalService) {
    this.yourCredits = new TableService()
    this.yourCredits.initialize(creditsData, 8)
  }
  openModal() {
    this.modalService.open(AddCardModalComponent, {
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
  ngOnInit(){
    this.pages = Array.from({ length: this.yourCredits.totalPages }, (_, i) => i + 1)
  }
}
