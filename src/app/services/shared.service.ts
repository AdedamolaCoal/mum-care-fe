import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SharedService {
  private viewModeSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  viewMode$ = this.viewModeSubject.asObservable();

  constructor() {}

  setViewMode(isViewMode: boolean): void {
    this.viewModeSubject.next(isViewMode);
  }

  getViewMode(): boolean {
    return this.viewModeSubject.getValue();
  }
}
