import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImageService } from '../../service/image.service';
import { ImageModel } from '../../model/image-model';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-review-images',
  templateUrl: './review-images.component.html',
  styleUrls: ['./review-images.component.css']
})
export class ReviewImagesComponent implements OnInit {

  constructor(private imageService: ImageService, private _sanitizer: DomSanitizer) { }

  @ViewChild("canvas")
  public canvas: ElementRef;

  images:Array<any> = [];
  imagePath;
  ngOnInit(): void {
    this.showCapturedImages();
  }
  
  WIDTH = 360;
  HEIGHT = 320;

  showCapturedImages(){
    this.imageService.getAllImages().subscribe((images: ImageModel[])=>{
      // = images;
      let image;
      images.forEach((im)=>{
        this.images.push({
            capturedTimestamp: im.capturedTimestamp,
            capturedPondImage: "http://localhost:3005/" + im.capturedPondImage
        });
        });
        
    });
  }

}
