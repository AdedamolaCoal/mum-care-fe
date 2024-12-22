import { TransactionStatus } from '@data/dashboards/style2Transactions'

export const paymentAccountData = [
  {
    id: 3,
    account: '874 *** *** 870',
    icon: 'assets/images/jp-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'Japanese Yen',
      short: 'JPN'
    },
    bank: {
      name: 'Shinsei Bank',
      country: 'Japanese'
    },
    status: TransactionStatus.Pending,
    balance: 2141212
  },

  {
    id: 7,
    account: '874 *** *** 475',
    icon: 'assets/images/uk-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'US Dollar',
      short: 'USD'
    },
    bank: {
      country: 'US',
      name: 'Bank of America'
    },
    status: TransactionStatus.Cancelled,
    balance: 782332
  },
  {
    id: 1,
    account: '999 *** *** 123',
    icon: 'assets/images/usa-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'US Dollar',
      short: 'USD'
    },
    bank: {
      name: 'Bank of America',
      country: 'US'
    },
    status: TransactionStatus.Successful,
    balance: 1121212
  },
  {
    id: 2,
    account: '999 *** *** 127',
    icon: 'assets/images/euro-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'Euro',
      short: 'EUR'
    },
    bank: {
      name: 'Unicredit',
      country: 'Italy'
    },
    status: TransactionStatus.Cancelled,
    balance: 8921212
  },
  {
    id: 8,
    account: '874 *** *** 445',
    icon: 'assets/images/usa-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'Euro',
      short: 'EUR'
    },
    bank: {
      country: 'Italy',
      name: 'UniCredit'
    },
    status: TransactionStatus.Successful,
    balance: 8521212
  },
  {
    id: 9,
    account: '874 *** *** 125',
    icon: 'assets/images/usa-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'Euro',
      short: 'EUR'
    },
    bank: {
      country: 'Italy',
      name: 'UniCredit'
    },
    status: TransactionStatus.Successful,
    balance: 8521212
  },
  {
    id: 4,
    account: '874 *** *** 975',
    icon: 'assets/images/uk-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'British Pound',
      short: 'GBP'
    },
    bank: {
      name: 'Barclys Bank',
      country: 'UK'
    },
    status: TransactionStatus.Successful,
    balance: 2521212
  },
  {
    id: 5,
    account: '874 *** *** 815',
    icon: 'assets/images/cn-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'Chinese Yuan',
      short: 'CNY'
    },
    bank: {
      country: 'China',
      name: 'Bank Of China'
    },
    status: TransactionStatus.Pending,
    balance: 554100
  },
  {
    id: 6,
    account: '874 *** *** 885',
    icon: 'assets/images/rs-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'Russian Ruble',
      short: 'RUB'
    },
    bank: {
      country: 'Russia',
      name: 'VTB Bank'
    },
    status: TransactionStatus.Successful,
    balance: 1420012
  },
  {
    id: 10,
    account: '874 *** *** 125',
    icon: 'assets/images/usa-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'Euro',
      short: 'EUR'
    },
    bank: {
      country: 'Italy',
      name: 'UniCredit'
    },
    status: TransactionStatus.Successful,
    balance: 8521212
  },
  {
    id: 11,
    account: '999 *** *** 123',
    icon: 'assets/images/usa-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'US Dollar',
      short: 'USD'
    },
    bank: {
      name: 'Bank of America',
      country: 'US'
    },
    status: TransactionStatus.Successful,
    balance: 1121212
  },
  {
    id: 12,
    account: '999 *** *** 127',
    icon: 'assets/images/euro-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'Euro',
      short: 'EUR'
    },
    bank: {
      name: 'Unicredit',
      country: 'Italy'
    },
    status: TransactionStatus.Cancelled,
    balance: 8921212
  },
  {
    id: 13,
    account: '874 *** *** 870',
    icon: 'assets/images/jp-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'Japanese Yen',
      short: 'JPN'
    },
    bank: {
      name: 'Shinsei Bank',
      country: 'Japanese'
    },
    status: TransactionStatus.Pending,
    balance: 2141212
  },
  {
    id: 14,
    account: '874 *** *** 975',
    icon: 'assets/images/uk-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'British Pound',
      short: 'GBP'
    },
    bank: {
      name: 'Barclys Bank',
      country: 'UK'
    },
    status: TransactionStatus.Successful,
    balance: 2521212
  },
  {
    id: 15,
    account: '874 *** *** 815',
    icon: 'assets/images/cn-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'Chinese Yuan',
      short: 'CNY'
    },
    bank: {
      country: 'China',
      name: 'Bank Of China'
    },
    status: TransactionStatus.Pending,
    balance: 554100
  },
  {
    id: 16,
    account: '874 *** *** 885',
    icon: 'assets/images/rs-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'Russian Ruble',
      short: 'RUB'
    },
    bank: {
      country: 'Russia',
      name: 'VTB Bank'
    },
    status: TransactionStatus.Successful,
    balance: 1420012
  },
  {
    id: 17,
    account: '874 *** *** 475',
    icon: 'assets/images/uk-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'US Dollar',
      short: 'USD'
    },
    bank: {
      country: 'US',
      name: 'Bank of America'
    },
    status: TransactionStatus.Cancelled,
    balance: 782332
  },
  {
    id: 18,
    account: '874 *** *** 445',
    icon: 'assets/images/usa-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'Euro',
      short: 'EUR'
    },
    bank: {
      country: 'Italy',
      name: 'UniCredit'
    },
    status: TransactionStatus.Successful,
    balance: 8521212
  },
  {
    id: 19,
    account: '874 *** *** 125',
    icon: 'assets/images/usa-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'Euro',
      short: 'EUR'
    },
    bank: {
      country: 'Italy',
      name: 'UniCredit'
    },
    status: TransactionStatus.Successful,
    balance: 8521212
  },
  {
    id: 20,
    account: '874 *** *** 125',
    icon: 'assets/images/usa-sm.png',
    expire: '11/05/2028',
    currency: {
      long: 'Euro',
      short: 'EUR'
    },
    bank: {
      country: 'Italy',
      name: 'UniCredit'
    },
    status: TransactionStatus.Successful,
    balance: 8521212
  }
]
