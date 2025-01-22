import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
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
import { ArmSuppService } from "@service/arm-supp.service";
import { NotifyService } from "@service/notify.service";
import { CalendarModule } from "primeng/calendar";

@Component({
  selector: "add-supplement",
  standalone: true,
  imports: [
    TopBannerComponent,
    OptionsHorizComponent,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: "./add-supplement.component.html",
})
export class AddSupplementComponent implements OnInit {
  suppForm!: FormGroup;
  date: Date | undefined;

  fb: FormBuilder = inject(FormBuilder);
  suppSrv: ArmSuppService = inject(ArmSuppService);
  notify: NotifyService = inject(NotifyService);

  ngOnInit(): void {
    this.formInit();
  }

  formInit() {
    this.suppForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  onSubmit() {
    this.suppForm.markAllAsTouched();
    if (this.suppForm.valid) {
      this.suppSrv.addSupplement(this.suppForm.value).subscribe({
        next: (res) => {
          this.notify.notifySuccess("Supplement Added Successfully");
          this.suppForm.reset();
        },
        error: (err) => {
          this.notify.notifyError(err.message);
        },
      });
      console.log(this.suppForm.value);
    }
  }
}
