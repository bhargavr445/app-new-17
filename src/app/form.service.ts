import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UniversityI } from './communication/univI';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  getUnivList(): Observable<UniversityI[]> {
    return this.http.get<UniversityI[]>('http://universities.hipolabs.com/search?country=United+Kingdom');
  }
}
