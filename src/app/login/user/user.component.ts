import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "angular2-social-login";
import { StorageFacebook } from '../../helper/storage.facebook'


@Component({
  selector: 'app-login',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  sub: any

  constructor(public _auth: AuthService, private router: Router, 
    private storageFacebook: StorageFacebook) {

  }


  ngOnInit() {
  }


  renewToken(): void {
    this.sub = this._auth.login("facebook").subscribe(
      (data: any) => {
        this.storageFacebook.saveToken(data.token);
      }
    )
  }

  logout(): void {
    this._auth.logout().subscribe(
      (data) => {
        this.storageFacebook.clearToken();
      }
    )
  }

}
