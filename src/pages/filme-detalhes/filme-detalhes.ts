import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-filme-detalhes'
  ,templateUrl: 'filme-detalhes.html'
  ,providers: [
    MovieProvider
  ]
})
export class FilmeDetalhesPage {

  public filme;
  public filmeid;

  constructor(
    public navCtrl: NavController
    ,public navParams: NavParams
    ,private movieProvider: MovieProvider
  ) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter FilmeDetalhesPage');

    this.filmeid = this.navParams.get("id");
    console.log("Filme ID recebido: " + this.filmeid);
    this.movieProvider.getMoviesDetails(this.filmeid)
    .subscribe( data => {
      let retorno = (data as any)._body;
      this.filme = JSON.parse(retorno);
      console.log(this.filme);
    }, error => {
      console.log(error);
    });      
  }

}
