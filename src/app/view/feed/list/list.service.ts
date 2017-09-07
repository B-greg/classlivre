
import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { StorageFacebook } from '../../../controller/storage.facebook'
import { ModelFacebook } from '../../../model/model.facebook'


import 'rxjs/add/operator/toPromise';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';
import 'rxjs';

@Injectable()
export class ListService {

  constructor(private http: Http, private storageFacebook: StorageFacebook) { }
  getData(): Promise<Array<String>> {
    return this.http.get('https://graph.facebook.com/v2.10/cupemag/albums?access_token=' + this.storageFacebook.getUser().token )
      .concatMap(this.extractDataGroup.bind(this))
      .mergeMap(this.extractDataAlbum.bind(this))
      .take(4)
      .toArray() 
      .catch(this.handleError)
      .toPromise()
      ;
  }

  private extractDataGroup(res: Response) {
    return res.json().data
  }


  private extractDataAlbum(element: any) {
    return this.http.get('https://graph.facebook.com/v2.10/' + element.id + '/photos?fields=images&access_token=' +  this.storageFacebook.getUser().token)
      .concatMap(res => {
        return res.json().data
      })
      .map(this.extractImages.bind(this))
  }

  private extractImages(element: any) {
    return element.images[0].source
  }



  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}