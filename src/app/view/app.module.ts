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
import { StorageFacebook } from '../controller/storage.facebook';
import { AlbumComponent } from './feed/album/album.component';
import { AlbumAdapterComponent } from './feed/album/album-adapter/album-adapter.component';
import { ImageAdapterComponent } from './feed/list/image-adapter/image-adapter.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

const appRoutes: Routes = [
  { path: '', redirectTo: '/albums/cupemag', pathMatch: 'full' },
  { path: 'albums/:id', component: AlbumComponent},
  { path: 'pictures/:id', component: ListComponent},
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
    LoginDialogComponent,
    AlbumComponent,
    AlbumAdapterComponent,
    ImageAdapterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    Angular2SocialLoginModule,
    InfiniteScrollModule
    
  ],
  providers: [ 
    StorageFacebook
   ],
  entryComponents: [ LoginDialogComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);
platformBrowserDynamic().bootstrapModule(AppModule);