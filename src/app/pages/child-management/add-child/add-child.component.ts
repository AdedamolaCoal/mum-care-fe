import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { DropdownComponent } from "@component/shared/dropdown/dropdown.component";
import { OptionsHorizComponent } from "@component/shared/options-horiz/options-horiz.component";
import { TopBannerComponent } from "@component/shared/top-banner/top-banner.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { Child } from "@pages/models/child.model";
import { CalendarModule } from "primeng/calendar";

@Component({
	selector: "app-add-child",
	standalone: true,
	imports: [
		CommonModule,
		TopBannerComponent,
		OptionsHorizComponent,
		DropdownComponent,
		CalendarModule,
		FormsModule,
		ReactiveFormsModule,
		NgSelectModule,
	],
	templateUrl: "./add-child.component.html",
})
export class AddChildComponent implements OnInit{

	parentName: Array<any> = ["Mrs Florence Michaels", "Mrs Majid Daniels", "Mrs Khalid Alizadeh", "Mrs Fatimah Richards"];
	parentEmail: Array<any> = ["flor23@gmail.com", "mamamama@gmail", "mamamama@gmail",];

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

	constructor(private fb: FormBuilder) {}

	formInit() {
		this.childForm = this.fb.group({
			first_name: ["", Validators.required],
			last_name: ["", Validators.required],
			parent_name: ["", Validators.required],
			blood_group: ["", Validators.required],
			genotype: ["", Validators.required],
			parent_email: ["", Validators.required],
			nationality: ["", Validators.required],
			age: ["", Validators.required],
			date_added: [this.date, Validators.required],
			weight: ["", Validators.required],
		})
	}

	ngOnInit(): void {
		this.formInit();
	}

	onSubmit() {
		this.childForm.markAllAsTouched();
		if (this.childForm.valid) {
			console.log(this.childForm.value);
			// this.childForm.reset();
		}
	}
}
