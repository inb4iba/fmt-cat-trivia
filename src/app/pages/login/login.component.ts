import { Component } from "@angular/core";
import {
  ConnectionService,
  User,
} from "src/app/shared/services/connection.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  user = "";
  password = "";
  confirmation = "";

  constructor(private connectionService: ConnectionService) {}

  checkRegister() {
    console.log("login | check register");
    if (!this.passwordsMatch()) {
      console.log("Senha não é a mesma.");
      return;
    }

    if (!this.isPasswordValid()) {
      console.log("Senha inválida.");
      return;
    }

    const user: User = { username: this.user, password: this.password };
    this.user = this.password = this.confirmation = "";

    this.connectionService.registerUser(user);
  }

  passwordsMatch() {
    return this.password === this.confirmation;
  }

  isPasswordValid() {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;
    return this.password.match(regex);
  }
}
