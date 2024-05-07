import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploaderPageComponent } from './pages/uploader-page/uploader-page.component';
import { UploadedImagePageComponent } from './pages/uploaded-image-page/uploaded-image-page.component';

const routes: Routes = [
  {
    path: '',
    component: UploaderPageComponent,
  },
  {
    path: ':id',
    component: UploadedImagePageComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class UploaderRoutingModule { }