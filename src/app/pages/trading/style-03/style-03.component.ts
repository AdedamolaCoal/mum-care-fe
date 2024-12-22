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
  selector: 'td-app-style-03',
  standalone: true,
  imports: [CommonModule,NgApexchartsModule,DropdownComponent,OptionsHorizComponent,OptionsVerticalComponent,TopBannerComponent],
  templateUrl: './style-03.component.html'
})
export class TradingStyle03Component {
  flipped=false
  statChart!: ChartOptions
  highlightChart!: ChartOptions
  stats = [
    {
      title: 'USD',
      amount: 85232,
      percent: 70.7,
      color: 'text-primary',
      icon: 'las la-dollar-sign text-2xl lg:text-3xl xxl:text-4xl',
      arrow: 'las la-arrow-up text-lg'
    },
    {
      title: 'EUR',
      amount: 33450,
      percent: 50.2,
      color: 'text-secondary3',
      icon: 'las la-euro-sign text-2xl lg:text-3xl xxl:text-4xl',
      arrow: 'las la-arrows-alt-v text-lg'
    },
    {
      title: 'GBP',
      amount: 92543,
      percent: 9.7,
      color: 'text-secondary2',
      icon: 'las la-pound-sign text-2xl lg:text-3xl xxl:text-4xl',
      arrow: 'las la-arrow-down text-lg'
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
    this.highlightChart = {
      series: [
        {
          name: 'USD',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        },
        {
          name: 'EUR',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        },
        {
          name: 'GBP',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }
      ],
      chart: {
        height: 290,
        width:'100%',
        type: 'line',
        stacked: false,
        toolbar: {
          show: false
        }
      },
      legend: {
        itemMargin: {
          horizontal: 20
        },
        offsetY: 8,
        markers: {
          //@ts-ignore
          height: 6,
          width: 6,
          offsetX: -5
        },
      },
      stroke: {
        width: [0, 2, 3],
        curve: 'smooth',
        colors: ['#FFC861', '#4371E9']
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },
      fill: {
        opacity: [0.85, 0.05, 1],
        colors: ['#20B757', '#4371E9'],
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 1,
          opacityTo: 0.3,
        }
      },
      labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
      xaxis: {
        type: 'datetime',
        axisBorder: {
          show: false
        },
      },
      yaxis: {
        min: 0,
      },
      tooltip: {
        shared: true,
        intersect: false
      },
      grid: {
        padding: {
          bottom: 20
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
