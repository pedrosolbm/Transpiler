import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 


import { AuthService } from './login/auth.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

import { routing } from './app.routing';
import { CallbackService } from './login/callback.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    LoginComponent,
    CadastroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [AuthService, CallbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
