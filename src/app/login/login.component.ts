import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth.service";
import { Usuario } from "./usuario";
import { CallbackService } from "./callback.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private usuario: Usuario = new Usuario();
  private listaUsuarios: any;

  private email:any;
  constructor(
    private authService: AuthService,
    private callbackService: CallbackService
  ) {}

  ngOnInit() {
  }

  fazerLogin() {
    this.callbackService.getUserbyEmail(this.usuario.email).subscribe(
      dados => this.email = dados 
    )

    this.authService.fazerLogin(this.usuario, this.email);
  }
}
