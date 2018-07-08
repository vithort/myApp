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
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=" + this.getApiKey());
  }

  getMoviesDetails(filmeid) {
    return this.http.get(this.baseApiPath + `/movie/${filmeid}?api_key=` + this.getApiKey());
  }

  getApiKey(): String {
    return 'SUA API KEY AQUI';
    //https://www.themoviedb.org/
  }

}
