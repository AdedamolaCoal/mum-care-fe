import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { DropdownComponent } from '@component/shared/dropdown/dropdown.component'
import { OptionsHorizComponent } from '@component/shared/options-horiz/options-horiz.component'
import { OptionsVerticalComponent } from '@component/shared/options-vertical/options-vertical.component'
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component'
import { creditsData } from '@data/accounts/credits'
import { paymentAccountData } from '@data/accounts/paymentAccount'
import { ChartOptions } from '@pages/dashboards/style-01/style-01.component'
import { TableService } from '@service/table.service'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'app-account-overview',
  standalone: true,
  imports: [DropdownComponent, OptionsHorizComponent, TopBannerComponent, NgApexchartsModule, CommonModule,OptionsVerticalComponent],
  templateUrl: './account-overview.component.html'
})
export class AccountOverviewComponent {
  paymentOverViewChartOptions!: ChartOptions
  accountBalanceChartOptions!: ChartOptions
  depositsAccountChartOptions!: ChartOptions
  depositBalanceChartOptions!: ChartOptions
  paymentAccount
  yourAccount
  pages:number[]=[]
  constructor() {
    this.paymentAccount = new TableService()
    this.paymentAccount.initialize(paymentAccountData, 8)
    this.yourAccount = new TableService()
    this.yourAccount.initialize(creditsData, 8)
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
    this.paymentOverViewChartOptions = {
      series: [
        {
          name: 'This Years',
          data: [0, 100, 30, 165, 85, 205, 105, 245, 75, 225, 150, 230]
        },
        {
          name: 'Last Years',
          data: [0, 60, 24, 88, 50, 112, 57, 130, 36, 108, 70, 120]
        }
      ],
      chart: {
        height: 330,
        type: 'area',
        toolbar: {
          show: false
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        lineCap: 'round',
        width: 2,
        dashArray: [5, 0],
        colors: ['#FFC861', '#20B757']
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        min: 0,
        max: 300,
        tickAmount: 5,
        labels: {
          formatter: function (v) {
            return v + ''
          }
        }
      },
      legend: {
        show: false
      },
      colors: ['#FFC861', '#20B757'],
      fill: {
        type: 'gradient',
        colors: ['rgba(255, 200, 97, 0.21)', 'rgba(32, 183, 87, 0.21)'],
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.6
        }
      },
      responsive: [
        {
          breakpoint: 1820,
          options: {
            chart: {
              height: 340
            }
          }
        },
        {
          breakpoint: 1600,
          options: {
            chart: {
              height: 308
            }
          }
        },
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 350
            }
          }
        },
        {
          breakpoint: 570,
          options: {
            chart: {
              height: 250
            }
          }
        },
        {
          breakpoint: 400,
          options: {
            chart: {
              height: 200
            }
          }
        }
      ]
    }
    this.accountBalanceChartOptions = {
      series: [23232.52, 12326.12, 9325.32, 11458.36],
      chart: {
        type: 'donut',
        height:300
      },
      fill: {
        colors: ['#4371E9', '#FFC861', '#20B757', '#FF6161']
      },
      stroke: {
        lineCap: 'round'
      },
      plotOptions: {
        pie: {
          donut: {
            size: '85px',
            labels: {
              show: true,
              value: {
                fontSize: '16px',
                offsetY: 2
              },
              total: {
                show: true,
                label: '99,800.35',
                fontWeight: 600,
                fontSize: '26px',
                formatter: () => 'Total Balance'
              }
            }
          }
        }
      },
      legend: {
        position: 'bottom',
        itemMargin: {
          vertical: 8,
          horizontal: 5
        },
        horizontalAlign: 'center',
        markers: {
          //@ts-ignore
          width: 4,
          height: 4
        }
      },
      dataLabels: {
        enabled: false
      },
      labels: ['23,232 USD', '12,326 EUR', '9,235 GBP', '11,458 RUB']
    }
    this.depositsAccountChartOptions = {
      series: [
        {
          data: [
            {
              x: 'Savings Deposit',
              y: [2800, 4500]
            },
            {
              x: 'Checking Deposit',
              y: [3200, 4100]
            },
            {
              x: 'Fixed Deposit',
              y: [2950, 7800]
            },
            {
              x: 'Joint Deposit',
              y: [3000, 4600]
            },
            {
              x: 'Corporate Deposit',
              y: [3500, 4100]
            },
            {
              x: 'Foreign Deposit',
              y: [4500, 6500]
            },
            {
              x: 'No Interest',
              y: [4100, 5600]
            }
          ]
        }
      ],
      chart: {
        height: 390,
        type: 'rangeBar',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      colors: ['#20B757', '#FFC861'],
      plotOptions: {
        bar: {
          horizontal: true,
          isDumbbell: true,
          dumbbellColors: [['#20B757', '#FFC861']]
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          gradientToColors: ['#FFC861'],
          inverseColors: false
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      xaxis: {
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        labels: { show: window.innerWidth > 500 ? true : false }
      }
    }
    this.depositBalanceChartOptions = {
      series: [76, 67, 61, 90],
      chart: {
        height: 390,
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      colors: ['#4371E9', '#FFC861', '#20B757', '#FF6161'],
      labels: ['23,232 USD', '12,326 EUR', '9,235 GBP', '11,458 RUB'],
      legend: {
        show: true,
        floating: true,
        fontSize: '13px',
        position: 'left',
        offsetX: 50,
        offsetY: -5,
        markers: {
          //@ts-ignore
          width: 6,
          height: 6,
          offsetY: -3
        },
        width: 200,
        labels: {
          useSeriesColors: true
        },
        formatter: function (seriesName, opts) {
          return seriesName
        },
        itemMargin: {
          vertical: 3
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false
            }
          }
        }
      ]
    }
  }
}
