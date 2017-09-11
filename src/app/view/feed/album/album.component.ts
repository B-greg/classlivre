import { Component, OnInit, NgZone } from '@angular/core';
import { AlbumService } from './album.service'
import { MdDialogModule, MdDialogRef, MdDialog } from '@angular/material';
import { LoginDialogComponent } from '../../login/login-dialog/login-dialog.component';
import { StorageFacebook } from '../../../controller/storage.facebook'
import { ModelFacebook } from '../../../model/model.facebook'
import { ModelAlbum } from '../../../model/model.album'
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  providers: [AlbumService]

})
export class AlbumComponent implements OnInit {

  config = {
  };

  albums: Array<ModelAlbum>
  colRow: any

  constructor(private albumService: AlbumService, public dialog: MdDialog, private storageFacebook: StorageFacebook, private ngZone: NgZone, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.onResize()
    this.route.params.subscribe(params => {this.loadData(params)});
  }


  private loadData(params){
    if (this.storageFacebook.getUser() == null) {
      let dialogRef = this.dialog.open(LoginDialogComponent, this.config).afterClosed().subscribe(result => {
        this.albumService.getData(params['id']).then(element => { this.albums = element })
      });

    } else {
      this.albumService.getData(params['id']).then(element => { this.albums = element })
    }
  }

  private onResize() {
    this.updateColRow()
    window.onresize = (e) => {
      this.ngZone.run(() => {
        this.updateColRow()
      });
    };
  }

  private updateColRow() {
    const element = window.innerWidth;
    if (element < 750) { this.colRow = 1; }
    else if (element < 950) { this.colRow = 2; }
    else if (element < 1400) { this.colRow = 3; }
    else { this.colRow = 4 }
  }

}
