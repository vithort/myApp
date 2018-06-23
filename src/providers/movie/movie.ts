import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(
    public http: Http
  ) {
    console.log('Hello MovieProvider Provider');
  }

  getLastestMovies() {
    return this.http.get(this.baseApiPath + "/movie/latest?api_key=");
  }

}
