import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from "angular2-social-login";
import { MdDialogRef, MD_DIALOG_DATA, MdButtonModule } from "@angular/material"
import { StorageFacebook } from "../../../controller/storage.facebook"


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {

  constructor(private dialogRef: MdDialogRef<LoginDialogComponent>, 
  @Inject(MD_DIALOG_DATA) public data: any, 
  public _auth: AuthService, 
  private storageFacebook: StorageFacebook) { }

  ngOnInit() {
  }

  loginWithFacebook(): void {
    this._auth.login("facebook").subscribe(
      (data: any) => {
        console.log(data);
        this.storageFacebook.saveUser(data);
        this.closeSelf()
      })

  }

  closeSelf() {
    console.log("close");
    this.dialogRef.close("value");
  }

}
