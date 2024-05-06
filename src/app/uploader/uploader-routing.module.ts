import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploaderPageComponent } from './pages/uploader-page/uploader-page.component';

const routes: Routes = [
  {
    path: '',
    component: UploaderPageComponent,
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