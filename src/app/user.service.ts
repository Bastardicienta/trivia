import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  username: string = ""
  constructor() { }

  createUserName(name: string) {
    this.username = name
    console.log("Aquí cambió", this.username)
    localStorage.setItem("Nombre-de-usuario", this.username)
  }

  checkLogInUser():boolean{
    const name = localStorage.getItem("Nombre-de-usuario")
    if (name != null){
      this.username = name
      return true
    }
    else{
      return false
    }
  }

  signOut(){
    this.username = ""
    localStorage.removeItem("Nombre-de-usuario")
  }
}
