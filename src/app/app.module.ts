import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { /*AngularFireDatabase,*/ AngularFireObject, AngularFireList } from 'angularfire2/database';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule, /*AngularFireDatabase*/ } from "angularfire2/database";


import { AppComponent } from './app.component';
import { AppRoutes } from './AppRoutes.routing';
import { MensagensComponent } from './mensagens/mensagens.component';
import { MensagensModule } from './mensagens/mensagens.module';


export const firebaseConfig = {
  apiKey: "AIzaSyDRFVY4xkAHawV0C8UPURmiaT2ShWm0bxs",
    authDomain: "chat-b2be7.firebaseapp.com",
    databaseURL: "https://chat-b2be7.firebaseio.com",
    projectId: "chat-b2be7",
    storageBucket: "chat-b2be7.appspot.com",
    messagingSenderId: "332074199636"
};

@NgModule({
  declarations: [
    AppComponent,
    //MensagensComponent
  ],
  imports: [
    BrowserModule,
    MensagensModule,
    RouterModule.forRoot(AppRoutes),
    //AngularFireDatabase,
    AngularFireModule.initializeApp(firebaseConfig),
    //AngularFireDatabase,
    AngularFireDatabaseModule //, AngularFireObject, AngularFireList,
    //AngularFirestore, AngularFirestoreCollection
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
