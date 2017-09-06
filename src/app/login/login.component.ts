import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from "angular2-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  sub: any;

  constructor(public _auth: AuthService, private router: Router) {
    
     }
    

  ngOnInit() {
  }

  loginWithFacebook(): void {
    
      //  this.fb.login()
      //    .then((response: LoginResponse) => {
      //     this.router.navigateByUrl("/list")
      //    }
      //   )
      //    .catch((error: any) => console.error(error));
         
        this.sub = this._auth.login("facebook").subscribe(
          (data: any) => {
                      console.log(data.token);
                      localStorage.setItem('facebook', data.token);
                    }
        )
    
     }

}
