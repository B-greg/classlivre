import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service'
import { MdDialogModule, MdDialogRef, MdDialog } from '@angular/material';
import { LoginDialogComponent } from '../../login/login-dialog/login-dialog.component';
import { StorageFacebook } from '../../helper/storage.facebook'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent implements OnInit {

  config = {
    disableClose: false,
    panelClass: 'custom-overlay-pane-class',
    hasBackdrop: true,
    backdropClass: '',
    width: '40%',
    height: '200px',
    position: {
      top: 'auto',
      bottom: 'auto',
      left: '30%',
      right: '30%'
    },
    data: {
      message: ''
    }
  };

  images: Array<String>

  constructor(private ListService: ListService, public dialog: MdDialog, private storageFacebook: StorageFacebook) {

  }


  ngOnInit() {
    if (this.storageFacebook.getToken() == null) {
      console.log("display dialog")
      let dialogRef = this.dialog.open(LoginDialogComponent, this.config).afterClosed().subscribe(result => {
        this.ListService.getData().then(element => { this.images = element })
      });

    } else {
      this.ListService.getData().then(element => { this.images = element })
    }
  }

} 
