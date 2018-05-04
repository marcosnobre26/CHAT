import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MensagemService } from './mensagens.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AngularFireDatabase, AngularFireObject, AngularFireList, AngularFireAction } from 'angularfire2/database';
import { Mensagem } from './Mensagem';
import 'rxjs/add/operator/switchMap';
import { Response } from '@angular/http';

//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.css']
})
export class MensagensComponent implements OnInit {

  //todos$: FirebaseListObservable<any[]>;
  //msg: Observable<any[]>;
  //products: Mensagem[];
  //items: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  //mensagens: Mensagem[];
  mensagens: any[];

  aaa = "toto";

  constructor(private mensagemService: MensagemService, private route: ActivatedRoute, private router: Router, private db: AngularFireDatabase) { }

  ngOnInit() {
    //console.log(absolute);

    let msg = this.mensagemService.getMensagens();/*.subscribe(businesses => {
      this.business = businesses;*/
      msg.snapshotChanges().subscribe(item =>{
        
        this.mensagens=[];
          item.forEach(element =>{
            //console.log(element);
            var y = element.payload.toJSON();
            y["$key"] = element.key;
            //this.mensagens.push(y as Mensagem);
            this.mensagens.push(y as any);
            
          })
      });



    //console.log(msg);
    //return msg;
    //this.products = this.mensagemService.getCatagores();

    //this.mensagemService.getCatagores();//.subscribe(businesses => {this.business = businesses;})
    //console.log(this.mensagemService.getCatagores());
    //this.mensagemService = this.mensagemService.list('/todos');
  }

  teste(aaa: any){
    
    console.log(aaa);
  }

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }

}
