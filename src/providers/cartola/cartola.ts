import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

@Injectable()
export class CartolaProvider {

  basepath = "/cartolaapi";

  constructor(
    public http: Http
    ,private _platform: Platform
  ) {
    console.log('Hello CartolaProvider Provider');
    if (this._platform.is("cordova")) {
      this.basepath = "https://api.cartolafc.globo.com";
    }
  }

  atletas() {
    return this.http.get(`${this.basepath}/atletas/mercado`);
  }

}
