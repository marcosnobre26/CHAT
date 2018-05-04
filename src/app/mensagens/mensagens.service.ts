/*import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Router } from "@angular/router";
//import { AngularFireAuth, AngularFireDatabase, FirebaseAuthState, AuthProviders, AuthMethods, AngularFire } from "angularfire2";

//import { AngularFireDatabase } from 'angularfire2';

@Injectable()
export class MensagemService {

    private basePath: string = "/mensagens";

    mensagens: AngularFireList<any[]> = null;
    mensagem: AngularFireObject<any[]> = null;
    //items: Fire
    constructor(private af: AngularFirestore, private db: AngularFireDatabase) {
       }

}*/

//import { Injectable } from '@angular/core';
//import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
//import { Observable } from 'rxjs/Observable';
import { Subject, BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Router } from "@angular/router";
import { Mensagem } from './Mensagem';
import { Observable } from 'rxjs/Observable';
//import { Observable } from 'rxjs/Observable';
//import { Operator } from 'rxjs';
import 'rxjs/add/operator/map';



//import { Route } from '../interfaces/route';

@Injectable()
export class MensagemService {

    private dbPath: string = '/customers';
    //private authState: Observable<firebase.Mensagem>
 
    msg: AngularFireList<any>;
    listing: AngularFireObject<any> = null;

    customer: AngularFireObject<Mensagem> = null;
    customers: AngularFireList<Mensagem[]> = null;
    mensagens: AngularFireList<Mensagem[]>;

    private uid: string;

    constructor(private db: AngularFireDatabase) {}

    addMensagem(mensagem: any) {

        let teste = {//você só precisa criar um objeto e envia-lo para ca que ele sera adicionado na rota
            mensagem: "eae gay2",
            nome: "Tati",
        };

        return this.db.list('Mensagens').push(teste);
    }

    getMensagens(): AngularFireList<any> {
        return this.msg= this.db.list('Mensagens');    
    }

    deleteProduct(id: string) {
        return this.db.list('Mensagens').remove(id);
    }

    updateProduct(mensagem: Mensagem) {
            return this.db.list('Mensagens').update(mensagem.$key, { name: mensagem.nome, mensagem: mensagem.mensagem });
    }
}