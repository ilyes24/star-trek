import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private baseUrl = 'http://localhost:3000/api/v1';
  private _refreshNeeded$ = new Subject<void>();

  constructor(private http: HttpClient) {


  }

  get refreshNeeded$() {
   return this._refreshNeeded$;
  }

  getList(): Observable<any> {
   return this.http.get(`${this.baseUrl}/episodes`)
  }

}
