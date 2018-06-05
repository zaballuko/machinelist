import {NgModule} from "@angular/core";
import {HomePage} from "./home";
import {IonicPageModule} from "ionic-angular";

// Manera rápida y sencilla de cargar las paginas
@NgModule({
    declarations: [
        HomePage,
    ],
    imports:[
        IonicPageModule.forChild(HomePage)
    ],
    exports: [
        HomePage
    ]
})

export class HomePageModule {

}