import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service'
import { MdDialogModule, MdDialogRef, MdDialog } from '@angular/material';
import { LoginDialogComponent } from '../../login/login-dialog/login-dialog.component';
import { StorageFacebook } from '../../../controller/storage.facebook'
import { ModelFacebook } from '../../../model/model.facebook'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent implements OnInit {

  config = {
  };

  images: Array<String>

  constructor(private ListService: ListService, public dialog: MdDialog, private storageFacebook: StorageFacebook) {

  }


  ngOnInit() {
    if (this.storageFacebook.getUser() == null) {
      console.log("display dialog")
      let dialogRef = this.dialog.open(LoginDialogComponent, this.config).afterClosed().subscribe(result => {
        this.ListService.getData().then(element => { this.images = element })
      });

    } else {
      this.ListService.getData().then(element => { this.images = element })
    }
  }

} 
