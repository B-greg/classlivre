import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes }   from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './feed/list/list.component';
import { UserComponent } from './login/user/user.component';
import { HttpModule }    from '@angular/http';
import { Angular2SocialLoginModule } from "angular2-social-login";
import { LoginDialogComponent } from './login/login-dialog/login-dialog.component';
import { MaterialModule } from '@angular/material';
import { StorageFacebook } from './helper/storage.facebook'  

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'user', component: UserComponent }
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
    UserComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    Angular2SocialLoginModule,
    
  ],
  providers: [ 
    StorageFacebook
   ],
  entryComponents: [ LoginDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);