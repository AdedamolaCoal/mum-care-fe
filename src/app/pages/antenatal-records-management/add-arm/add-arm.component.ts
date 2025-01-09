import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { DropdownComponent } from "@component/shared/dropdown/dropdown.component";
import { OptionsHorizComponent } from "@component/shared/options-horiz/options-horiz.component";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { CalendarModule } from "primeng/calendar";

@Component({
	selector: "app-make-payment",
	standalone: true,
	imports: [
		DropdownComponent,
		CommonModule,
		TopBannerComponent,
		OptionsHorizComponent,
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

	constructor(private fb: FormBuilder) {}

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
			console.log(this.armForm.value);
		}
	}
}
