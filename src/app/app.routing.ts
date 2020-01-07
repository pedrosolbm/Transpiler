import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from "./login/login.component";
import { CadastroComponent } from './cadastro/cadastro.component';


const APP_ROUTES: Routes = [
  // { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: CadastroComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);