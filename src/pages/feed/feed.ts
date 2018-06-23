import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
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
  ) {
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    //alert("minha funcao funcionou...");
    //alert(5+10);
    alert(num1 + num2);
  }

  public retornaUmNumero(): number {
    return 3;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumeros();
    //this.somaDoisNumeros(5, 3);
  }

}
