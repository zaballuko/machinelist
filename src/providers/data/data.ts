import { Injectable } from '@angular/core';


/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

    List:any =[
        {itemName:"Grazer",
            type:"Terra-formers",
            size:"normal",
            weakness:"fire",
            img: "assets/imgs/Grazer.png"},
        {itemName:"Strider",
            type:"Purifiers",
            size:"normal",
            weakness:"fire",
            img: "Grazer"},
        {itemName:"Broadhead",
            type:"Terra-formers",
            size:"normal",
            weakness:"fire",
            img: "assets/imgs/Grazer.png"},
        {itemName:"Scrapper",
            type:"Recyclers",
            size:"small",
            weakness:"electricity",
            img: "assets/imgs/Grazer.png"},
        {itemName:"Sawtooth",
            type:"Combat",
            size:"big",
            weakness:"electricity",
            img: "assets/imgs/Grazer.png"},
        {itemName:"ShellWalker",
            type:"Transport",
            size:"big",
            weakness:"extraction",
            img: "assets/imgs/Grazer.png"},
        {itemName:"Snapmaw",
            type:"Purifiers",
            size:"big",
            weakness:"fire",
            img: "assets/imgs/Grazer.png"},
        {itemName:"Behemoth",
            type:"Transport",
            size:"big",
            weakness:"extraction",
            img: "assets/imgs/Grazer.png"},
        {itemName:"Trampler",
            type:"Terra-formers",
            size:"big",
            weakness:"electricity",
            img: "assets/imgs/Grazer.png"},
        {itemName:"Glinthawk",
            type:"Recyclers",
            size:"small",
            weakness:"fire",
            img: "assets/imgs/Grazer.png"},
        {itemName:"Thunderjaw",
            type:"Combat",
            size:"big",
            weakness:"extraction",
            img: "assets/imgs/Grazer.png"},
        {itemName:"Deathbringer",
            type:"Faro",
            size:"big",
            weakness:"extraction",
            img: "assets/imgs/Grazer.png"},
    ]

  constructor() {
    console.log('Hello DataProvider Provider');
  }


}
