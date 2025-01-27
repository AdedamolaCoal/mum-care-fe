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
import { Child, IGetMother } from "@pages/models/child.model";
import { ArmSuppService } from "@service/arm-supp.service";
import { MotherChildService } from "@service/mother-child.service";
import { NotifyService } from "@service/notify.service";
import { SharedService } from "@service/shared.service";
import { CalendarModule } from "primeng/calendar";

@Component({
  selector: "app-add-child",
  standalone: true,
  imports: [
    CommonModule,
    TopBannerComponent,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  templateUrl: "./add-child.component.html",
})
export class AddChildComponent implements OnInit {
  parentData: Array<IGetMother> = [];
  immunizationData: any;

  date: Date | undefined = new Date();

  childForm!: FormGroup;

  isView: boolean = false;
  isEdit: boolean = false;

  id: any;

  childData: any;

  constructor(
    private fb: FormBuilder,
    private childSrv: MotherChildService,
    private notify: NotifyService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sharedSrv: SharedService,
    private immunizationSrv: ArmSuppService
  ) {}

  formInit() {
    this.childForm = this.fb.group({
      parent_id: ["", Validators.required],
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      weight: ["", Validators.required],
      nationality: ["", Validators.required],
      age: ["", Validators.required],
    });

    this.isView = this.sharedSrv.getViewMode();
    this.isEdit = this.sharedSrv.getViewMode();

    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    if (this.id) {
      this.getChildById(this.id);
    }
  }

  ngOnInit(): void {
    this.getMothers();
    this.formInit();
  }

  getChildById(id: string) {
    this.childSrv.getChildById(id).subscribe({
      next: (res) => {
        this.childData = res;
        this.childForm.patchValue({
          parent_id: this.childData.parent__name,
          first_name: this.childData.first_name,
          last_name: this.childData.last_name,
          nationality: this.childData.nationality,
          age: this.childData.age,
          weight: this.childData.weight,
        });

        if (this.isView) {
          this.childForm.disable();
        }
      },
      error: (err) => {},
    });
  }

  getMothers() {
    this.childSrv.getAllMothers().subscribe({
      next: (res: any) => {
        this.parentData = res;
      },
      error: (err) => {},
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
    const payload: Child = {
      first_name: this.childForm.get("first_name")?.value,
      last_name: this.childForm.get("last_name")?.value,
      parent_id: this.childForm.get("parent_id")?.value,
      nationality: this.childForm.get("nationality")?.value,
      age: this.childForm.get("age")?.value,
      weight: this.childForm.get("weight")?.value,
    };
    console.log(payload);

    this.childSrv.updateChild(this.id, payload).subscribe({
      next: (res) => {
        this.notify.notifySuccess("Child Updated Successfully");
        this.childForm.reset();
        console.log(this.childForm.value);
        this.router.navigateByUrl("/child/children-data");
      },
      error: (err) => {},
    });
  }

  onAdd() {
    this.childForm.markAllAsTouched();
    if (this.childForm.invalid) {
      this.notify.notifyInfo("Please fill all fields");
      return;
    }
    const payload: Child = {
      first_name: this.childForm.get("first_name")?.value,
      last_name: this.childForm.get("last_name")?.value,
      parent_id: this.childForm.get("parent_id")?.value,
      nationality: this.childForm.get("nationality")?.value,
      age: this.childForm.get("age")?.value,
      weight: this.childForm.get("weight")?.value,
    };
    console.log(payload);

    this.childSrv.addChild(payload).subscribe({
      next: (res) => {
        this.notify.notifySuccess("Child Added Successfully");
        this.childForm.reset();
        console.log(this.childForm.value);
        this.router.navigateByUrl("/child/children-data");
      },
      error: (err) => {},
    });
  }

  getImmunizations() {
    this.immunizationSrv.getImmunization().subscribe({
      next: (res) => {
        this.immunizationData = res;
      },
      error: (res) => {
        this.notify.notifyError(res.message);
      },
    });
  }
}
