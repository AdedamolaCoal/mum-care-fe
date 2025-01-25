import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment/environment";
import { Child, IGetMother, IGetMotherEdit } from "@pages/models/child.model";

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
    return this.http.get(`${this.api}/show_mothers`);
  }

  // get mother by id
  getMotherById(id: string) {
    return this.http.get(`${this.api}/mother/${id}`);
  }

  // update mother
  updateMother(id: string, body: IGetMotherEdit) {
    return this.http.put(`${this.api}/update_mother/${id}`, body);
  }

  // delete mother
  deleteMother(id: string) {
    return this.http.delete(`${this.api}/delete_mother/${id}`);
  }

  // ********************************** CHILDREN **********************************
  // get children route
  getChildren() {
    return this.http.get(`${this.api}/get_children`);
  }

  // get child by id
  getChildById(id: string) {
    return this.http.get(`${this.api}/get_details/${id}`);
  }

  // update child
  updateChild(id: string, body: Child) {
    return this.http.put(`${this.api}/update_child/${id}`, body);
  }

  // add child
  addChild(body: Child) {
    return this.http.post(`${this.api}/add_child`, body);
  }

  // delete child
  deleteChild(id: string) {
    return this.http.delete(`${this.api}/delete_child/${id}`);
  }
}
