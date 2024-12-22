import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core'
import { DropdownComponent } from '@component/shared/dropdown/dropdown.component'
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component'
import { ChartOptions } from '../style-01/style-01.component'
import { NgApexchartsModule } from 'ng-apexcharts'
import { TableService } from '@service/table.service'
import { transactionsData } from '@data/dashboards/style2Transactions'
import { OptionsVerticalComponent } from '@component/shared/options-vertical/options-vertical.component'
import { ChangeDetectorRef } from '@angular/core'

interface Transaction {
  id: number
  title: string
  icon: string
  time: string
  medium: string
  invoice: string
  status: string
  amount: number
  isChecked: boolean
}

@Component({
  selector: 'app-style-02',
  standalone: true,
  imports: [TopBannerComponent, DropdownComponent, CommonModule, NgApexchartsModule, OptionsVerticalComponent],
  templateUrl: './style-02.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Style02Component implements OnInit {
  incomeChartOptions!: ChartOptions
  statchartOptions!:ChartOptions
  statisticsData = [
    {
      title: 'Total Income',
      amount: '$8500',
      growth: '50.8%'
    },
    {
      title: 'Total Spending',
      amount: '$2745',
      growth: '50.8%'
    },
    {
      title: 'Total Transactions',
      amount: '$5223',
      growth: '50.8%'
    }
  ]
  cards: string[] = ['Visa', 'Mastercard', 'Paypal']
  currencies: string[] = ['$', '€', '£', '¥']
  tableService
  activeIndex=1

  private _searchVal = ''
  get searchVal(): string {
    return this._searchVal
  }
  set searchVal(value: string) {
    this._searchVal = value
    this.tableService.search(value)
    this.cdRef.detectChanges()
  }

  constructor(private cdRef: ChangeDetectorRef) {
    this.tableService = new TableService()
    this.tableService.initialize(transactionsData)
  }

  getLocale(number: number) {
    return number.toLocaleString()
  }


  areAllItemsChecked(): boolean {
    return this.tableService.tableData.length > 1 && this.tableService.tableData.every((item) => item.isChecked)
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement // Cast event target to input element
    this.searchVal = inputElement.value // Access input value
    this.tableService.search(this.searchVal)
    this.cdRef.detectChanges()
  }

  ngOnInit() {
    this.incomeChartOptions = {
      series: [
        {
          name: 'Total Sales',
          type: 'line',
          data: [20, 38, 38, 73, 55, 63, 44, 75, 53, 80, 40, 80]
        },
        {
          name: 'Total Expense',
          type: 'line',
          data: [85, 66, 76, 38, 86, 35, 62, 40, 40, 64, 50, 87]
        }
      ],
      chart: {
        height: 300,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      legend: {
        show: false
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
          offsetX: -17
        }
      },
      fill: {
        opacity: 1
      },
      grid: {
        padding: {
          left: -10,
          bottom: -10
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
          breakpoint: 768,
          options: {
            chart: {
              height: 300
            }
          }
        },
        {
          breakpoint: 570,
          options: {
            chart: {
              height: 240
            }
          }
        }
      ]
    }
    this.statchartOptions = {
      chart: {
        height: 60,
        width:'100%',
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
        width: 2,
        curve: 'smooth'
      },
      series: [
        {
          name: 'Series 1',
          data: [24, 26, 32, 36, 37, 44, 50, 49, 44, 40, 32, 28, 32, 34, 28, 23, 22, 28, 34, 35]
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
  userById(transaction: Transaction):number {
    return transaction.id
  }
  nextSlide() {
    this.activeIndex == 3 ? (this.activeIndex = 1) : this.activeIndex++
  }
  prevSlide() {
    this.activeIndex == 1 ? (this.activeIndex = 3) : this.activeIndex--
  }
}
