import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes }   from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './feed/list/list.component';
import { LoginComponent } from './login/login.component';
import { HttpModule }    from '@angular/http';
import { Angular2SocialLoginModule } from "angular2-social-login";

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'login',        component: LoginComponent }
];

let providers = {
  "facebook": {
    "clientId": "974407822690894",
    "apiVersion": "v2.8"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    Angular2SocialLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);