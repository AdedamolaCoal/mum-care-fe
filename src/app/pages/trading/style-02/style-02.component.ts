import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { DropdownComponent } from '@component/shared/dropdown/dropdown.component'
import { OptionsHorizComponent } from '@component/shared/options-horiz/options-horiz.component'
import { OptionsVerticalComponent } from '@component/shared/options-vertical/options-vertical.component'
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component'
import { marketOverviewData } from '@data/trading/marketOverview'
import { ChartOptions } from '@pages/dashboards/style-01/style-01.component'
import { TableService } from '@service/table.service'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'td-app-style-02',
  standalone: true,
  imports: [TopBannerComponent, OptionsHorizComponent, OptionsVerticalComponent, CommonModule, NgApexchartsModule, DropdownComponent],
  templateUrl: './style-02.component.html'
})
export class TradingStyle02Component {
  statChart!: ChartOptions
  usdChart!: ChartOptions
  stats = [
    {
      id: 1,
      title: 'USD',
      amount: 72245,
      percent: 28.3,
      color: 'text-primary',
      arrow: 'las la-arrow-up text-lg'
    },
    {
      id: 2,
      title: 'EUR',
      amount: 72245,
      percent: 45.3,
      color: 'text-primary',
      arrow: 'las la-arrow-up text-lg'
    },
    {
      id: 3,
      title: 'GBP',
      amount: 72245,
      percent: -12.3,
      color: 'text-secondary2',
      arrow: 'las la-arrow-down text-lg'
    },
    {
      id: 4,
      title: 'JPY',
      amount: 72245,
      percent: 10.3,
      color: 'text-secondary3',
      arrow: 'las la-arrows-alt-v text-lg'
    }
  ]
  marketOverview
  pages: number[] = []
  constructor() {
    this.marketOverview = new TableService()
    this.marketOverview.initialize(marketOverviewData, 10)
  }

  ngOnInit() {
    this.pages = Array.from({ length: this.marketOverview.totalPages }, (_, i) => i + 1)
    this.statChart = {
      chart: {
        height: 50,
        width: 120,
        type: 'area',
        sparkline: {
          enabled: true
        },
        toolbar: {
          show: false
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 800
        }
      },
      grid: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 1
      },
      series: [
        {
          name: 'Series 1',
          data: [40, 42, 35, 38, 52, 17, 15, 19, 29, 35, 30, 40, 35, 45, 35, 29, 38, 51, 56, 48, 53, 57, 69, 65, 53, 39, 53, 38, 52, 51, 49, 50, 36, 63, 90, 72, 75, 89, 96, 72, 91, 83, 71, 61, 52, 45, 49]
        }
      ],
      tooltip: {
        enabled: false
      },
      colors: ['#20B757'],
      fill: {
        colors: ['#20B757'],
        opacity: 1,
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 0.3,
          gradientToColors: undefined,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 0.1,
          colorStops: []
        }
      },
      xaxis: {
        tooltip: {
          enabled: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: {
        tooltip: {
          enabled: false
          // followCursor: true
        },
        labels: {
          show: false
        }
      }
    }
    this.usdChart = {
      series: [
        {
          name: 'USD',
          data: [0, 100, 30, 165, 85, 205, 105, 245, 75, 225, 150, 230]
        },
        {
          name: 'EUR',
          data: [0, 60, 24, 88, 50, 112, 57, 130, 36, 108, 70, 120]
        }
      ],
      chart: {
        height: 289,
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
        show: true,
        itemMargin: {
          horizontal: 15
        },
        markers: {
          //@ts-ignore
          width: 6,
          height: 6,
          offsetX: -5
        }
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
        }
      ],
      grid: {
        padding: {
          bottom: 15
        }
      }
    }
  }
  getLocale(number: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'usd',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(number)
  }
}
