import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { DropdownComponent } from '@component/shared/dropdown/dropdown.component'
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component'
import { documentationsData } from '@data/cards/documentations'
import { ChartOptions } from '@pages/dashboards/style-01/style-01.component'
import { TableService } from '@service/table.service'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [TopBannerComponent, DropdownComponent, CommonModule, NgApexchartsModule],
  templateUrl: './card-details.component.html'
})
export class CardDetailsComponent {
  cards = ['Visa', 'Payoneer', 'Mastercard']
  cardHistoryChartOptions!: ChartOptions
  transactionChartOptions!: ChartOptions
  documentations
  pages:number[]=[]
  constructor() {
    this.documentations = new TableService()
    this.documentations.initialize(documentationsData, 8)
  }
  ngOnInit() {
    this.cardHistoryChartOptions = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: 'donut'
      },
      fill: {
        colors: ['#5D69F4', '#20B757', '#FFC861', '#FF6161', '#775DD0']
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              value: {
                fontSize: '16px',
                offsetY: 2
              },
              total: {
                show: true,
                label: 'Card',
                fontSize: '24px',
                formatter: () => 'Transaction'
              }
            }
          }
        }
      },
      legend: {
        position: window.innerWidth > 1400 ? 'right' : 'bottom',
        itemMargin: {
          vertical: window.innerWidth > 1500 ? 4 : 2
        },
        offsetY: window.innerWidth > 1830 ? 40 : window.innerWidth > 1700 ? 20 : 0,
        horizontalAlign: 'center',
        markers: {
          //@ts-ignore
          width: 8,
          height: 8
        }
      },
      labels: ['Completed', 'In Progress', 'Yet to Start', 'Pending', 'Canceled'],
      dataLabels: {
        style: {
          fontSize: '10px',
          fontWeight: 400
        }
      }
    }
    this.transactionChartOptions = {
      series: [
        {
          name: 'Payment Transaction',
          data: [44, 55, 41, 64, 22, 43, 21]
        },
        {
          name: 'Cashout Transaction',
          data: [53, 32, 33, 52, 13, 44, 32]
        }
      ],
      chart: {
        type: 'bar',
        height: 352,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          barHeight: 14,
          horizontal: true,
          dataLabels: {
            position: 'top'
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },
      fill: {
        colors: ['#20B757', '#FFC861']
      },
      colors: ['#20B757', '#FFC861'],
      stroke: {
        show: true,
        width: 1
      },
      tooltip: {
        shared: true,
        intersect: false
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
        axisBorder: {
          show: false
        }
      },
      legend: {
        itemMargin: {
          horizontal: 20
        },
        markers: {
          //@ts-ignore
          width: 6,
          height: 6,
          radius: 20
        }
      },
      grid: {
        padding: {
          bottom: 20
        }
      }
    }
    this.pages = Array.from({ length: this.documentations.totalPages }, (_, i) => i + 1)
  }
}
