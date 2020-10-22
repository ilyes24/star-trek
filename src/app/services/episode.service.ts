import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }

  rootUrl = '/api/v1';

  getEpisodes() {
    return this.http.get(this.rootUrl + '/episodes');
  }
}
