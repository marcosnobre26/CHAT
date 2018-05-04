import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MensagensComponent } from './mensagens.component';
import { MensagemService } from './mensagens.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MensagensComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MensagemService],
  bootstrap: [MensagensComponent]
})
export class MensagensModule { }
