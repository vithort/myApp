import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

@IonicPage()
@Component({
  selector: 'page-feed'
  , templateUrl: 'feed.html'
  , providers: [
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
  public refresher;
  public isRefreshing: boolean = false;
  public page = 1;
  public infiniteScroll;

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , private movieProvider: MovieProvider
    , public loadingCtrl: LoadingController
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

  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.carregarFilmes();
    /*
    console.log('Begin async operation', refresher);
        
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
    */
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter FeedPage');
    //this.somaDoisNumeros();
    //this.somaDoisNumeros(5, 3);
    this.carregarFilmes();

  }

  abrirDetalhes(filme) {
    console.log(filme);
    this.navCtrl.push(FilmeDetalhesPage, { id: filme.id });
  }

  fecharCarregandoRefresher() {
    this.fecharCarregando();
    if (this.isRefreshing) {
      this.refresher.complete();
      this.isRefreshing = false;
    }
  }

  doInfinite(infiniteScroll) {
    /*
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
    */
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);

  }

  carregarFilmes(newPage: boolean = false) {
    this.abrirCarregando();
    this.movieProvider.getLastestMovies(this.page).subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);

        if (newPage) {
          this.lista_filmes = this.lista_filmes.concat(objeto_retorno.results);
          console.log("Página Atual: " + this.page);
          console.log(this.lista_filmes);
          this.infiniteScroll.complete();
        } else {
          this.lista_filmes = objeto_retorno.results;
        }

        console.log(objeto_retorno);
        this.fecharCarregandoRefresher();
      }, error => {
        console.log(error);
        this.fecharCarregandoRefresher();
      })
  }

}
