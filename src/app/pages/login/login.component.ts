import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import {
  ConnectionService,
  User,
} from "src/app/shared/services/connection.service";

type FormProps = {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
  confirm: FormControl<string | null>;
};

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup<FormProps> = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
    confirm: new FormControl(""),
  });

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  checkRegister() {
    console.log("login | check register");
    if (!this.passwordsMatch()) {
      window.alert("Senha não é a mesma.");
      return;
    }

    if (!this.isPasswordValid()) {
      window.alert("Senha inválida.");
      return;
    }

    const user: User = {
      username: this.loginForm.value.username!,
      password: this.loginForm.value.password!,
    };
    this.createForm();

    if (this.connectionService.registerUser(user))
      this.router.navigate(["/home"]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(""),
      password: new FormControl(""),
      confirm: new FormControl(""),
    });
  }

  passwordsMatch() {
    return this.loginForm.value.password === this.loginForm.value.confirm;
  }

  isPasswordValid() {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/;
    return this.loginForm.value.password?.match(regex);
  }
}
