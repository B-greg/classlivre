import { Component, OnInit, Input } from '@angular/core';
import { ModelAlbum } from '../../../../model/model.album';
import { StorageFacebook } from '../../../../controller/storage.facebook'
import { ModelFacebook } from '../../../../model/model.facebook'
import { Router } from '@angular/router';


@Component({
  selector: 'app-album-adapter',
  templateUrl: './album-adapter.component.html',
  styleUrls: ['./album-adapter.component.css'],
  providers: []

})
export class AlbumAdapterComponent implements OnInit {

  @Input() modelAlbum: ModelAlbum;
  image: String;

  constructor(private storageFacebook: StorageFacebook, private router: Router) { }

  ngOnInit() {
    this.image = 'https://graph.facebook.com/v2.10/' + this.modelAlbum.id + '/picture?type=album&access_token=' +  this.storageFacebook.getUser().token
  }

  openAlbum(){
    this.router.navigate(['/pictures/'+ this.modelAlbum.id ]);
  }

}
