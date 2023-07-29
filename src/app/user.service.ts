import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUser: any; // Aquí almacenaremos los datos del usuario

  constructor() { }

  // Método para establecer los datos del usuario
  setCurrentUser(user: any) {
    this.currentUser = user;
  }

  // Método para obtener los datos del usuario
  getCurrentUser() {
    return this.currentUser;
  }
}
