import { Component } from '@angular/core'
import { DropdownComponent } from '../dropdown/dropdown.component'
import { ModalService } from 'ngx-modal-ease'

@Component({
  selector: 'app-add-account-modal',
  standalone: true,
  imports: [DropdownComponent],
  templateUrl: './add-account-modal.component.html'
})
export class AddAccountModalComponent {
  currencies = ['USD', 'GBP', 'YEN', 'JPN']
  statusList=['Active','Inactive']
  constructor(private modalService:ModalService){}
  closeModal(){
    this.modalService.close('AddAccountModalComponent')
  }
}
