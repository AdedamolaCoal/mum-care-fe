import { Routes } from "@angular/router";
import { DefaultLayoutComponent } from "./components/layouts/default-layout/default-layout.component";
// import { Style01Component } from "./pages/dashboards/style-01/style-01.component";
// import { Style02Component } from "./pages/dashboards/style-02/style-02.component";
import { MainDashboardComponent } from "./pages/dashboards/main-dashboard/main-dashboard.component";
// import { Style04Component } from "./pages/dashboards/style-04/style-04.component";
// import { Style05Component } from "./pages/dashboards/style-05/style-05.component";
// import { BankAccountComponent } from "./pages/accounts/bank-account/bank-account.component";
// import { AccountOverviewComponent } from "./pages/accounts/account-overview/account-overview.component";
// import { AccountDetailsComponent } from "./pages/accounts/account-details/account-details.component";
// import { DepositDetailsComponent } from "./pages/accounts/deposit-details/deposit-details.component";
// import { CardOverviewComponent } from "./pages/cards/card-overview/card-overview.component";
// import { CardDetailsComponent } from "./pages/cards/card-details/card-details.component";
// import { TransactionStyle01Component } from "./pages/transaction/style-01/style-01.component";
// import { TransactionStyle02Component } from "./pages/transaction/style-02/style-02.component";
// import { TransactionStyle03Component } from "./pages/transaction/style-03/style-03.component";
import { AntenatalRecordsOverviewComponent } from "./pages/antenatal-records-management/arm-overview/arm-overview.component";
import { PaymentProvidersComponent } from "./pages/antenatal-records-management/payment-providers/payment-providers.component";
import { AddArmComponent } from "./pages/antenatal-records-management/add-arm/add-arm.component";
import { AddSupplementComponent } from "./pages/supplement-tracking/add-supplement/add-supplement.component";
import { SupplementOverviewComponent } from "./pages/supplement-tracking/supplement-overview/supplement-overview.component";
import { MakeTransferComponent } from "./pages/supplement-tracking/make-transfer/make-transfer.component";
import { ChatComponent } from "./pages/supplement-tracking/chat/chat.component";
import { AddChildComponent } from "./pages/child-management/add-child/add-child.component";
import { ChildrenDataComponent } from "./pages/child-management/children-data/children-data.component";
// import { InvoicingStyle02Component } from "./pages/child-management/style-02/style-02.component";
// import { TradingStyle01Component } from "./pages/trading/style-01/style-01.component";
// import { ReportsStyle01Component } from "./pages/reports/style-01/style-01.component";
// import { ReportsStyle02Component } from "./pages/reports/style-02/style-02.component";
import { ProfileComponent } from "./pages/settings/profile/profile.component";
import { SecurityComponent } from "./pages/settings/security/security.component";
import { SocialNetworkComponent } from "./pages/settings/social-network/social-network.component";
import { NotificationComponent } from "./pages/settings/notification/notification.component";
import { PaymentLimitsComponent } from "./pages/settings/payment-limits/payment-limits.component";
import { HelpCenterComponent } from "./pages/support/help-center/help-center.component";
import { PrivacyPolicyComponent } from "./pages/support/privacy-policy/privacy-policy.component";
import { ContactUsComponent } from "./pages/support/contact-us/contact-us.component";
import { SignUpComponent } from "./pages/auth/sign-up/sign-up.component";
import { SignInComponent } from "./pages/auth/sign-in/sign-in.component";
import { SignInQrcodeComponent } from "./pages/auth/sign-in-qrcode/sign-in-qrcode.component";
import { AuthLayoutComponent } from "./components/layouts/auth-layout/auth-layout.component";
import { ErrorComponent } from "./pages/auth/error/error.component";
// import { TradingStyle02Component } from "@pages/trading/style-02/style-02.component";
// import { TradingStyle03Component } from "@pages/trading/style-03/style-03.component";
// import { EmptyLayoutComponent } from "@component/layouts/empty-layout/empty-layout.component";
import { LandingComponent } from "@pages/landing/landing.component";
import { AuthGuard } from "./guards/auth.guard";
import { MothersDataComponent } from "@pages/dashboards/mothers-data/mothers-data.component";

export const routes: Routes = [
	{
		path: "",
		pathMatch: "full",
		redirectTo: "landing",
	},
	{
		path: "landing",
		component: LandingComponent,
	},
	{
		path: "auth",
		component: AuthLayoutComponent,
		children: [
			{ path: "sign-up", component: SignUpComponent },
			{ path: "sign-in", component: SignInComponent },
		],
	},
	{
		path: "",
		component: DefaultLayoutComponent,
		canActivate: [AuthGuard], // Updated to use the functional guard
		children: [
			{
				path: "dashboard",
				children: [{ path: "", component: MainDashboardComponent }],
			},
			{
				path: "mother",
				children: [ { path: '', component: MothersDataComponent}]
			},
			{
				path: "child",
				children: [
					{ path: "add-child", component: AddChildComponent },
					{ path: "children-data", component: ChildrenDataComponent },
				],
			},
			// {
			// 	path: "cards",
			// 	children: [
			// 		{ path: "card-overview", component: CardOverviewComponent },
			// 		{ path: "card-details", component: CardDetailsComponent },
			// 	],
			// },
			{
				path: "arm",
				children: [
					{ path: "add-arm", component: AddArmComponent },
					{
						path: "antenatal-records",
						component: AntenatalRecordsOverviewComponent,
					},
				],
			},
			{
				path: "supplement",
				children: [
					{ path: "add-supplement", component: AddSupplementComponent },
					{
						path: "supplement-overview",
						component: SupplementOverviewComponent,
					},
					// { path: "make-transfer", component: MakeTransferComponent },
					// { path: "chat", component: ChatComponent },
				],
			},
			{
				path: "settings",
				children: [
					{ path: "profile", component: ProfileComponent },
					{ path: "security", component: SecurityComponent },
					{ path: "social-network", component: SocialNetworkComponent },
					{ path: "notification", component: NotificationComponent },
					// { path: "payment-limits", component: PaymentLimitsComponent },
				],
			},
			{
				path: "support",
				children: [
					{ path: "help-center", component: HelpCenterComponent },
					{ path: "privacy-policy", component: PrivacyPolicyComponent },
					{ path: "contact-us", component: ContactUsComponent },
				],
			},
		],
	},
	{
		path: "not-found",
		component: ErrorComponent,
	},
	{
		path: "**",
		redirectTo: "not-found",
	},
];

// export const routes: Routes = [
// 	{
// 		path: "",
// 		pathMatch: "full",
// 		// redirectTo: "auth/sign-in",
// 		redirectTo: "landing",
// 	},
// 	{
// 		path: "",
// 		component: DefaultLayoutComponent, //LandingComponent, // DefaultLayoutComponent
// 		children: [
// 			{
// 				path: "dashboard",
// 				children: [
// 					// { path: "style-01", component: Style01Component },
// 					// { path: "style-02", component: Style02Component },
// 					{ path: "", component: Style03Component },
// 					// { path: "style-04", component: Style04Component },
// 					// { path: "style-05", component: Style05Component },
// 				],
// 			},
// 			// {
// 			// 	path: "accounts",
// 			// 	children: [
// 			// 		{ path: "bank-account", component: BankAccountComponent },
// 			// 		{ path: "account-overview", component: AccountOverviewComponent },
// 			// 		{ path: "account-details", component: AccountDetailsComponent },
// 			// 		{ path: "deposit-details", component: DepositDetailsComponent },
// 			// 	],
// 			// },
// 			// {
// 			// 	path: "transaction",
// 			// 	children: [
// 			// 		{ path: "style-01", component: TransactionStyle01Component },
// 			// 		{ path: "style-02", component: TransactionStyle02Component },
// 			// 		{ path: "style-03", component: TransactionStyle03Component },
// 			// 	],
// 			// },
// 			// {
// 			// 	path: "trading",
// 			// 	children: [
// 			// 		{ path: "style-01", component: TradingStyle01Component },
// 			// 		{ path: "style-02", component: TradingStyle02Component },
// 			// 		{ path: "style-03", component: TradingStyle03Component },
// 			// 	],
// 			// },
// 			// {
// 			// 	path: "reports",
// 			// 	children: [
// 			// 		{ path: "style-01", component: ReportsStyle01Component },
// 			// 		{ path: "style-02", component: ReportsStyle02Component },
// 			// 	],
// 			// },
// 		],
// 	},
// 	{
// 		path: "auth",
// 		component: AuthLayoutComponent,
// 		children: [
// 			{ path: "sign-up", component: SignUpComponent },
// 			{ path: "reg-company-info", component: CompanyInfoRegistrationComponent },
// 			{ path: "sign-in", component: SignInComponent },
// 			// { path: "signin-qrcode", component: SignInQrcodeComponent },
// 		],
// 	},
// 	{
// 		path: "not-found",
// 		pathMatch: "full",
// 		component: ErrorComponent,
// 	},
// 	{
// 		path: "**",
// 		redirectTo: "not-found",
// 		pathMatch: "full",
// 	},
// ];
