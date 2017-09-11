
import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { StorageFacebook } from '../../../controller/storage.facebook'
import { ModelFacebook } from '../../../model/model.facebook'
import { ModelAlbum } from '../../../model/model.album'


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
export class AlbumService {

  next = null;
  paging = true;


  constructor(private http: Http, private storageFacebook: StorageFacebook) { }
  getData(albumName: string): Promise<Array<ModelAlbum>> {
    var url;
    if (this.paging && this.next == null) {
      url = 'https://graph.facebook.com/v2.10/' + albumName + '/albums?access_token=' + this.storageFacebook.getUser().token
    } else if (this.paging && this.next != null) {
      url = this.next;
    } else {
      return
    }
    return this.http.get(url)
      .map(this.extractDataGroup.bind(this))
      .catch(this.handleError)
      .toPromise();
  }

  clear() {
    this.next = null;
    this.paging = true;
  }

  private extractDataGroup(res: Response) {
    var albums: Array<ModelAlbum> = []
    this.next = res.json().paging.next;
    if (res.json().paging.next == undefined) { this.paging = false }
    res.json().data.forEach(element => {
      albums.push(element)
    });

    return albums
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