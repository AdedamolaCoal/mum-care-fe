import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  setItem(key: string, value: string) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  // getItem(key: string) {
  //   if (typeof key === 'object') {
  //     return JSON.parse(localStorage.getItem(key) || '{}')
  //   }
  //   return localStorage.getItem(key);
  // }
  getItem(key: string) {
    const value = localStorage.getItem(key);
    if (value === null) {
      return {};
    }
    try {
      return JSON.parse(value);
    } catch (error) {
      return value;
    }
  }
}
