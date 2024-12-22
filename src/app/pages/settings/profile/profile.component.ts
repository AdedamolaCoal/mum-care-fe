import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { DropdownComponent } from '@component/shared/dropdown/dropdown.component'
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, TopBannerComponent, DropdownComponent],
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  countries = ['USA', 'UK', 'Canada']
  privacy = ['Anyone', 'Friends', 'Friends of Friends']
}
