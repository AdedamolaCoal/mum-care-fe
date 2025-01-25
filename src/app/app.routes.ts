import { Routes } from "@angular/router";
import { DefaultLayoutComponent } from "./components/layouts/default-layout/default-layout.component";
import { MainDashboardComponent } from "./pages/dashboards/main-dashboard/main-dashboard.component";
import { AntenatalRecordsOverviewComponent } from "./pages/antenatal-records-management/arm-overview/arm-overview.component";
import { AddArmComponent } from "./pages/antenatal-records-management/add-arm/add-arm.component";
import { AddSupplementComponent } from "./pages/supplement-tracking/add-supplement/add-supplement.component";
import { SupplementOverviewComponent } from "./pages/supplement-tracking/supplement-overview/supplement-overview.component";
// import { ChatComponent } from "./pages/supplement-tracking/chat/chat.component";
import { AddChildComponent } from "./pages/child-management/add-child/add-child.component";
import { ChildrenDataComponent } from "./pages/child-management/children-data/children-data.component";
import { ProfileComponent } from "./pages/settings/profile/profile.component";
import { SecurityComponent } from "./pages/settings/security/security.component";
import { SocialNetworkComponent } from "./pages/settings/social-network/social-network.component";
import { NotificationComponent } from "./pages/settings/notification/notification.component";
// import { PaymentLimitsComponent } from "./pages/settings/payment-limits/payment-limits.component";
import { HelpCenterComponent } from "./pages/support/help-center/help-center.component";
import { PrivacyPolicyComponent } from "./pages/support/privacy-policy/privacy-policy.component";
import { ContactUsComponent } from "./pages/support/contact-us/contact-us.component";
import { SignUpComponent } from "./pages/auth/sign-up/sign-up.component";
import { SignInComponent } from "./pages/auth/sign-in/sign-in.component";
// import { SignInQrcodeComponent } from "./pages/auth/sign-in-qrcode/sign-in-qrcode.component";
import { AuthLayoutComponent } from "./components/layouts/auth-layout/auth-layout.component";
import { ErrorComponent } from "./pages/auth/error/error.component";
import { LandingComponent } from "@pages/landing/landing.component";
import { AuthGuard } from "./guards/auth.guard";
import { MothersDataComponent } from "@pages/mother-management/mothers-data/mothers-data.component";
import { AddMotherComponent } from "@pages/mother-management/add-mother/add-mother.component";
import { AddImmunizationComponent } from "@pages/immunization-management/add-immunization/add-immunization.component";
import { ImmunizationOverviewComponent } from "@pages/immunization-management/immunization-overview/immunization-overview.component";

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
        path: "mothers",
        children: [
          { path: "mothers-data", component: MothersDataComponent },
          {
            path: "add-mother",
            component: AddMotherComponent,
          },
          {
            path: "edit-mother/:id",
            component: AddMotherComponent,
          },
          {
            path: "view-mother/:id",
            component: AddMotherComponent,
          },
        ],
      },
      {
        path: "child",
        children: [
          { path: "add-child", component: AddChildComponent },
          { path: "edit-child/:id", component: AddChildComponent },
          { path: "view-child/:id", component: AddChildComponent },
          { path: "children-data", component: ChildrenDataComponent },
        ],
      },
      {
        path: "arm",
        children: [
          { path: "add-arm", component: AddArmComponent },
          { path: "edit-arm/:id", component: AddArmComponent },
          { path: "view-arm/:id", component: AddArmComponent },
          {
            path: "antenatal-records",
            component: AntenatalRecordsOverviewComponent,
          },
        ],
      },
      {
        path: "immunization",
        children: [
          { path: "add-immunization", component: AddImmunizationComponent },
          {
            path: "edit-immunization/:id",
            component: AddImmunizationComponent,
          },
          {
            path: "view-immunization/:id",
            component: AddImmunizationComponent,
          },
          {
            path: "immunization-overview",
            component: ImmunizationOverviewComponent,
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
          {
            path: "edit-supplement/:id",
            component: AddSupplementComponent,
          },
          {
            path: "view-supplement/:id",
            component: AddSupplementComponent,
          },
        ],
      },
      {
        path: "settings",
        children: [
          { path: "profile", component: ProfileComponent },
          { path: "security", component: SecurityComponent },
          { path: "social-network", component: SocialNetworkComponent },
          { path: "notification", component: NotificationComponent },
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
