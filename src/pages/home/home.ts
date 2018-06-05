import { Component } from '@angular/core';
import {IonicPage, NavController, reorderArray} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //creamos una variable
  homelist:any;

  //añadimos al constructor para poder conseguir los datos de data.ts
  constructor(public navCtrl: NavController, public data:DataProvider) {

  }
  //creamos una funcion cogemos la lista de data.ts y la ponemos en la variable homelist
  ionViewDidLoad(){
    this.homelist = this.data.List;
  }
  // funcion call cuando clicas
  //navCrtl nos permite ir a otra pagina y pasar parametros con push
  // le decimos la pagina que va a ser cargada y pasamos la informacion que queremos
    itemClicked(item):void{
    this.navCtrl.push('InfoPage',item)
  }

  //Creamos la funcion para reordenar para coger las posiciones en la lista
  reorderItem(indexes){
      this.homelist = reorderArray(this.homelist,indexes);
  }
  //console.log("clicked"); para hacer pruebas en la consola del navegador pulsando F12
    launchInsertPage(){

      this.navCtrl.push('InsertPage', {
          lista: this.homelist
      })
  }



}
