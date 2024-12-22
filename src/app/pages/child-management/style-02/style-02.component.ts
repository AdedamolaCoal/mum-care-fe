import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { DropdownComponent } from '@component/shared/dropdown/dropdown.component'
import { OptionsHorizComponent } from '@component/shared/options-horiz/options-horiz.component'
import { ProgressChartComponent } from '@component/shared/progress-chart/progress-chart.component'
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component'
import { invoiceData } from '@data/invoice/invoiceData'
import { TableService } from '@service/table.service'

@Component({
  selector: 'iv-app-style-02',
  standalone: true,
  imports: [CommonModule,DropdownComponent,TopBannerComponent, OptionsHorizComponent,ProgressChartComponent],
  templateUrl: './style-02.component.html'
})
export class InvoicingStyle02Component {
  invoices
  stats = [
    {
      id:1,
      title: 'Total Income',
      amount: '$8500 USD',
      percent: 35.7,
      series: 35.5
    },
    {
      id:1,
      title: 'Total Spending',
      amount: '$3500 USD',
      percent: 45.2,
      series: 78.5
    },
    {
      id:1,
      title: 'Spending Goal',
      amount: '$9254 USD',
      percent: 25.7,
      series: 55.5
    },
    {
      id:1,
      title: 'Total Transactions',
      amount: '$17000 USD',
      percent: 50.7,
      series: 83.5
    }
  ]
  pages: number[] = [1]
  filters = ['all', 'paid', 'unpaid', 'rejected']
  currentFilter = this.filters[0]
  constructor() {
    this.invoices = new TableService()
    this.invoices.initialize(invoiceData, 12)
  }
  setFilter(filter: string) {
    this.currentFilter = filter
    if (filter == 'all') {
      this.invoices.initialize(invoiceData, 12)
      this.pages = Array.from({ length: this.invoices.totalPages }, (_, i) => i + 1)
    } else {
      const result = invoiceData.filter((item) => item.status == filter)
      this.invoices.initialize(result)
      this.invoices.paginate(1)
      this.pages = [1]
    }
  }
  ngOnInit() {
    this.pages = Array.from({ length: this.invoices.totalPages }, (_, i) => i + 1)
  }
}
