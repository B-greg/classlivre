import {Injectable} from "@angular/core";

@Injectable()
export class StorageFacebook {

  FACEBOOK = "facebook";
  constructor() { }


  public saveToken(token: string){
    localStorage.setItem(this.FACEBOOK, token);
  }

  public getToken(){
    return localStorage.getItem(this.FACEBOOK)
  }

  public clearToken(){
    localStorage.removeItem(this.FACEBOOK);
  }



}