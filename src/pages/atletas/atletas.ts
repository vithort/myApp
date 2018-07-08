import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartolaProvider } from '../../providers/cartola/cartola';

@IonicPage()
@Component({
  selector: 'page-atletas'
  ,templateUrl: 'atletas.html'
  ,providers: [
    CartolaProvider
  ]
})
export class AtletasPage {

  constructor(
    public navCtrl: NavController
    ,public navParams: NavParams
    ,private _cartolaProvider: CartolaProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AtletasPage');
    this._cartolaProvider.atletas().subscribe(data => {
        console.log(data);
      })
  }

}
