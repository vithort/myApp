import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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

  public lista_filmes = new Array<any>();
  public loader;

  constructor(
    public navCtrl: NavController
    ,public navParams: NavParams
    ,private movieProvider: MovieProvider
    ,public loadingCtrl: LoadingController
  ) {
  }

  abrirCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando filmes...",
      //duration: 3000
    });
    this.loader.present();
  }

  fecharCarregando() {
    this.loader.dismiss();
  }

  /*public somaDoisNumeros(num1: number, num2: number): void {
    //alert("minha funcao funcionou...");
    //alert(5+10);
    alert(num1 + num2);
  }*/

  /*public retornaUmNumero(): number {
    return 3;
  }*/


  ionViewDidEnter() {
    console.log('ionViewDidEnter FeedPage');
    //this.somaDoisNumeros();
    //this.somaDoisNumeros(5, 3);
    this.abrirCarregando();
    this.movieProvider.getLastestMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
        this.fecharCarregando();
    }, error => {
      console.log(error);
      this.fecharCarregando();
    })
  }

}
