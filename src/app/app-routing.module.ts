import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateImageComponent } from './pages/create-image/create-image.component';
import { ReviewImagesComponent } from './pages/review-images/review-images.component';

const routes: Routes = [
  { path: 'capture', component: CreateImageComponent },
  { path: 'review', component: ReviewImagesComponent },
  { path: '**', redirectTo: 'capture', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
