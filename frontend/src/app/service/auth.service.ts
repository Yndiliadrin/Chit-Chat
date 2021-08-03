import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async logout(): Promise<void> {
  }

  async regiszt(email: string, password: string, name: string): Promise<any>{
  }

  login(email: string, password: string): Promise<any> {
  }

  authenticated(): boolean {
  }

  currentUserObservable(): any {
  }
}
