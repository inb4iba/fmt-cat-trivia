import { Injectable } from "@angular/core";

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: "root",
})
export class ConnectionService {
  constructor() {}

  registerUser(user: User) {
    localStorage.setItem("usuarioLogado", JSON.stringify(user));
  }

  isUserConnected() {
    if (localStorage.getItem("usuarioLogado")) return true;
    return false;
  }
}
