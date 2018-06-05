import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
//Importamos el HomePage patra poder mandar los datos

/**
 * Generated class for the InsertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insert',
  templateUrl: 'insert.html',
})
export class InsertPage {
  //creamos una variable y con ello pasamos todos los parametros al info

    itemsNew:any[];
    name:string;
    type:string;
    size:string;
    weakness:string;
    img:string;
    data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //esto coger el homelist que le pasa por parametros en el itemsNew
      this.itemsNew=navParams.get("lista");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertPage');
  }
    //crea un nuevo item y deja vacio el form el push añade
    createItem(){
      this.data={itemName:this.name,
            type:this.type,
            size:this.size,
            weakness:this.weakness,
            img: this.img};

        this.itemsNew.push(this.data);
        this.name='';
        this.type='';
        this.size='';
        this.weakness='';
        this.img='';

        this.navCtrl.push(HomePage)
        alert('item creado')
    }
   }
