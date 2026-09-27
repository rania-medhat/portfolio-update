import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CV } from '../models/cv';

@Injectable({ providedIn: 'root' })

export class CvsService {

  private apiUrl = 'http://localhost:8000/api/cvs';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<CV[]>(this.apiUrl);
  }

  add(cv: CV) {
    return this.http.post(this.apiUrl, cv);
  }

  delete(title: string) {
    return this.http.delete(`${this.apiUrl}/${title}`);
  }
}
