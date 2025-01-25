import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { IGetImmunization } from "@pages/models/arm-supp.model";
import { ArmSuppService } from "@service/arm-supp.service";
import { MotherChildService } from "@service/mother-child.service";
import { NotifyService } from "@service/notify.service";
import { SharedService } from "@service/shared.service";
import { CalendarModule } from "primeng/calendar";

@Component({
  selector: "app-immunization",
  standalone: true,
  imports: [
    CommonModule,
    TopBannerComponent,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  templateUrl: "./add-immunization.component.html",
})
export class AddImmunizationComponent implements OnInit {
  immunizationForm!: FormGroup;
  date: Date | undefined;
  mothersList: any;

  isView: boolean = false;
  isEdit: boolean = false;

  id: any;

  armData: any;

  constructor(
    private fb: FormBuilder,
    private immunizationSrv: ArmSuppService,
    private notify: NotifyService,
    private router: Router,
    private mothersSrv: MotherChildService,
    private activatedRoute: ActivatedRoute,
    private sharedSrv: SharedService
  ) {}

  ngOnInit(): void {
    this.getImmunization();
    this.formInit();
  }

  formInit() {
    this.immunizationForm = this.fb.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      parent_email: ["", Validators.required],
      parent_first_name: ["", Validators.required],
      age: ["", Validators.required],
      previous_date: ["", Validators.required],
      next_date: ["", Validators.required],
      weight: ["", Validators.required],
      injections: [""],
    });

    this.isView = this.sharedSrv.getViewMode();
    this.isEdit = this.sharedSrv.getViewMode();

    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    if (this.id) {
      this.getImmunizationById(this.id);
    }
  }

  getImmunizationById(id: string) {
    this.immunizationSrv.getImmunizationById(id).subscribe({
      next: (res) => {
        this.armData = res;
        this.immunizationForm.patchValue({
          first_name: this.armData.first_name,
          last_name: this.armData.last_name,
          parent_email: this.armData.parent_email,
          parent_first_name: this.armData.parent_first_name,
          age: this.armData.age,
          previous_date: this.armData.previous_date,
          next_date: this.armData.next_date,
          weight: this.armData.weight,
          injections: this.armData.injections,
        });

        if (this.isView) {
          this.immunizationForm.disable();
        }
      },
    });
  }

  getImmunization() {
    this.mothersSrv.getAllMothers().subscribe({
      next: (res) => {
        this.mothersList = res;
      },
      error: (err) => {
        console.log(err);
        // this.notify.notifyError(err.message);
      },
    });
  }

  onSubmit() {
    if (this.id) {
      this.onSubmitEdit();
    } else {
      this.onSubmitNew();
    }
  }

  onSubmitEdit() {
    const payload = {
      first_name: this.immunizationForm.get("first_name")?.value,
      last_name: this.immunizationForm.get("last_name")?.value,
      parent_email: this.immunizationForm.get("parent_email")?.value,
      parent_first_name: this.immunizationForm.get("parent_first_name")?.value,
      age: this.immunizationForm.get("age")?.value,
      previous_date: this.immunizationForm.get("previous_date")?.value,
      next_date: this.immunizationForm.get("next_date")?.value,
      weight: this.immunizationForm.get("weight")?.value,
      injections: this.immunizationForm.get("injections")?.value,
    };

    this.immunizationSrv.updateImmunization(this.id, payload).subscribe({
      next: (res) => {
        this.notify.notifySuccess("Immunization Record Updated Successfully");
        this.immunizationForm.reset();
        this.router.navigateByUrl("/immunization/immunization-overview");
      },
      error: (err) => {},
    });
  }

  onSubmitNew() {
    this.immunizationForm.markAllAsTouched();
    // if (this.immunizationForm.invalid) {
    //   this.notify.notifyInfo("Please fill all fields");
    // }

    const payload: IGetImmunization = {
      first_name: this.immunizationForm.get("first_name")?.value,
      last_name: this.immunizationForm.get("last_name")?.value,
      parent_email: this.immunizationForm.get("parent_email")?.value,
      parent_first_name: this.immunizationForm.get("parent_first_name")?.value,
      age: this.immunizationForm.get("age")?.value,
      previous_date: this.immunizationForm.get("previous_date")?.value,
      next_date: this.immunizationForm.get("next_date")?.value,
      weight: this.immunizationForm.get("weight")?.value,
      injections: this.immunizationForm.get("injections")?.value,
    };
    this.immunizationSrv.addImmunization(payload).subscribe({
      next: (res) => {
        this.notify.notifySuccess("Immunization Record Added Successfully");
        this.immunizationForm.reset();
        this.router.navigateByUrl("/immunization/immunization-overview");
      },
      error: (err) => {
        this.notify.notifyError(err.message);
      },
    });
    console.log(this.immunizationForm.value);
  }
}
