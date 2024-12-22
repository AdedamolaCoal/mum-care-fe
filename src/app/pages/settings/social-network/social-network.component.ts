import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { OptionsHorizComponent } from '@component/shared/options-horiz/options-horiz.component'
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component'

@Component({
  selector: 'app-social-network',
  standalone: true,
  imports: [OptionsHorizComponent, TopBannerComponent, CommonModule],
  templateUrl: './social-network.component.html'
})
export class SocialNetworkComponent {
  extensionsList1 = [
    {
      id: 1,
      title: 'Dropbox',
      link: '@example.info',
      icon: 'lab la-dropbox text-3xl'
    },
    {
      id: 2,
      title: 'Google Drive',
      link: '@example.info',
      icon: 'lab la-google-drive text-3xl'
    },
    {
      id: 3,
      title: 'Microsoft Onedrive',
      link: '@example.info',
      icon: 'lab la-microsoft text-3xl'
    }
  ]
  extensionsList2 = [
    {
      id: 1,
      title: 'Facebook',
      link: 'www.example.com',
      icon: 'lab la-facebook-f text-3xl',
      connected: true
    },
    {
      id: 2,
      title: 'Twitter',
      link: 'www.example.com',
      icon: 'lab la-twitter text-3xl',
      connected: false
    },
    {
      id: 3,
      title: 'LinkedIn',
      link: 'www.example.com',
      icon: 'lab la-linkedin-in text-3xl',
      connected: true
    },
    {
      id: 4,
      title: 'Snapchat',
      link: 'www.example.com',
      icon: 'lab la-snapchat text-3xl',
      connected: false
    },
    {
      id: 5,
      title: 'Pinterest',
      link: 'www.example.com',
      icon: 'lab la-pinterest text-3xl',
      connected: false
    }
  ]
}

