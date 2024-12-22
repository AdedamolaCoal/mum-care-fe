import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { OptionsHorizComponent } from '@component/shared/options-horiz/options-horiz.component'
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component'
import { providersTabData } from '@data/payment/providers'

@Component({
  selector: 'app-payment-providers',
  standalone: true,
  imports: [TopBannerComponent, OptionsHorizComponent, CommonModule],
  templateUrl: './payment-providers.component.html'
})
export class PaymentProvidersComponent {
  providers = providersTabData
  activeTab = this.providers[0].title
  chatShow=false
  setActiveTab(title:string){
    this.activeTab=title
  }

}
