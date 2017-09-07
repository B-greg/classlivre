import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "angular2-social-login";
import { StorageFacebook } from '../../../controller/storage.facebook'
import { ModelFacebook } from '../../../model/model.facebook'



@Component({
  selector: 'app-login',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  sub: any
  user: ModelFacebook

  constructor(public _auth: AuthService, private router: Router,
    private storageFacebook: StorageFacebook, private cdr: ChangeDetectorRef) {

  }


  ngOnInit() {
    this.updateUserView()
  }


  renewToken(): void {
    this.sub = this._auth.login("facebook").subscribe(
      (data: any) => {
        console.log(data)
        this.storageFacebook.saveUser(data);
        this.updateUserView()

      }
    )
  }

  logout(): void {
    this._auth.logout().subscribe(
      (data) => {
        this.storageFacebook.clearUser();
        this.updateUserView()
      }
    )
  }

  private updateUserView() {
    var user = this.storageFacebook.getUser()
    if (user != null) {
      this.user = user
      // this.userEmail = user.email
      // this.userName = user.name
      // this.userImage = user.image
    } else {
      this.user = new ModelFacebook
      this.user.email = "No user found"
      this.user.name = "No user found"
      this.user.image = "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"
    }
    this.cdr.detectChanges();
  }

}
