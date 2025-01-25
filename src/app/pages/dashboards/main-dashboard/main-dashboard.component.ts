import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { OptionsHorizComponent } from "@component/shared/options-horiz/options-horiz.component";
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
  ngOnInit() {}
}
