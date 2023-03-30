import { Component } from "@angular/core";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  user = "";
  password = "";
  confirmation = "";

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

    localStorage.setItem(
      "usuarioLogado",
      JSON.stringify({ user: this.user, password: this.password })
    );
    this.user = "";
    this.password = "";
    this.confirmation = "";
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
