import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { DropdownComponent } from '@component/shared/dropdown/dropdown.component'
import { OptionsHorizComponent } from '@component/shared/options-horiz/options-horiz.component'
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component'
import { ChartOptions } from '@pages/dashboards/style-01/style-01.component'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'rp-app-style-01',
  standalone: true,
  imports: [TopBannerComponent, OptionsHorizComponent, DropdownComponent, NgApexchartsModule, CommonModule],
  templateUrl: './style-01.component.html'
})
export class ReportsStyle01Component {
  statesData = [
    {
      title: 'USD',
      amount: 85232,
      percent: 75.7,
      color: 'text-primary',
      icon: 'las la-dollar-sign text-5xl'
    },
    {
      title: 'EUR',
      amount: 33450,
      percent: 65.2,
      color: 'text-primary',
      icon: 'las la-euro-sign text-5xl'
    },
    {
      title: 'GBP',
      amount: 92543,
      percent: 55.7,
      color: 'text-secondary2',
      icon: 'las la-pound-sign text-5xl'
    },
    {
      title: 'JPY',
      amount: 36254,
      percent: 80.7,
      color: 'text-secondary3',
      icon: 'las la-yen-sign text-5xl'
    }
  ]
  performanceChartOptions!:ChartOptions
  usdChartOptions!:ChartOptions
  getLocale(number: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'usd',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(number)
  }

  ngOnInit(){
    this.performanceChartOptions = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chart: {
        height: 355,
        type: 'polarArea'
      },
      colors: ['#5D69F4', '#00998B', '#FFC861', '#FF6161', '#8169D3', '#5D69F4', '#00998B', '#FFC861', '#FF6161'],
      labels: ['US Dollar (USD)', 'Euro (EUR)', 'British Pound (GBP)', 'Japanese Yen (JPY)', 'Chinese Yuan (CNY)', 'Canadian Dollar (CAD)', 'Russian Ruble (RUB)', 'Swedish Krona (SEK)', 'Spanish Pesatas (ESP)'],
      stroke: {
        width: 2
      },
      fill: {
        opacity: 1
      },
      responsive: [
        {
          breakpoint: 1820,
          options: {
            chart: {
              height: 450
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 500
            }
          }
        }
      ],
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '12px'
        },
        textAnchor: 'end',
        background: {
          enabled: false
        }
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val + '%'
          }
        }
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 1,
          },
          spokes: {
            strokeWidth: 1
          }
        }
      },
      legend: {
        offsetX: window.innerWidth > 1500 ? 10 : 0,
        offsetY: window.innerWidth > 767 ? 6 : window.innerWidth > 1500 ? 14 : 0,
        itemMargin: {
          vertical: window.innerWidth > 767 ? 2 : window.innerWidth > 1500 ? 4 : 0
        },
        horizontalAlign: 'center',
        position: window.innerWidth > 1500 ? 'right' : 'bottom',
        markers: {
          //@ts-ignore
          width: 5,
          height: 5,
        }
      }
    }
    this.usdChartOptions = {
      series: [
        {
          data: [
            {
              x: '2019-06-21T00:00:00.000Z',
              y: [171.82, 172.54, 166.34, 169.87]
            },
            {
              x: '2019-06-24T00:00:00.000Z',
              y: [170.23, 170.64, 164.12, 165.3]
            },
            {
              x: '2019-06-25T00:00:00.000Z',
              y: [165.94, 165.94, 155.64, 158.59]
            },
            {
              x: '2019-06-26T00:00:00.000Z',
              y: [160.5, 161.75, 150.29, 150.69]
            },
            {
              x: '2019-06-27T00:00:00.000Z',
              y: [150.88, 153.35, 148.04, 151.49]
            },
            {
              x: '2019-06-28T00:00:00.000Z',
              y: [151.91, 152.78, 145.26, 152.09]
            },
            {
              x: '2019-07-01T00:00:00.000Z',
              y: [155.32, 155.32, 143.85, 147.67]
            },
            {
              x: '2019-07-02T00:00:00.000Z',
              y: [145.62, 154.41, 144.38, 154.05]
            },
            {
              x: '2019-07-03T00:00:00.000Z',
              y: [155.44, 158.45, 153.46, 154.98]
            },
            {
              x: '2019-07-05T00:00:00.000Z',
              y: [152.42, 156.02, 151.34, 155.9]
            },
            {
              x: '2019-07-08T00:00:00.000Z',
              y: [154.94, 158.68, 153.01, 157.04]
            },
            {
              x: '2019-07-09T00:00:00.000Z',
              y: [156.56, 158.06, 154.39, 157.72]
            },
            { x: '2019-07-10T00:00:00.000Z', y: [159, 161.38, 156.44, 157.23] },
            {
              x: '2019-07-11T00:00:00.000Z',
              y: [157.26, 159.33, 154.33, 158.04]
            },
            {
              x: '2019-07-12T00:00:00.000Z',
              y: [157.24, 158.49, 151.03, 153.1]
            },
            {
              x: '2019-07-15T00:00:00.000Z',
              y: [153.29, 157.1, 152.39, 153.17]
            },
            {
              x: '2019-07-16T00:00:00.000Z',
              y: [153.05, 155.46, 146.65, 151.79]
            },
            {
              x: '2019-07-17T00:00:00.000Z',
              y: [152.4, 161.77, 151.57, 160.79]
            },
            {
              x: '2019-07-18T00:00:00.000Z',
              y: [159.77, 163.17, 157.15, 162.93]
            },
            { x: '2019-07-19T00:00:00.000Z', y: [164.88, 166.41, 161, 164] },
            {
              x: '2019-07-22T00:00:00.000Z',
              y: [164.39, 166.3, 160.23, 160.86]
            },
            {
              x: '2019-07-23T00:00:00.000Z',
              y: [162.56, 163.1, 154.34, 155.97]
            },
            { x: '2019-07-24T00:00:00.000Z', y: [155.12, 158, 152.18, 156.02] },
            { x: '2019-07-25T00:00:00.000Z', y: [156, 158.58, 153.33, 155.7] },
            {
              x: '2019-07-26T00:00:00.000Z',
              y: [156.73, 159.5, 155.5, 158.06]
            },
            {
              x: '2019-07-29T00:00:00.000Z',
              y: [157.9, 158.52, 143.45, 144.89]
            },
            { x: '2019-07-30T00:00:00.000Z', y: [144.01, 146.08, 140, 142.03] },
            { x: '2019-07-31T00:00:00.000Z', y: [143, 146.9, 140.88, 143.22] },
            {
              x: '2019-08-01T00:00:00.000Z',
              y: [142.93, 148.78, 138.12, 143.66]
            },
            {
              x: '2019-08-02T00:00:00.000Z',
              y: [142.23, 143.5, 137.35, 140.78]
            },
            {
              x: '2019-08-05T00:00:00.000Z',
              y: [135.87, 141.14, 134.32, 135.88]
            },
            { x: '2019-08-06T00:00:00.000Z', y: [137.98, 141.09, 137.2, 139] },
            {
              x: '2019-08-07T00:00:00.000Z',
              y: [135.78, 143.2, 135.41, 142.63]
            },
            {
              x: '2019-08-08T00:00:00.000Z',
              y: [144.06, 150.79, 144.06, 149.51]
            },
            {
              x: '2019-08-09T00:00:00.000Z',
              y: [148.78, 151.37, 146.48, 148.9]
            },
            {
              x: '2019-08-12T00:00:00.000Z',
              y: [148.47, 148.47, 142.16, 143.51]
            },
            {
              x: '2019-08-13T00:00:00.000Z',
              y: [142.02, 147.82, 142.02, 146.23]
            },
            {
              x: '2019-08-14T00:00:00.000Z',
              y: [142.92, 145.15, 138.36, 142.28]
            },
            { x: '2019-08-15T00:00:00.000Z', y: [142.7, 144.5, 139.8, 141.65] },
            {
              x: '2019-08-16T00:00:00.000Z',
              y: [143.23, 146.73, 142.51, 143.79]
            },
            {
              x: '2019-08-19T00:00:00.000Z',
              y: [146.67, 147.69, 140.34, 140.58]
            },
            { x: '2019-08-20T00:00:00.000Z', y: [140, 140.9, 137.34, 139.19] },
            {
              x: '2019-08-21T00:00:00.000Z',
              y: [141.95, 149.51, 140.75, 148.08]
            },
            {
              x: '2019-08-22T00:00:00.000Z',
              y: [148.11, 149.27, 142.16, 142.34]
            },
            { x: '2019-08-23T00:00:00.000Z', y: [141.97, 146, 138.62, 139.37] },
            {
              x: '2019-08-26T00:00:00.000Z',
              y: [142.36, 146.92, 140.38, 146.65]
            },
            {
              x: '2019-08-27T00:00:00.000Z',
              y: [153.05, 158.25, 149.15, 150.21]
            },
            {
              x: '2019-08-28T00:00:00.000Z',
              y: [154.26, 156.89, 145.35, 147.98]
            },
            {
              x: '2019-08-29T00:00:00.000Z',
              y: [150.5, 155.91, 148.25, 154.36]
            },
            { x: '2019-08-30T00:00:00.000Z', y: [155.59, 157.19, 148, 152.31] },
            { x: '2019-09-03T00:00:00.000Z', y: [150.7, 155, 147.35, 149.94] },
            {
              x: '2019-09-04T00:00:00.000Z',
              y: [152.98, 160.41, 152.98, 158.66]
            },
            { x: '2019-09-05T00:00:00.000Z', y: [156.66, 159, 142.35, 150.44] },
            {
              x: '2019-09-06T00:00:00.000Z',
              y: [149.66, 150.33, 140.17, 140.63]
            },
            {
              x: '2019-09-09T00:00:00.000Z',
              y: [140.62, 142.56, 125.2, 131.37]
            },
            {
              x: '2019-09-10T00:00:00.000Z',
              y: [127.43, 136.25, 126.14, 129.02]
            },
            {
              x: '2019-09-11T00:00:00.000Z',
              y: [128.58, 132.49, 126.45, 130.58]
            },
            { x: '2019-09-12T00:00:00.000Z', y: [133, 135.8, 128.3, 128.53] },
            {
              x: '2019-09-13T00:00:00.000Z',
              y: [127.74, 128.18, 121.12, 123.29]
            },
            { x: '2019-09-16T00:00:00.000Z', y: [121.29, 132.12, 120.05, 132] },
            { x: '2019-09-17T00:00:00.000Z', y: [131.56, 136.08, 129.71, 136] },
            {
              x: '2019-09-18T00:00:00.000Z',
              y: [136.06, 136.74, 131.19, 134.28]
            },
            { x: '2019-09-19T00:00:00.000Z', y: [134.21, 135, 130.36, 131.46] },
            {
              x: '2019-09-20T00:00:00.000Z',
              y: [133.01, 134.9, 129.52, 131.82]
            }
          ]
        }
      ],
      chart: {
        toolbar: {
          show: false
        },
        width:'100%',
        type: 'candlestick',
        height: 400
      },
      responsive: [
        {
          breakpoint: 320,
          options: {
            chart: {
              height: 200
            }
          }
        }
      ],
      plotOptions: {
        candlestick: {
          colors: {
            upward: '#20B757',
            downward: '#FFC861'
          }
        }
      },

      xaxis: {
        type: 'numeric',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        tooltip: {
          enabled: false
        },
        axisBorder: {
          show: false
        },
      },
      yaxis: {
        tooltip: {
          enabled: false
          // followCursor: true
        },
        labels: {
          // show: window.innerWidth > 768 ? true : false,
          formatter: function (val) {
            return val.toFixed(0)
          }
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: false
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      tooltip: {
        enabled: true
      }
    }
  }

}
