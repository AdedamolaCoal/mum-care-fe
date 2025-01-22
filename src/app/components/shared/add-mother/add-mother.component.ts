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
import {
  NgLabelTemplateDirective,
  NgOptionTemplateDirective,
  NgSelectComponent,
  NgSelectModule,
} from "@ng-select/ng-select";
import { IGetMother, MotherChildService } from "@service/mother-child.service";
import { NotifyService } from "@service/notify.service";

@Component({
  selector: "app-open-account-modal",
  standalone: true,
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectComponent,
  ],
  templateUrl: "./add-mother.component.html",
})
export class AddMotherComponent implements OnInit {
  date: Date | undefined;

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

  constructor(
    private modalService: ModalService,
    private fb: FormBuilder,
    private motherSrv: MotherChildService,
    private notify: NotifyService
  ) {}

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
      const payload: IGetMother = {
        first_name: this.motherForm.get("first_name")?.value,
        last_name: this.motherForm.get("last_name")?.value,
        age: this.motherForm.get("age")?.value,
        genotype: this.motherForm.get("genotype")?.value,
        blood_group: this.motherForm.get("blood_group")?.value,
        nationality: this.motherForm.get("nationality")?.value,
        email: this.motherForm.get("email")?.value,
      };
      this.motherSrv.addMother(payload).subscribe({
        next: (res: any) => {
          console.log(res);
          this.notify.notifySuccess("Mother added successfully");
          this.motherForm.reset();
          this.closeModal();
        },
        error: (error) => {
          console.log(error.message);
        },
      });
      console.log(this.motherForm.value);
      this.closeModal();
    }
  }

  closeModal() {
    this.modalService.close("OpenAccountModalComponent");
  }
}
