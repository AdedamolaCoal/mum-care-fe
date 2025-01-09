import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { DropdownComponent } from "../dropdown/dropdown.component";
import { CalendarModule } from "primeng/calendar";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ModalService } from "ngx-modal-ease";
import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent, NgSelectModule } from "@ng-select/ng-select";

@Component({
  selector: "app-open-account-modal",
  standalone: true,
  imports: [
    CommonModule,
    DropdownComponent,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectComponent,
    NgLabelTemplateDirective,
    NgOptionTemplateDirective,
  ],
  templateUrl: "./add-mother.component.html",
})
export class AddMotherComponent implements OnInit {
  date: Date | undefined;
  currencies = ["USD", "GBP", "YEN", "JPN"];
  status = ["active", "inactive"];

  motherForm!: FormGroup;

  bloodGroups: Array<any> = [
    { id: "A+", name: "A+" },
    { id: "B+", name: "B+" },
    { id: "O+", name: "O+" },
    { id: "AB+", name: "AB+" },
    { id: "A-", name: "A-" },
    { id: "B-", name: "B-" },
    { id: "O-", name: "O-" },
    { id: "AB-", name: "AB-" },
  ];

  genotypes: Array<any> = [
    { id: "AA", name: "AA" },
    { id: "AS", name: "AS" },
    { id: "SS", name: "SS" },
    { id: "AC", name: "AC" },
  ];

  constructor(private modalService: ModalService, private fb: FormBuilder) {}

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
    });
  }

  onSubmit() {
    this.motherForm.markAllAsTouched();
    if (this.motherForm.valid) {
      console.log(this.motherForm.value);
      this.closeModal();
    }
  }

  closeModal() {
    this.modalService.close("OpenAccountModalComponent");
  }
}
