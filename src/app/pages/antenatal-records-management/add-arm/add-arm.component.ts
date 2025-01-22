import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { DropdownComponent } from "@component/shared/dropdown/dropdown.component";
import { OptionsHorizComponent } from "@component/shared/options-horiz/options-horiz.component";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { ArmSuppService } from "@service/arm-supp.service";
import { NotifyService } from "@service/notify.service";
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

  constructor(
    private fb: FormBuilder,
    private armSrv: ArmSuppService,
    private notify: NotifyService
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.armForm = this.fb.group({
      mother_id: ["", Validators.required],
      weight: ["", Validators.required],
      blood_pressure: ["", Validators.required],
      remark: ["", Validators.required],
      tests: ["", Validators.required],
    });
  }

  onSubmit() {
    this.armForm.markAllAsTouched();
    if (this.armForm.valid) {
      this.armSrv.addARM(this.armForm.value).subscribe({
        next: (res) => {
          this.notify.notifySuccess("Antenatal Record Added Successfully");
          this.armForm.reset();
        },
        error: (err) => {
          this.notify.notifyError(err.message);
        },
      });
      console.log(this.armForm.value);
    }
  }
}
