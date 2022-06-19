class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';
  constructor(public src: string, public file: File) {}
}

import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ImageService } from 'src/app/service/image.service';
import { ImageModel } from 'src/app/model/image-model';

@Component({
  selector: 'app-create-image',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.css'],
  providers:[DatePipe]
})
export class CreateImageComponent implements OnInit, AfterViewInit, OnDestroy {

  selectedFile: ImageSnippet;

  constructor(private imageService: ImageService, private datePipe: DatePipe) { }
  
  WIDTH = 360;
  HEIGHT = 320;

  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  captured: ImageModel;
  error: any;
  isCaptured: boolean;
  dateCaptured: string;
  saved:boolean = false;
  isCameraOpened:boolean = false;

  ngAfterViewInit() {
     
  }

  ngOnInit(): void {
  }

  openCamera(){
    this.setupDevices();
    this.isCameraOpened = true;
  }

  async setupDevices() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        if (stream) {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
          this.error = null;
        } else {
          this.error = "You have no output video device";
        }
      } catch (e) {
        this.error = e;
      }
    }
  }

  onStop() {
    this.video.nativeElement.pause();
    (this.video.nativeElement.srcObject).getVideoTracks()[0].stop();
    this.video.nativeElement.srcObject = null;
  }

  capture() {
    this.drawImageToCanvas(this.video.nativeElement);
    this.isCaptured = true;
    this.dateCaptured = this.datePipe.transform(new Date(), 'HH:mm:ss dd-MMM-yyyy');
    this.captured = <ImageModel>{
                capturedPondImage:this.canvas.nativeElement.toDataURL("image/png"),
                capturedTimestamp:this.dateCaptured
    };
    
    this.canvas.nativeElement.removeAttribute("hidden");
    this.video.nativeElement.setAttribute("hidden", "hidden");
    
    this.onStop();
  }

  drawImageToCanvas(image: any) {
    this.canvas.nativeElement
      .getContext("2d")
      .drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
  }

  reCaptureImage(){
    this.isCaptured = false;
    this.canvas.nativeElement.setAttribute("hidden", "hidden");
    this.video.nativeElement.removeAttribute("hidden");
    this.openCamera();
  }

  saveImage(){
    this.imageService.saveImage(this.captured).subscribe((res)=> {
      
    })
  }

  ngOnDestroy(): void {
    (this.video.nativeElement.srcObject).getVideoTracks()[0].stop();
  }

}
