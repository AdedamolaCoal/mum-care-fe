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
import { IGetMother, IGetMotherEdit } from "@pages/models/child.model";
import { MotherChildService } from "@service/mother-child.service";
import { NotifyService } from "@service/notify.service";
import { SharedService } from "@service/shared.service";
import { StorageService } from "@service/storage.service";
import { CalendarModule } from "primeng/calendar";

@Component({
  selector: "app-add-mother",
  standalone: true,
  imports: [
    CommonModule,
    TopBannerComponent,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  templateUrl: "./add-mother.component.html",
})
export class AddMotherComponent implements OnInit {
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

  date: Date | undefined = new Date();

  isView: boolean = false;
  isEdit: boolean = false;

  id: any;

  motherForm!: FormGroup;
  motherData: any;

  constructor(
    private fb: FormBuilder,
    private motherSrv: MotherChildService,
    private notify: NotifyService,
    private router: Router,
    private sharedSrv: SharedService,
    private activatedRoute: ActivatedRoute
  ) {}

  formInit() {
    this.motherForm = this.fb.group({
      hospital_id: ["", Validators.required],
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      password: ["", Validators.required],
      age: ["", Validators.required],
      genotype: ["", Validators.required],
      blood_group: ["", Validators.required],
      nationality: ["", Validators.required],
      email: ["", Validators.required],
    });

    this.isView = this.sharedSrv.getViewMode();
    this.isEdit = this.sharedSrv.getViewMode();

    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    if (this.id) {
      this.getMotherByID(this.id);
    }
  }

  ngOnInit(): void {
    this.formInit();
  }

  getMotherByID(id: string) {
    this.motherSrv.getMotherById(id).subscribe({
      next: (res) => {
        this.motherData = res;
        this.motherForm.patchValue({
          first_name: this.motherData.first_name,
          last_name: this.motherData.last_name,
          age: this.motherData.age,
          genotype: this.motherData.genotype,
          blood_group: this.motherData.blood_group,
          nationality: this.motherData.nationality,
          email: this.motherData.email,
          hospital_id: this.motherData.hospital_id,
        });

        if (this.isView) {
          this.motherForm.disable();
        }
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
    // this.motherForm.markAllAsTouched();
    // if (this.motherForm.invalid) {
    //   this.notify.notifyInfo("Please fill all fields");
    //   return;
    // }
    const payload: IGetMotherEdit = {
      first_name: this.motherForm.get("first_name")?.value,
      last_name: this.motherForm.get("last_name")?.value,
      age: this.motherForm.get("age")?.value,
      genotype: this.motherForm.get("genotype")?.value,
      blood_group: this.motherForm.get("blood_group")?.value,
      nationality: this.motherForm.get("nationality")?.value,
      email: this.motherForm.get("email")?.value,
      // hospital_id: this.motherForm.get("hospital_id")?.value,
      // password: this.motherForm.get("password")?.value,
    };

    this.motherSrv.updateMother(this.id, payload).subscribe({
      next: (res) => {
        // console.log(res);
        this.notify.notifySuccess("Mother updated successfully");
        this.motherForm.reset();
        this.router.navigateByUrl("/mothers/mothers-data");
      },
      error: (error) => {
        // console.log(error.message);
        this.notify.notifyError(error.message);
      },
    });
  }

  onAdd() {
    this.motherForm.markAllAsTouched();
    if (this.motherForm.invalid) {
      this.notify.notifyInfo("Please fill all fields");
      return;
    }
    const payload: IGetMother = {
      first_name: this.motherForm.get("first_name")?.value,
      last_name: this.motherForm.get("last_name")?.value,
      age: this.motherForm.get("age")?.value,
      genotype: this.motherForm.get("genotype")?.value,
      blood_group: this.motherForm.get("blood_group")?.value,
      nationality: this.motherForm.get("nationality")?.value,
      email: this.motherForm.get("email")?.value,
      hospital_id: this.motherForm.get("hospital_id")?.value,
      password: this.motherForm.get("password")?.value,
    };
    this.motherSrv.addMother(payload).subscribe({
      next: (res: any) => {
        // console.log(res);
        this.notify.notifySuccess("Mother added successfully");
        this.motherForm.reset();
        this.router.navigateByUrl("/mothers/mothers-data");
      },
      error: (error) => {
        // console.log(error.message);
        this.notify.notifyError(error.message);
      },
    });
  }
}
