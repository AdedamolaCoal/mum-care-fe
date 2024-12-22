import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { DropdownComponent } from '@component/shared/dropdown/dropdown.component'
import { OptionsVerticalComponent } from '@component/shared/options-vertical/options-vertical.component'
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component'
import { marketOverviewData } from '@data/trading/marketOverview'
import { TableService } from '@service/table.service'

@Component({
  selector: 'td-app-style-01',
  standalone: true,
  imports: [TopBannerComponent, CommonModule, OptionsVerticalComponent, DropdownComponent],
  templateUrl: './style-01.component.html'
})
export class TradingStyle01Component {
  stats = [
    {
      title: 'USD',
      amount: '$85,232',
      percent: 35.7,
      color: 'text-primary',
      icon: 'las la-dollar-sign text-4xl'
    },
    {
      title: 'EUR',
      amount: '€33,450',
      percent: 45.2,
      color: 'text-primary',
      icon: 'las la-euro-sign text-4xl'
    },
    {
      title: 'GBP',
      amount: '£92,543',
      percent: 25.7,
      color: 'text-secondary2',
      icon: 'las la-pound-sign text-4xl'
    },
    {
      title: 'JPY',
      amount: ' ¥25c451',
      percent: 50.7,
      color: 'text-secondary3',
      icon: 'las la-yen-sign text-4xl'
    }
  ]
  marketOverview
  pages:number[]=[]
  constructor() {
    this.marketOverview = new TableService()
    this.marketOverview.initialize(marketOverviewData, 10)
  }

  ngOnInit(){
    this.pages = Array.from({ length: this.marketOverview.totalPages }, (_, i) => i + 1)
  }
}
