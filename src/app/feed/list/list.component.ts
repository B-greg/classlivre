import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})
export class ListComponent implements OnInit {


  images: Array<String>

  constructor(private ListService: ListService) {
    
    
    
     }
    

  ngOnInit() {
    this.ListService.getData().then(element => { this.images = element })
  }

} 
