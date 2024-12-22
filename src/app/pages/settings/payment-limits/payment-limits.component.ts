import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OptionsHorizComponent } from '@component/shared/options-horiz/options-horiz.component';
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component';

@Component({
  selector: 'app-payment-limits',
  standalone: true,
  imports: [OptionsHorizComponent,TopBannerComponent, FormsModule],
  templateUrl: './payment-limits.component.html'
})

export class PaymentLimitsComponent {
  value1=35
  value2=35
  value3=35
  value4=35
  value5=35
  value6=35
}
