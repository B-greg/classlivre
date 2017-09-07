import {Injectable} from "@angular/core";
import { ModelFacebook } from "../model/model.facebook"
@Injectable()
export class StorageFacebook {

  FACEBOOK = "facebook";
  constructor() { }


  public saveUser(user: ModelFacebook){
    localStorage.setItem(this.FACEBOOK, JSON.stringify(user));
  }

  public getUser(): ModelFacebook{
    return JSON.parse(localStorage.getItem(this.FACEBOOK))
  }

  public clearUser(){
    localStorage.removeItem(this.FACEBOOK);
  }



}