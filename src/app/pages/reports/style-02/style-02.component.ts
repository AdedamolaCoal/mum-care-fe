import { Component } from '@angular/core'
import { DropdownComponent } from '@component/shared/dropdown/dropdown.component'
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component'
import { ChartOptions } from '@pages/dashboards/style-01/style-01.component'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'rp-app-style-02',
  standalone: true,
  imports: [TopBannerComponent, DropdownComponent, NgApexchartsModule],
  templateUrl: './style-02.component.html'
})
export class ReportsStyle02Component {
  acBalanceChart!: ChartOptions
  statChart!: ChartOptions
  statisticsData = [
    {
      title: 'Total Balance',
      amount: '$8500',
      growth: '50.8%'
    },
    {
      title: 'Total Deposits',
      amount: '$2745',
      growth: '50.8%'
    },
    {
      title: 'Yearly In',
      amount: '$5223',
      growth: '50.8%'
    },
    {
      title: 'Yearly Out',
      amount: '$5223',
      growth: '50.8%'
    }
  ]
  ngOnInit() {
    this.acBalanceChart = {
      series: [
        {
          name: 'Recent Year',
          type: 'line',
          data: [20, 38, 38, 73, 55, 63, 44, 75, 53, 80, 40, 80]
        },
        {
          name: 'Last 5 Years',
          type: 'line',
          data: [85, 66, 76, 38, 86, 35, 62, 40, 40, 64, 50, 87]
        }
      ],
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
              text: 'Account Balance'
            }
          }
        ]
      },
      chart: {
        height: 500,
        type: 'line',
        toolbar: {
          show: false
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
          height: 6
        }
      },
      colors: ['#63CC8A', '#FFC861'],
      stroke: {
        width: [3, 3],
        curve: 'smooth',
        lineCap: 'round',
        dashArray: [0, 5]
      },
      xaxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        tickAmount: 12,
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        min: 0,
        max: 100,
        tickAmount: 5,
        labels: {
          offsetX: 15
        }
      },
      fill: {
        opacity: 1
      },
      grid: {
        padding: {
          bottom: 20
        },
        show: true,
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      responsive: [
        {
          breakpoint: 1500,
          options: {
            chart: {
              height: 350
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
              height: 280
            }
          }
        }
      ]
    }
    this.statChart = {
      chart: {
        height: 60,
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
        width: 3,
        lineCap: 'round',
        curve: 'smooth'
      },
      series: [
        {
          name: 'Series 1',
          data: [26, 36, 50, 28, 32, 23, 34]
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
          opacityFrom: 0.4,
          opacityTo: 0,
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
        min: 0,
        max: 50,
        tooltip: {
          enabled: false
          // followCursor: true
        },
        labels: {
          show: false
        }
      }
    }
  }
}
