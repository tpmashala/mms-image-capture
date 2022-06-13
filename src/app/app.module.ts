import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { CreateImageComponent } from './pages/create-image/create-image.component';
import { ReviewImagesComponent } from './pages/review-images/review-images.component';
import { ImageService } from './service/image.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CreateImageComponent,
    ReviewImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
