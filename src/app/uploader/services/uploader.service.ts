import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Image } from '../interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UploaderService {
  private readonly apiUrl: string = 'http://localhost:3000/api';
  public isLoading: boolean = true;

  constructor(
    private http: HttpClient,
  ) { }

  public uploadImage(image: File): Observable<Image> {
    const url: string = `${this.apiUrl}/images/upload`;

    const formData: FormData = new FormData();
    formData.append('image', image);

    this.isLoading = false;

    return this.http.post<Image>(url, formData);
  }
}