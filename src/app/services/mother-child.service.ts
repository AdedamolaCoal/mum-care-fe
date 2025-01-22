import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment/environment";

export interface IGetMother {
  hospital_id?: string;
  first_name: string;
  last_name: string;
  age: number;
  genotype: string;
  blood_group: string;
  nationality: string;
  email: string;
}

@Injectable({
  providedIn: "root",
})
export class MotherChildService {
  api = environment.url;

  constructor(private http: HttpClient) {}

  // add mother
  addMother(body: IGetMother) {
    return this.http.post(`${this.api}/register_mother`, body);
  }
}
