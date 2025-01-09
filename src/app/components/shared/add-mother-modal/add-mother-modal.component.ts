import { Component, OnInit } from '@angular/core'
import { DropdownComponent } from '../dropdown/dropdown.component'
import { ModalService } from 'ngx-modal-ease'
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-account-modal',
  standalone: true,
  imports: [DropdownComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './add-mother-modal.component.html'
})
export class AddMotherModalComponent implements OnInit{

  motherForm!: FormGroup;

	bloodGroups: Array<any> = ["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"];
  statusList=['Active','Inactive']

  constructor(private modalService:ModalService, private fb: FormBuilder){}

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.motherForm = this.fb.group({
      hospital_id: ["", Validators.required],
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      age: ["", Validators.required],
      genotype: ["", Validators.required],
      blood_group: ["", Validators.required],
      nationality: ["", Validators.required],
      email: ["", Validators.required],
    })
  }

  onSubmit(){
    this.motherForm.markAllAsTouched();
    if(this.motherForm.valid){
      console.log(this.motherForm.value);
      this.modalService.close('AddAccountModalComponent')
    }
  }
  closeModal(){
    this.modalService.close('AddAccountModalComponent')
  }
}
