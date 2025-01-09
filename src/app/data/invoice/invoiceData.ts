export const InvoiceStatus = {
  paid: 'paid',
  rejected: 'rejected',
  unpaid: 'unpaid'
}

// export const invoiceData = [
//   {
//     id: 9,
//     title: "Retirement Fund",
//     invoice: "#105994",
//     amount: 175.54,
//     dueDate: "05/22/2029",
//     status: InvoiceStatus.paid,
//     time: "07:55 AM",
//     rate: 75,
//   },
//   {
//     id: 10,
//     title: "Emergency Savings",
//     invoice: "#105995",
//     amount: 455.54,
//     dueDate: "11/08/2028",
//     status: InvoiceStatus.paid,
//     time: "09:40 PM",
//     rate: 85,
//   },
//   {
//     id: 11,
//     title: "Travel Fund",
//     invoice: "#105996",
//     amount: 275.54,
//     dueDate: "01/30/2029",
//     status: InvoiceStatus.rejected,
//     time: "06:10 AM",
//     rate: 70,
//   },
//   {
//     id: 12,
//     title: "Healthcare Savings",
//     invoice: "#105997",
//     amount: 4575.54,
//     dueDate: "04/12/2029",
//     status: InvoiceStatus.unpaid,
//     time: "02:25 PM",
//     rate: 90,
//   },
//   {
//     id: 13,
//     title: "Real Estate Investment",
//     invoice: "#105998",
//     amount: 555.54,
//     dueDate: "10/05/2028",
//     status: InvoiceStatus.paid,
//     time: "08:50 AM",
//     rate: 100,
//   },
//   {
//     id: 14,
//     title: "Charity Fund",
//     invoice: "#105999",
//     amount: 411.54,
//     dueDate: "07/28/2029",
//     status: InvoiceStatus.rejected,
//     time: "01:05 PM",
//     rate: 80,
//   },
//   {
//     id: 15,
//     title: "Personal Development",
//     invoice: "#106000",
//     amount: 225.54,
//     dueDate: "03/15/2029",
//     status: InvoiceStatus.unpaid,
//     time: "11:35 AM",
//     rate: 95,
//   },
//   {
//     id: 16,
//     title: "Rainy Day Fund",
//     invoice: "#106001",
//     amount: 525.54,
//     dueDate: "09/18/2028",
//     status: InvoiceStatus.paid,
//     time: "04:20 AM",
//     rate: 100,
//   },
//   {
//     id: 17,
//     title: "Future Investment",
//     invoice: "#106002",
//     amount: 755.54,
//     dueDate: "06/05/2029",
//     status: InvoiceStatus.rejected,
//     time: "03:15 PM",
//     rate: 85,
//   },
//   {
//     id: 18,
//     title: "Vacation Savings",
//     invoice: "#106003",
//     amount: 785.54,
//     dueDate: "02/25/2029",
//     status: InvoiceStatus.unpaid,
//     time: "10:45 AM",
//     rate: 90,
//   },
//   {
//     id: 19,
//     title: "Property Purchase",
//     invoice: "#106004",
//     amount: 695.54,
//     dueDate: "08/08/2029",
//     status: InvoiceStatus.paid,
//     time: "07:30 PM",
//     rate: 100,
//   },
//   {
//     id: 20,
//     title: "Hobby Fund",
//     invoice: "#106005",
//     amount: 4021.54,
//     dueDate: "04/02/2029",
//     status: InvoiceStatus.rejected,
//     time: "06:40 AM",
//     rate: 75,
//   },
//   {
//     id: 21,
//     title: "Family Vacation Fund",
//     invoice: "#106006",
//     amount: 475.54,
//     dueDate: "12/10/2028",
//     status: InvoiceStatus.paid,
//     time: "09:20 AM",
//     rate: 80,
//   },
//   {
//     id: 22,
//     title: "Children's Education Savings",
//     invoice: "#106007",
//     amount: 485.54,
//     dueDate: "05/05/2029",
//     status: InvoiceStatus.rejected,
//     time: "02:50 PM",
//     rate: 90,
//   },
//   {
//     id: 23,
//     title: "Technology Upgrade Fund",
//     invoice: "#106008",
//     amount: 250.54,
//     dueDate: "01/20/2029",
//     status: InvoiceStatus.unpaid,
//     time: "10:15 AM",
//     rate: 100,
//   },
//   {
//     id: 24,
//     title: "Art and Culture Sponsorship",
//     invoice: "#106009",
//     amount: 5012.54,
//     dueDate: "07/03/2029",
//     status: InvoiceStatus.paid,
//     time: "08:30 PM",
//     rate: 85,
//   },
//   {
//     id: 25,
//     title: "Green Energy Investment",
//     invoice: "#106010",
//     amount: 4715.54,
//     dueDate: "03/28/2029",
//     status: InvoiceStatus.rejected,
//     time: "11:10 AM",
//     rate: 95,
//   },
//   {
//     id: 26,
//     title: "Fitness and Wellness Fund",
//     invoice: "#106011",
//     amount: 4755.54,
//     dueDate: "09/15/2028",
//     status: InvoiceStatus.unpaid,
//     time: "04:40 PM",
//     rate: 100,
//   },
//   {
//     id: 27,
//     title: "Social Responsibility Donation",
//     invoice: "#106012",
//     amount: 4765.54,
//     dueDate: "06/08/2029",
//     status: InvoiceStatus.paid,
//     time: "01:00 PM",
//     rate: 75,
//   },
//   {
//     id: 28,
//     title: "Personal Project Funding",
//     invoice: "#106013",
//     amount: 4725.54,
//     dueDate: "02/22/2029",
//     status: InvoiceStatus.rejected,
//     time: "09:45 AM",
//     rate: 85,
//   },
//   {
//     id: 29,
//     title: "Home Renovation Budget",
//     invoice: "#106014",
//     amount: 4785.54,
//     dueDate: "10/12/2029",
//     status: InvoiceStatus.unpaid,
//     time: "03:35 PM",
//     rate: 90,
//   },
//   {
//     id: 30,
//     title: "Philanthropy Fund",
//     invoice: "#106015",
//     amount: 495.54,
//     dueDate: "07/05/2029",
//     status: InvoiceStatus.paid,
//     time: "02:25 AM",
//     rate: 100,
//   },
//   {
//     id: 31,
//     title: "Career Development Investment",
//     invoice: "#106016",
//     amount: 4035.54,
//     dueDate: "04/18/2029",
//     status: InvoiceStatus.rejected,
//     time: "07:15 AM",
//     rate: 90,
//   },
//   {
//     id: 32,
//     title: "Community Garden Project",
//     invoice: "#106017",
//     amount: 425.54,
//     dueDate: "11/30/2028",
//     status: InvoiceStatus.unpaid,
//     time: "05:55 PM",
//     rate: 80,
//   },
//   {
//     id: 33,
//     title: "Music Education Support",
//     invoice: "#106018",
//     amount: 461.54,
//     dueDate: "01/25/2029",
//     status: InvoiceStatus.paid,
//     time: "11:30 AM",
//     rate: 100,
//   },
//   {
//     id: 34,
//     title: "Green Technology Research Fund",
//     invoice: "#106019",
//     amount: 435.54,
//     dueDate: "08/10/2029",
//     status: InvoiceStatus.rejected,
//     time: "06:20 AM",
//     rate: 85,
//   },
//   {
//     id: 35,
//     title: "Animal Welfare Donation",
//     invoice: "#106020",
//     amount: 355.54,
//     dueDate: "03/05/2029",
//     status: InvoiceStatus.unpaid,
//     time: "02:10 PM",
//     rate: 95,
//   },
// ];
