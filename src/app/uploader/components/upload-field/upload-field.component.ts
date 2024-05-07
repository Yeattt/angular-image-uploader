import { Component, ElementRef, ViewChild } from '@angular/core';

import { UploaderService } from '../../services/uploader.service';

@Component({
  selector: 'uploader-upload-field',
  templateUrl: './upload-field.component.html',
  styles: ``
})
export class UploadFieldComponent {
  @ViewChild('fileUploadInput', { static: false })
  public fileUploadInput!: ElementRef<HTMLInputElement>;

  public file: File | null = null;

  constructor(
    private uploaderService: UploaderService,
  ) { }

  public onDragImage(event: DragEvent) {
    event.preventDefault();
  }

  private uploadImage(file: File) {
    this.uploaderService.uploadImage(file)
    .subscribe(resp => {
      console.log(resp);
    });
  }

  public onDropImage(event: DragEvent) {
    event.preventDefault();

    if (event.dataTransfer) {
      if (this.fileUploadInput) {
        const files: FileList = event.dataTransfer.files;

        this.fileUploadInput.nativeElement.files = files;
        this.file = files[0];

        this.uploadImage(this.file);
      };
    };
  }

  public onAttachImage(event: any) {
    event.preventDefault();

    if (event.target.files) {
      this.file = event.target.files[0];

      this.uploadImage(this.file!);
    }

    console.log(this.file);
  }
}
