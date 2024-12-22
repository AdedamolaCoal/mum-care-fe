
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OptionsHorizComponent } from '@component/shared/options-horiz/options-horiz.component';
import { TopBannerComponent } from '@component/shared/top-banner/top-banner.component';
import { friends } from '@data/transactions/friends';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, TopBannerComponent, OptionsHorizComponent],
  templateUrl: './chat.component.html'
})
export class ChatComponent {
  chatOpen=false
  friends=friends
  activeChat=1
  setActiveChat(id:number){
    this.activeChat=id
  }
}
