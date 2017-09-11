import { Component, OnInit, Input } from '@angular/core';
import { ModelImage } from '../../../../model/model.image';
import { StorageFacebook } from '../../../../controller/storage.facebook'


@Component({
  selector: 'app-image-adapter',
  templateUrl: './image-adapter.component.html',
  styleUrls: ['./image-adapter.component.css']
})
export class ImageAdapterComponent implements OnInit {

  @Input() modelImage: string;
  image: string;

  constructor(private storageFacebook: StorageFacebook) { }

  ngOnInit() {
    this.image = this.modelImage;
  }


}
