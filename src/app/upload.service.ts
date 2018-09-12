import { Injectable } from '@angular/core';
import { Upload } from './Upload';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) {}

  upload(upload: Upload) {
    if(upload.file) {
      this.http.post('', upload);
    }
  }
}
