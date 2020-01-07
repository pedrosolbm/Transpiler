import { Injectable, EventEmitter } from "@angular/core";
import { Usuario } from "./usuario";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();
  pegarNomeEmitter = new EventEmitter<String>();
  constructor(private router: Router) {}

  fazerLogin(usuario: Usuario, listaUsuarios: any) {
    listaUsuarios.forEach(usuarioCallback => {
      if (
        usuario.email === usuarioCallback.email &&
        usuario.senha === usuarioCallback.senha
      ) {
        this.usuarioAutenticado = true;
        this.mostrarMenuEmitter.emit(true);
        this.pegarNomeEmitter.emit(usuarioCallback.nome);
        this.router.navigate(["/"]);
      } else {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
      }
    });

  }
}
