import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './switch.component.html'
})
export class SwitchComponent {
  @Input() isChecked?:boolean = false
  @Input() label:string = ''
}
