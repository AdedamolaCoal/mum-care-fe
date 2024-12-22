import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { OptionsHorizComponent } from '@component/shared/options-horiz/options-horiz.component'
import { ChartOptions } from '../style-01/style-01.component'
import { NgApexchartsModule } from 'ng-apexcharts'
import { DropdownComponent } from '@component/shared/dropdown/dropdown.component'
import { TableService } from '@service/table.service'
import { transactionsData } from '@data/dashboards/style4transactions'
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component'
const statesData = [
  {
    title: 'Total Income',
    amount: '971.28 USD',
    percent: 35.7
  },
  {
    title: 'Total Spending',
    amount: '771.28 USD',
    percent: 45.2
  },
  {
    title: 'Spending Goal',
    amount: '1271.28 USD',
    percent: 25.7
  },
  {
    title: 'Total Transactions',
    amount: '1871.28 USD',
    percent: 50.7
  }
]
@Component({
  selector: 'app-style-04',
  standalone: true,
  imports: [CommonModule, OptionsHorizComponent, NgApexchartsModule,DropdownComponent,TopBannerComponent],
  templateUrl: './style-04.component.html'
})
export class Style04Component {
  stats = statesData
  isFlipped=false
  statChartOptions!: ChartOptions
  incomeExpenseChart!: ChartOptions
  weeklyTransactions!:ChartOptions
  tableService
  constructor(){
    this.tableService = new TableService()
    this.tableService.initialize(transactionsData)
  }

  flipInputs(){
    this.isFlipped=!this.isFlipped
  }

  getLocale(number: number) {
    return number.toLocaleString()
  }

  ngOnInit() {
    this.statChartOptions = {
      chart: {
        height: 60,
        type: 'bar',
        width: 130,
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
        show: false
      },
      series: [
        {
          name: 'Series 1',
          data: [8, 16, 12, 34, 22, 18]
        }
      ],
      tooltip: {
        enabled: false
      },
      fill: {
        colors: ['rgba(32, 183, 87, 0.30)']
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: 'end'
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
        max: 34,
        tooltip: {
          enabled: false
          // followCursor: true
        },
        labels: {
          show: false
        }
      }
    }
    this.incomeExpenseChart = {
      series: [
        {
          name: 'This Years',
          data: [77, 78, 38, 38, 38, 73, 73, 54, 54, 17, 17, 58],
          type: 'line'
        },
        {
          name: 'Last Years',
          data: [36, 36, 63, 63, 13, 13, 60, 60, 40, 40, 82, 82],
          type: 'line'
        }
      ],
      chart: {
        height: 289,
        type: 'line',
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
        colors: ['#20B757', '#FFC861']
      },
      xaxis: {
        categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan'],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        min: 0,
        max: 100,
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
      colors: ['rgba(32, 183, 87)', 'rgba(255, 200, 97)'],
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
    this.weeklyTransactions = {
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
                fontSize: '14px',
                offsetY: 2
              },
              total: {
                show: true,
                label: 'Bank',
                fontSize: '20px',
                formatter: () => 'Transactions'
              }
            }
          }
        }
      },
      legend: {
        position: 'bottom',
        itemMargin: {
          vertical: 8,
          horizontal: 20
        },
        horizontalAlign: 'center',
        markers: {
          //@ts-ignore
          width: 5,
          height: 5,
        }
      },
      labels: ['Completed', 'In Progress', 'Yet to Start', 'Pending', 'Canceled'],
      dataLabels: {
        style: {
          fontSize: '10px',
          colors:['white'],
          fontWeight: 400
        }
      }
    }
  }
}
