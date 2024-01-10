import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, filter, from, map, mergeMap, scan } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  http = inject(HttpClient);

  // constructor(private http: HttpClient) {

  // }

  #apiUrl = '/api/getStudents';

  getUtl() {
    return this.#apiUrl;
  }

  getApiData(): Observable<any> {
    return this.http.get<any>('https://dummy.restapiexample.com/api/v1/employees');
  }

  findSingleElementObservable(input$: Observable<number[]>): Observable<number> {
    return input$.pipe(
      scan((acc, array) => {
        array.forEach(value => {
          if (acc.has(value)) {
            acc.delete(value);
          } else {
            acc.add(value);
          }
        });
        return acc;
      }, new Set<number>()),
      filter(set => set.size === 1),
      map(set => set.values().next().value)
    );
  }
  
}


