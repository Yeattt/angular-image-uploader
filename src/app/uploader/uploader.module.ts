import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploaderRoutingModule } from './uploader-routing.module';
import { UploadFieldComponent } from './components/upload-field/upload-field.component';
import { UploaderPageComponent } from './pages/uploader-page/uploader-page.component';

@NgModule({
  declarations: [
    UploadFieldComponent,
    UploaderPageComponent,
  ],
  imports: [
    CommonModule,
    UploaderRoutingModule,
  ],
})
export class UploaderModule { }
