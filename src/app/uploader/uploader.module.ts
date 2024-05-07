import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploaderRoutingModule } from './uploader-routing.module';
import { UploadFieldComponent } from './components/upload-field/upload-field.component';
import { UploaderPageComponent } from './pages/uploader-page/uploader-page.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { UploadedImagePageComponent } from './pages/uploaded-image-page/uploaded-image-page.component';

@NgModule({
  declarations: [
    UploadFieldComponent,
    UploaderPageComponent,
    UploadedImagePageComponent,
    ImageCardComponent,
  ],
  imports: [
    CommonModule,
    UploaderRoutingModule,
  ],
})
export class UploaderModule { }
