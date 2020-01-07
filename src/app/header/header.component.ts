import { Component, OnInit } from "@angular/core";
import { AuthService } from "../login/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  mostrarMenu: boolean = false;
  mostrarNome: String;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => (this.mostrarMenu = mostrar)
    );
    this.authService.pegarNomeEmitter.subscribe(
      mostrar => (this.mostrarNome = mostrar)
    );
  }
}
