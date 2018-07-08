import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

@IonicPage()
@Component({
  selector: 'page-feed'
  ,templateUrl: 'feed.html'
  ,providers: [
    MovieProvider
  ]
})

export class FeedPage {

  public nome_usuario: string = "Vithor Carvalho";
  public objeto_feed = {
    titulo: "Vithor Carvalho",
    data: "23 de Junho de 2018",
    descricao: "Estou criando um app incrível...",
    qntd_likes: 12,
    qntd_comments: 4,
    time_comment: "11h atrás"
  }

  constructor(
    public navCtrl: NavController
    ,public navParams: NavParams
    ,private movieProvider: MovieProvider
  ) {
  }

  /*public somaDoisNumeros(num1: number, num2: number): void {
    //alert("minha funcao funcionou...");
    //alert(5+10);
    alert(num1 + num2);
  }*/

  /*public retornaUmNumero(): number {
    return 3;
  }*/


  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros();
    //this.somaDoisNumeros(5, 3);
    this.movieProvider.getLastestMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log(objeto_retorno);
    }, error => {
      console.log(error);
    })
  }

}
