import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImageService } from '../../service/image.service';
import { ImageModel } from '../../model/image-model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-review-images',
  templateUrl: './review-images.component.html',
  styleUrls: ['./review-images.component.css']
})
export class ReviewImagesComponent implements OnInit {

  constructor(private imageService: ImageService, private _sanitizer: DomSanitizer) { }

  @ViewChild("canvas")
  public canvas: ElementRef;

  images: ImageModel[];
  imagePath;
  ngOnInit(): void {
    this.showCapturedImages();
  }
  
  WIDTH = 360;
  HEIGHT = 320;

  showCapturedImages(){
    this.imageService.getAllImages().subscribe((images: ImageModel[])=>{
      this.images = images;
    });
  }

}
