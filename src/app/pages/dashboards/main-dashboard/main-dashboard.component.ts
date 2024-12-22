import { CommonModule } from "@angular/common";
import {
	AfterViewInit,
	Component,
	ElementRef,
	OnDestroy,
	ViewChild,
} from "@angular/core";
import { OptionsHorizComponent } from "@component/shared/options-horiz/options-horiz.component";
import { ChartOptions } from "../style-01/style-01.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { DropdownComponent } from "@component/shared/dropdown/dropdown.component";
import { TableService } from "@service/table.service";
import { latestTransactions } from "@data/dashboards/style1latestTransactions";
import { transactionsAccount } from "@data/dashboards/style1transactionaccount";

const statesData = [
	{
		title: "Total Income",
		amount: "$8500 USD",
		percent: 35.7,
		icon: "las text-3xl xl:text-5xl la-chart-bar",
		color: "text-primary",
	},
	{
		title: "Total Spending",
		amount: "$3500 USD",
		percent: 45.2,
		icon: "las text-3xl xl:text-5xl la-coins",
		color: "text-secondary1",
	},
	{
		title: "Spending Goal",
		amount: "$9254 USD",
		percent: 25.7,
		icon: "las text-3xl xl:text-5xl la-chart-pie",
		color: "text-secondary2",
	},
	{
		title: "Total Transactions",
		amount: "$17000 USD",
		percent: 50.7,
		icon: "las text-3xl xl:text-5xl la-chart-line",
		color: "text-secondary3",
	},
];
@Component({
	selector: "app-style-03",
	standalone: true,
	imports: [
		OptionsHorizComponent,
		CommonModule,
		NgApexchartsModule,
		DropdownComponent,
	],
	templateUrl: "./main-dashboard.component.html",
})
export class MainDashboardComponent {
	stats = statesData;
	tableService1;
	tableService2;
	transactionsOverviewChart!: ChartOptions;
	incomeExpenseChart!: ChartOptions;

	constructor() {
		this.tableService1 = new TableService();
		this.tableService2 = new TableService();
		this.tableService1.initialize(latestTransactions);
		this.tableService2.initialize(transactionsAccount);
	}
	getLocale(number: number) {
		return number.toLocaleString();
	}
	markers = [
		{
			name: "Egypt",
			coords: [26.8, 30.8],
			style: {
				fill: "#20B757",
				stroke: "rgba(255, 255, 255, 0.50)",
			},
		},
		{
			name: "Canada",
			coords: [56.1304, -106.3468],
			style: {
				fill: "#20B757",
				stroke: "rgba(255, 255, 255, 0.50)",
			},
		},
		{
			name: "Brazil",
			coords: [-14.235, -51.9253],
			style: {
				fill: "#20B757",
				stroke: "rgba(255, 255, 255, 0.50)",
			},
		},
		{
			name: "China",
			coords: [35.8617, 104.1954],
			style: {
				fill: "#20B757",
				stroke: "rgba(255, 255, 255, 0.50)",
			},
		},
		{
			name: "United States",
			coords: [37.0902, -95.7129],
			style: {
				fill: "#20B757",
				stroke: "rgba(255, 255, 255, 0.50)",
			},
		},
		{
			name: "Russia",
			coords: [61, 105],
			style: {
				fill: "#20B757",
				stroke: "rgba(255, 255, 255, 0.50)",
			},
		},
		{
			name: "Greenland",
			coords: [71.706936, -42.604303],
			style: {
				fill: "#20B757",
				stroke: "rgba(255, 255, 255, 0.50)",
			},
		},
		{
			name: "Norway",
			coords: [60.472024, 8.468946],
			style: {
				fill: "#20B757",
				stroke: "rgba(255, 255, 255, 0.50)",
			},
		},
		{
			name: "Ukraine",
			coords: [48.379433, 31.16558],
			style: {
				fill: "#20B757",
				stroke: "rgba(255, 255, 255, 0.50)",
			},
		},
	];
	lines = [
		{ from: "Egypt", to: "Canada" },
		{ from: "Egypt", to: "Russia" },
		{ from: "Egypt", to: "China" },
		{ from: "Egypt", to: "United States" },
		{ from: "Egypt", to: "Greenland" },
		{ from: "Egypt", to: "Norway" },
		{ from: "Egypt", to: "Ukraine" },
		{ from: "Egypt", to: "Brazil" },
	];
	ngOnInit() {
		this.transactionsOverviewChart = {
			series: [
				{
					name: "Website Blog",
					type: "column",
					data: [40, 50, 44, 31, 22, 43, 20, 35, 22, 32, 30, 16],
				},
				{
					name: "chart 2",
					type: "area",
					data: [15, 28, 20, 25, 18, 30, 22, 36, 32, 46, 30, 27],
				},
				{
					name: "Social Media",
					type: "line",
					data: [5, 8, 6, 5, 7, 8, 7, 6, 8, 4, 6, 3],
				},
			],
			chart: {
				width: "100%",
				height: 350,
				type: "line",
				toolbar: {
					show: false,
				},
				animations: {
					enabled: true,
					easing: "easeinout",
					speed: 800,
				},
			},
			plotOptions: {
				bar: {
					columnWidth:
						window.innerWidth < 768
							? "10"
							: window.innerWidth < 1400
							? "13"
							: "20",
					dataLabels: {
						position: "center",
					},
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				width: [0, 3, 3],
				colors: ["#20B757", "#FFC861", "#4371E9"],
				dashArray: [0, 0, 10],
				curve: ["straight", "straight", "smooth"],
			},

			legend: {
				show: false,
			},
			xaxis: {
				categories: [
					"Jan",
					"Feb",
					"Mar",
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nov",
					"Dec",
				],

				axisBorder: {
					show: false,
				},
			},
			colors: ["#20B757", "#FFC861"],
			fill: {
				colors: ["#20B757", "#FFC861", "#4371E9"],
				opacity: [1, 0.1, 1],
			},
			responsive: [
				{
					breakpoint: 1500,
					options: {
						chart: {
							height: 300,
						},
					},
				},
				{
					breakpoint: 992,
					options: {
						chart: {
							height: 350,
						},
					},
				},
				{
					breakpoint: 570,
					options: {
						chart: {
							height: 250,
						},
					},
				},
			],
			grid: {
				padding: {
					left: -20,
				},
			},
		};
		this.incomeExpenseChart = {
			series: [
				{
					name: "This Years",
					data: [490, 300, 390, 200, 490, 200, 390, 320, 530, 190],
				},
				{
					name: "Last Years",
					data: [240, 390, 300, 390, 200, 390, 200, 320, 200, 330],
				},
			],
			chart: {
				type: "area",
				height: 330,
				toolbar: {
					show: false,
				},
				animations: {
					enabled: true,
					easing: "easeinout",
					speed: 800,
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "smooth",
				lineCap: "round",
				width: 3,
				colors: ["#20B757", "#FFC861"],
			},
			xaxis: {
				categories: [
					"Week 01",
					"Week 02",
					"Week 03",
					"Week 04",
					"Week 05",
					"Week 06",
					"Week 07",
					"Week 08",
					"Week 09",
					"Week 010",
				],
				axisBorder: {
					show: false,
				},
			},
			yaxis: {
				min: 160,
				max: 560,

				labels: {
					formatter: function (v) {
						return v + "k";
					},
				},
			},
			legend: {
				show: false,
			},
			colors: ["rgba(32, 183, 87, 0.21)", "rgba(255, 200, 97, 0.21)"],
			responsive: [
				{
					breakpoint: 1820,
					options: {
						chart: {
							height: 330,
						},
					},
				},
				{
					breakpoint: 1600,
					options: {
						chart: {
							height: 308,
						},
					},
				},
				{
					breakpoint: 992,
					options: {
						chart: {
							height: 300,
						},
					},
				},
				{
					breakpoint: 570,
					options: {
						chart: {
							height: 280,
						},
					},
				},
			],
			grid: {
				show: false,
			},
		};
	}
}
