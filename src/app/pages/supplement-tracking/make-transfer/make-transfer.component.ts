import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core'
import { DropdownComponent } from '@component/shared/dropdown/dropdown.component'
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component'
import { recentPaymentsData } from '@data/private/recentPayments'

import { ChartOptions } from '@pages/dashboards/style-01/style-01.component'
import { TableService } from '@service/table.service'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'app-make-transfer',
  standalone: true,
  imports: [TopBannerComponent, DropdownComponent, CommonModule, NgApexchartsModule],
  templateUrl: './make-transfer.component.html'
})
export class MakeTransferComponent {
  cards: string[] = ['Visa', 'Mastercard', 'Paypal']
  currencies: string[] = ['$', '€', '£', '¥']
  activeIndex = 1
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 }
  recentTransferChart!: ChartOptions
  recentPayments
  pages: number[] = []
  constructor() {
    this.recentPayments = new TableService()
    this.recentPayments.initialize(recentPaymentsData, 8)
  }
  slickInit(e: any) {
    console.log('slick initialized')
  }
  ngOnInit() {
    this.pages = Array.from({ length: this.recentPayments.totalPages }, (_, i) => i + 1)
    this.recentTransferChart = {
      series: [
        {
          name: 'Peter',
          data: [null, 44, 31, 38, null, 34, 55, 51, 67, 21, 35, null, null, 12, 4, 16, null, 8, 36, null, null, 16, null]
        }
      ],
      chart: {
        height: 470,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        },
        animations: {
          enabled: true,
          easing: 'easeout'
        }
      },
      annotations: {
        xaxis: [
          {
            strokeDashArray: 0,
            borderWidth: 0,
            label: {
              borderColor: '#775DD0',
              borderWidth: 0,
              offsetX: -40,
              offsetY: 120,
              style: {
                color: '#fff',
                background: 'none',
                fontSize: '12px'
              },
              text: 'Average Transfer'
            }
          }
        ]
      },
      markers: {
        //@ts-ignore
        width: 8,
        height: 8,
        radius: 50,
        shape: 'circle',
        size: 8
      },
      stroke: {
        width: [4],
        curve: 'straight'
      },
      legend: {
        show: false
      },
      labels: ['23 Dec', '25 Dec', '29 Dec', '31 Dec', '02 Jan', '04 Jan', '06 Jan', '08 Jan', '10 Jan', '12 Jan', '15 Dec', '19 Dec', '21 Dec', '22 Jan', '24 Jan', '26 Jan', '28 Jan', '31 Jan', '02 Feb', '04 Feb', '06 Feb', '04 Feb', '08 Feb'],
      colors: ['#20B757'],
      xaxis: {
        tickAmount: 11,
        axisBorder: {
          show: false
        }
      },
      responsive: [
        {
          breakpoint: 1500,
          options: {
            chart: {
              height: 340
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 360
            }
          }
        },
        {
          breakpoint: 570,
          options: {
            chart: {
              height: 280
            }
          }
        }
      ],
      yaxis: {
        tickAmount: 4,
        min: 0,
        max: 80,
        labels: {
          offsetX: 20
        }
      }
    }
  }
  nextSlide() {
    this.activeIndex == 3 ? (this.activeIndex = 1) : this.activeIndex++
  }
  prevSlide() {
    this.activeIndex == 1 ? (this.activeIndex = 3) : this.activeIndex--
  }
}
