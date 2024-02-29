import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
  LoginByEmail() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
