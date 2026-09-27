import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private apiUrl = 'http://localhost:8000/api/projects';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Project[]>(this.apiUrl);
  }

  getByCategory(category: string){
  return this.http.get<Project[]>(`${this.apiUrl}/${category}`)
  }

  addProject(data: FormData) {
    return this.http.post<Project>(this.apiUrl, data);
  }

  delete(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
