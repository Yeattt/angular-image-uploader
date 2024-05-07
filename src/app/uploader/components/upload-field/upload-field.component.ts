import { Component, ElementRef, ViewChild } from '@angular/core';

import { UploaderService } from '../../services/uploader.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'uploader-upload-field',
  templateUrl: './upload-field.component.html',
  styles: ``
})
export class UploadFieldComponent {
  @ViewChild('fileUploadInput', { static: false })
  public fileUploadInput!: ElementRef<HTMLInputElement>;

  public file?: File;

  constructor(
    private uploaderService: UploaderService,
  ) { }

  public onDragImage(event: DragEvent) {
    event.preventDefault();
  }

  public onDropImage(event: DragEvent) {
    event.preventDefault();

    if (event.dataTransfer) {
      if (this.fileUploadInput) {
        const files: FileList = event.dataTransfer.files;

        this.fileUploadInput.nativeElement.files = files;
        this.file = files[0];

        this.uploaderService.uploadImage(this.file)
          .subscribe(resp => {
            console.log(resp);
          });
      };
    };
  }

  public onAttachImage(event: any) {
    event.preventDefault();

    if (event.target.files) {
      this.file = event.target.files[0];
    }

    console.log(this.file);
  }
}
