import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'uploader',
    loadChildren: () => import('./uploader/uploader.module').then(m => m.UploaderModule),
  },
  {
    path: '**',
    redirectTo: 'uploader'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
