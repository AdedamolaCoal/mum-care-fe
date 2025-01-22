import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment/environment";
import { IGetMother, IGetMotherEdit } from "@pages/models/child.model";

@Injectable({
  providedIn: "root",
})
export class MotherChildService {
  private readonly api = environment.url;

  constructor(private http: HttpClient) {}

  // add mother
  addMother(body: IGetMother) {
    return this.http.post(`${this.api}/register_mother`, body);
  }

  // get all mothers
  getAllMothers() {
    return this.http.get(`${this.api}/mothers`);
  }

  // update mother
  updateMother(id: string, body: IGetMotherEdit) {
    return this.http.put(`${this.api}/update_mother/${id}`, body);
  }

  // delete mother
  deleteMother(id: string) {
    return this.http.delete(`${this.api}/delete_mother/${id}`);
  }
}
export { IGetMother };
