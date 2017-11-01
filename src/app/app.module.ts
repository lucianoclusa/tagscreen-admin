import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventoComponent } from './eventos/evento/evento.component';
import { EventosListComponent } from './eventos/eventos-list/eventos-list.component';
import { EventosListItemComponent } from './eventos/eventos-list-item/eventos-list-item.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router'
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'eventos/list', canActivate:[AuthGuard],component: EventosListComponent },
  {path: 'evento/:hashtag', canActivate:[AuthGuard], component: EventoComponent},
  {path: 'evento', canActivate:[AuthGuard], component: EventoComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventoComponent,
    EventosListComponent,
    EventosListItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthGuard, AuthService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
