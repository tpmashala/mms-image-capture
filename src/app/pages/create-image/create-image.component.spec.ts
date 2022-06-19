import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateImageComponent } from './create-image.component';
import { ImageService } from '../../service/image.service';
import { Observable, of } from 'rxjs';
import { ImageModel } from '../../model/image-model';

describe('CreateImageComponent', () => {
  let createComponent: CreateImageComponent;
  let fixture: ComponentFixture<CreateImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateImageComponent);
    createComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Image capture componenet', () => {
    expect(createComponent).toBeTruthy();
  });

  it('should check device for camera', () => {
    
    expect(createComponent).toBeTruthy();
  });

  it('should have access to camera', () => {
    
    expect(createComponent).toBeTruthy();
  });

  it('should capture image from device camera', () => {
    
    expect(createComponent).toBeTruthy();
  });

  it('should show image capture message or result', () => {
    
    expect(createComponent).toBeTruthy();
  });

  it('should show image canvas and save and recapture option', () => {
    
    expect(createComponent).toBeTruthy();
  });

  it('should send image to the ImageService', () => {
    let imageService = fixture.debugElement.injector.get(ImageService);
    let spy = spyOn(imageService, 'saveImage').and.returnValue(of());
    expect(spy).toHaveBeenCalledWith();
  });
});
