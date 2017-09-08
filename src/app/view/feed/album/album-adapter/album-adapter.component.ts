import { Component, OnInit, Input } from '@angular/core';
import { ModelAlbum } from '../../../../model/model.album';
import { StorageFacebook } from '../../../../controller/storage.facebook'
import { ModelFacebook } from '../../../../model/model.facebook'

@Component({
  selector: 'app-album-adapter',
  templateUrl: './album-adapter.component.html',
  styleUrls: ['./album-adapter.component.css'],
  providers: []

})
export class AlbumAdapterComponent implements OnInit {

  @Input() modelAlbum: ModelAlbum;
  image: String;

  constructor(private storageFacebook: StorageFacebook) { }

  ngOnInit() {
    this.image = 'https://graph.facebook.com/v2.10/' + this.modelAlbum.id + '/picture?type=album&access_token=' +  this.storageFacebook.getUser().token
  }

}
