import { CommonModule } from "@angular/common";
import { Component, inject, OnDestroy, OnInit } from "@angular/core";
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
import { ArmSuppService } from "@service/arm-supp.service";
import { NotifyService } from "@service/notify.service";
import { SharedService } from "@service/shared.service";
import { CalendarModule } from "primeng/calendar";

@Component({
  selector: "add-supplement",
  standalone: true,
  imports: [
    TopBannerComponent,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: "./add-supplement.component.html",
})
export class AddSupplementComponent implements OnInit, OnDestroy {
  suppForm!: FormGroup;
  date: Date | undefined;

  isView: boolean = false;
  isEdit: boolean = false;

  supplementId: string | null = "";
  supplementData: any = null;

  fb: FormBuilder = inject(FormBuilder);
  suppSrv: ArmSuppService = inject(ArmSuppService);
  notify: NotifyService = inject(NotifyService);
  router: Router = inject(Router);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  sharedSrv: SharedService = inject(SharedService);

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.suppForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
    });

    this.isView = this.sharedSrv.getViewMode();
    this.isEdit = this.sharedSrv.getViewMode();

    const id = this.activatedRoute.snapshot.paramMap.get("id");

    if (id) {
      this.getSupplementByID(id);
    }
  }

  getSupplementByID(id: any) {
    this.suppSrv.getSupplementByID(id).subscribe({
      next: (res) => {
        this.supplementData = res;
        this.suppForm.patchValue({
          name: this.supplementData.name,
          description: this.supplementData.description,
        });

        if (this.isView) {
          this.suppForm.disable();
        }
      },
      error: (err) => {
        this.notify.notifyError(err.message);
      },
    });
  }

  onSubmit() {
    this.suppForm.markAllAsTouched();
    if (this.suppForm.valid) {
      this.suppSrv.addSupplement(this.suppForm.value).subscribe({
        next: (res) => {
          this.notify.notifySuccess("Supplement Added Successfully");
          this.suppForm.reset();
          this.router.navigateByUrl("/supplement/supplement-overview");
        },
        error: (err) => {
          this.notify.notifyError(err.message);
        },
      });
      console.log(this.suppForm.value);
    }
  }

  ngOnDestroy(): void {
    this.sharedSrv.setViewMode(false);
  }
}
