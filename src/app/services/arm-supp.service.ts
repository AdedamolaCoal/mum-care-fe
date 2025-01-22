import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environment/environment";

@Injectable({
  providedIn: "root",
})
export class ArmSuppService {
  private readonly api = environment.url;

  constructor(private http: HttpClient) {}

  // add antenatal record
  addARM(body: {
    mother_id: string;
    weight: string;
    blood_pressure: string;
    remark: string;
    tests: string;
  }) {
    return this.http.post(`${this.api}/create_antenatal_record`, body);
  }

  // get all antenatal records
  getARM() {
    return this.http.get(`${this.api}/get_antenatal_records`);
  }

  // get antenatal records by id
  getArmByMotherID(mother_id: string) {
    return this.http.get(`${this.api}/get_antenatal_records/${mother_id}`);
  }

  // update antenatal records
  updateARM(body: {
    mother_id: string;
    weight?: string;
    blood_pressure?: string;
    remark?: string;
    tests?: string;
  }) {
    return this.http.put(`${this.api}/update_antenatal_record`, body);
  }

  // delete antenatal records
  deleteARM(id: string) {
    return this.http.delete(`${this.api}/delete_antenatal_record/${id}`);
  }

  // add supplements
  addSupplement(body: { name: string; description: string }) {
    return this.http.post(`${this.api}/add_supplements`, body);
  }

  // get all supplements
  getSupplements() {
    return this.http.get(`${this.api}/show_supplements`);
  }

  // get supplement by id
  getSupplementByID(id: number) {
    return this.http.get(`${this.api}/supplement/${id}`);
  }

  // update supplement
  updateSupplement(body: { id: number; name?: string; description?: string }) {
    return this.http.put(`${this.api}/update_supplements`, body);
  }

  // delete supplement
  deleteSupplement(id: number) {
    return this.http.delete(`${this.api}/delete_supplements/${id}`);
  }
}
