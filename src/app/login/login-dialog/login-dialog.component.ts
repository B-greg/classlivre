import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from "angular2-social-login";
import { MdDialogRef, MD_DIALOG_DATA, MdButtonModule } from "@angular/material"


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  sub: any;
  constructor(public dialogRef: MdDialogRef<LoginDialogComponent>, @Inject(MD_DIALOG_DATA) public data: any, public _auth: AuthService) { }

  ngOnInit() {
  }

  loginWithFacebook(): void {

    this.sub = this._auth.login("facebook").subscribe(
      (data: any) => {
        console.log(data.token);
        localStorage.setItem('facebook', data.token);
        this.dialogRef.close('');
      }
    )

  }

}
