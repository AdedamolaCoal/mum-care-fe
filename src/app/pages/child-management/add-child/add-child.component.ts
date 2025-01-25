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
import { OptionsHorizComponent } from "@component/shared/options-horiz/options-horiz.component";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { Child, IGetMother } from "@pages/models/child.model";
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
    OptionsHorizComponent,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
  ],
  templateUrl: "./add-child.component.html",
})
export class AddChildComponent implements OnInit {
  parentData: Array<IGetMother> = [];
  // parentName: Array<any> = ["Mrs Florence Michaels", "Mrs Majid Daniels", "Mrs Khalid Alizadeh", "Mrs Fatimah Richards"];
  // parentEmail: Array<any> = ["flor23@gmail.com", "mamamama@gmail", "mamamama@gmail",];

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

  childForm!: FormGroup;

  isView: boolean = false;
  isEdit: boolean = false;

  childData: any;

  constructor(
    private fb: FormBuilder,
    private childSrv: MotherChildService,
    private notify: NotifyService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sharedSrv: SharedService
  ) {}

  formInit() {
    this.childForm = this.fb.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      blood_group: ["", Validators.required],
      genotype: ["", Validators.required],
      parent_email: ["", Validators.required],
      nationality: ["", Validators.required],
      age: ["", Validators.required],
      weight: ["", Validators.required],
    });

    this.isView = this.sharedSrv.getViewMode();
    this.isEdit = this.sharedSrv.getViewMode();

    const id = this.activatedRoute.snapshot.paramMap.get("id");

    if (id) {
      this.getChildById(id);
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
          first_name: this.childData.first_name,
          last_name: this.childData.last_name,
          blood_group: this.childData.blood_group,
          genotype: this.childData.genotype,
          parent_email: this.childData.parent_email,
          nationality: this.childData.nationality,
          age: this.childData.age,
          weight: this.childData.weight,
        });

        if (this.isView) {
          this.childForm.disable();
        }
      },
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
    this.childForm.markAllAsTouched();
    if (this.childForm.invalid) {
      this.notify.notifyInfo("Please fill all fields");
      return;
    }
    const payload: Child = {
      first_name: this.childForm.get("first_name")?.value,
      last_name: this.childForm.get("last_name")?.value,
      blood_group: this.childForm.get("blood_group")?.value,
      genotype: this.childForm.get("genotype")?.value,
      parent_email: this.childForm.get("parent_email")?.value,
      nationality: this.childForm.get("nationality")?.value,
      age: this.childForm.get("age")?.value,
      weight: this.childForm.get("weight")?.value,
    };

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
}
