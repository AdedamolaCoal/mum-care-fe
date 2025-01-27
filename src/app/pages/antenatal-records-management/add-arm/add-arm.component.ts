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
import { IGetArm } from "@pages/models/arm-supp.model";
import { ArmSuppService } from "@service/arm-supp.service";
import { MotherChildService } from "@service/mother-child.service";
import { NotifyService } from "@service/notify.service";
import { SharedService } from "@service/shared.service";
import { CalendarModule } from "primeng/calendar";

@Component({
  selector: "app-make-payment",
  standalone: true,
  imports: [
    CommonModule,
    TopBannerComponent,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  templateUrl: "./add-arm.component.html",
})
export class AddArmComponent implements OnInit {
  armForm!: FormGroup;
  date: Date | undefined;
  mothersList: any;

  isView: boolean = false;
  isEdit: boolean = false;

  id: any;

  armData: any;

  constructor(
    private fb: FormBuilder,
    private armSrv: ArmSuppService,
    private notify: NotifyService,
    private router: Router,
    private mothersSrv: MotherChildService,
    private activatedRoute: ActivatedRoute,
    private sharedSrv: SharedService
  ) {}

  ngOnInit(): void {
    this.fetchAllMothers();
    this.formInit();
  }

  formInit() {
    this.armForm = this.fb.group({
      mother_id: ["", Validators.required],
      weight: ["", Validators.required],
      blood_pressure: ["", Validators.required],
      remark: [""],
      tests: [""],
    });

    this.isView = this.sharedSrv.getViewMode();
    this.isEdit = this.sharedSrv.getViewMode();

    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    if (this.id) {
      this.getArmById(this.id);
    }
  }

  getArmById(id: string) {
    this.armSrv.getArmByID(id).subscribe({
      next: (res: any) => {
        this.armData = res.record;
        this.armForm.patchValue({
          mother_id: this.armData.mother_id,
          weight: this.armData.weight,
          blood_pressure: this.armData.blood_pressure,
          remark: this.armData.remark,
          tests: this.armData.tests,
        });

        if (this.isView) {
          this.armForm.disable();
        }
      },
      error: (err) => {},
    });
  }

  fetchAllMothers() {
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
      this.onEdit();
    } else {
      this.onAdd();
    }
  }

  onEdit() {
    const payload: IGetArm = {
      mother_id: this.armForm.get("mother_id")?.value,
      weight: this.armForm.get("weight")?.value,
      blood_pressure: this.armForm.get("blood_pressure")?.value,
      remark: this.armForm.get("remark")?.value,
      tests: this.armForm.get("tests")?.value,
    };
    this.armSrv.updateARM(this.id, payload).subscribe({
      next: (res) => {
        this.notify.notifySuccess("Antenatal Record Updated Successfully");
        this.armForm.reset();
        this.router.navigateByUrl("/arm/antenatal-records");
      },
      error: (err) => {
        this.notify.notifyError(err.message);
      },
    });
    console.log(this.armForm.value);
  }

  onAdd() {
    this.armForm.markAllAsTouched();
    if (this.armForm.invalid) {
      this.notify.notifyInfo("Please fill all fields");
    }

    const payload: IGetArm = {
      mother_id: this.armForm.get("mother_id")?.value,
      weight: this.armForm.get("weight")?.value,
      blood_pressure: this.armForm.get("blood_pressure")?.value,
      remark: this.armForm.get("remark")?.value,
      tests: this.armForm.get("tests")?.value,
    };
    this.armSrv.addARM(payload).subscribe({
      next: (res) => {
        this.notify.notifySuccess("Antenatal Record Added Successfully");
        this.armForm.reset();
        this.router.navigateByUrl("/arm/antenatal-records");
      },
      error: (err) => {
        this.notify.notifyError(err.message);
      },
    });
    console.log(this.armForm.value);
  }
}
