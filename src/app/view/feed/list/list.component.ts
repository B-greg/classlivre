import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service'
import { MdDialogModule, MdDialogRef, MdDialog } from '@angular/material';
import { LoginDialogComponent } from '../../login/login-dialog/login-dialog.component';
import { StorageFacebook } from '../../../controller/storage.facebook'
import { ModelFacebook } from '../../../model/model.facebook'
import { Router, ActivatedRoute, Params, Data } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent implements OnInit {

  config = {
  };

  images: Array<String> = []

  constructor(private ListService: ListService, public dialog: MdDialog, private storageFacebook: StorageFacebook, private route: ActivatedRoute, private router: Router) {

  }


  ngOnInit() {

    this.route.params.subscribe(params => {
      this.ListService.clear();
      this.images = [];
      this.loadData(params);
    });
  }

  private loadData(params){
    this.ListService.getData(params['id']).then(element => { this.images.push(...element) })
  }


  onScroll() {
    this.loadData('')
  }

} 
