interface SubmenuItem {
  title: string;
  url: string;
}

interface SidebarItem {
  id: number;
  name: string;
  icon: string;
  submenus: SubmenuItem[];
}
export const sidebarData: SidebarItem[] = [
  {
    id: 1,
    name: "Dashboard",
    icon: "las la-home",
    submenus: [
      // { title: 'Style 01', url: '/dashboards/style-01' },
      // { title: 'Style 02', url: '/dashboards/style-02' },
      { title: "Hospital Dashboard", url: "/dashboard" },
      // { title: 'Style 04', url: '/dashboards/style-04' },
      // { title: 'Style 05', url: '/dashboards/style-05' }
    ],
  },
  {
    id: 2,
    name: "Mother Management",
    icon: "las la-female",
    submenus: [
      { title: "Add Mother", url: "/mothers/add-mother" },
      { title: "Mothers Datas", url: "/mothers/mothers-data" },
    ],
  },
  {
    id: 3,
    name: "Child Management",
    icon: "las la-baby",
    submenus: [
      { title: "Add Child", url: "/child/add-child" },
      { title: "Children Data", url: "/child/children-data" },
    ],
  },
  {
    id: 4,
    name: "Antenatal Record Management",
    icon: "las la-notes-medical",
    submenus: [
      { title: "Add A-R-M", url: "/arm/add-arm" },
      { title: "Antenatal Records", url: "/arm/antenatal-records" },
    ],
  },
  {
    id: 5,
    name: "Immunization Management",
    icon: "las la-clinic-medical",
    submenus: [
      { title: "Add Immunization", url: "/immunization/add-immunization" },
      {
        title: "Immunization Overview",
        url: "/immunization/immunization-overview",
      },
    ],
  },
  {
    id: 6,
    name: "Supplements Tracking",
    icon: "las la-hourglass-half",
    submenus: [
      { title: "Add Supplement", url: "/supplement/add-supplement" },
      { title: "Supplement Overview", url: "/supplement/supplement-overview" },
    ],
  },
  {
    id: 7,
    name: "Settings and Support",
    icon: "las la-cog",
    submenus: [
      { title: "Security", url: "/settings/security" },
      { title: "Social Network", url: "/settings/social-network" },
      { title: "Notification", url: "/settings/notification" },
      { title: "Contact Us", url: "/support/contact-us" },
    ],
  },
  // {
  //   id: 2,
  //   name: 'Finance',
  //   icon: 'las la-piggy-bank',
  //   submenus: [
  //     { title: 'Bank Account', url: '/accounts/bank-account' },
  //     { title: 'Account Overview', url: '/accounts/account-overview' },
  //     { title: 'Account Details', url: '/accounts/account-details' },
  //     { title: 'Deposit Details', url: '/accounts/deposit-details' }
  //   ]
  // },
  // {
  // 	id: 5,
  // 	name: "Cards",
  // 	icon: "las la-credit-card",
  // 	submenus: [
  // 		{ title: "Card Overview", url: "/cards/card-overview" },
  // 		{ title: "Card Details", url: "/cards/card-details" },
  // 	],
  // },
  // {
  //   id: 4,
  //   name: 'Transaction',
  //   icon: 'las la-exchange-alt',
  //   submenus: [
  //     { title: 'Style 01', url: '/transaction/style-01' },
  //     { title: 'Style 02', url: '/transaction/style-02' },
  //     { title: 'Style 03', url: '/transaction/style-03' }
  //   ]
  // },
  // {
  //   id: 7,
  //   name: 'Trading',
  //   icon: 'las la-chart-bar',
  //   submenus: [
  //     { title: 'Style 01', url: '/trading/style-01' },
  //     { title: 'Style 02', url: '/trading/style-02' },
  //     { title: 'Style 03', url: '/trading/style-03' }
  //   ]
  // },
  // {
  //   id: 8,
  //   name: 'Reports',
  //   icon: 'las la-chart-pie',
  //   submenus: [
  //     { title: 'Style 01', url: '/reports/style-01' },
  //     { title: 'Style 02', url: '/reports/style-02' }
  //   ]
  // },
  // {
  //   id: 10,
  //   name: 'Authentication',
  //   icon: 'las la-user-circle',
  //   submenus: [
  //     { title: 'Sign Up', url: '/auth/sign-up' },
  //     { title: 'Sign In', url: '/auth/sign-in' },
  //     { title: 'Sign In QR Code', url: '/auth/signin-qrcode' }
  //   ]
  // },
  // {
  // 	id: 11,
  // 	name: "Support",
  // 	icon: "las la-handshake",
  // 	submenus: [
  // 		// { title: "Help Center", url: "/support/help-center" },
  // 		// { title: "Privacy Policy", url: "/support/privacy-policy" },
  // 		{ title: "Contact Us", url: "/support/contact-us" },
  // 	],
  // },
];
