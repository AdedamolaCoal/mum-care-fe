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
import { CalendarModule } from "primeng/calendar";

@Component({
  selector: "add-supplement",
  standalone: true,
  imports: [
    TopBannerComponent,
    DropdownComponent,
    OptionsHorizComponent,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./add-supplement.component.html",
})
export class AddSupplementComponent implements OnInit {
  suppForm!: FormGroup;
  currencies = ["USD", "GBP", "EUR"];
  date: Date | undefined;

  fb: FormBuilder = inject(FormBuilder);

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
      console.log(this.suppForm.value);
    }
  }
}
