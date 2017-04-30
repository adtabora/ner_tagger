import { Component,Input } from '@angular/core';
import {tagged_word} from './word.class'



@Component({
  selector: 'workspace',
  template: `
    <h2>{{title}}</h2>
    <div >
      <div *ngFor="let sentence of sentences; let sent_i=index" style="display:flex;flex-wrap:wrap">
        <word-tag *ngFor="let w of sentence; let word_i=index"
            [attr.id]="sent_i + '_' + word_i"

            [word]="w" 
            (click) = "tagWord(sent_i,word_i)"
        > 
        </word-tag>
        <br/>
        <br/>
      </div>
    </div>
    `,
    styles:[`
    .word:hover {
        background-color: lightblue;
    }
    `]
})

export class WorkspaceComponent {
  @Input() title: String
  @Input() tag: String
  @Input() color: String

  

  text = ["Un autobús ejecutivo se estrelló la mañana de este sábado en un portón de la iglesia Inmaculada Concepción , donde estaban reunidas varias personas con discapacidad .",
  "Según testigos , el conductor del bus 424, de la ruta Las Torres – Centro, venía peleando línea cuando perdió el control del vehículo .",
  "Posteriormente el autobús fue a impactar al portón de uno de los salones del templo, donde estaban congregados feligreses con capacidades especiales que se llevaron tremendo susto .",
  "No es la primera vez que los conductores de unidades protagonizan choques similares por la disputa de los pasajeros ."
  ]

  sentences = <any[]>[]



  ngOnInit(): void{
    this.text.forEach(sentence => {
      let words = sentence.split(" ")
      var items = []
      for(var i=0;i<words.length;i++){
        items.push({
          word: words[i],
          tag: "none"
        })
      }
      this.sentences.push( items)
    });


  }

  tagWord(sent_id: number,  word_id: number ): void{
    console.log("HELLO")
    console.log(sent_id + "-" + word_id)

    let word = this.sentences[sent_id][word_id]
    this.sentences[sent_id][word_id] = {
      word: word.word, 
      tag:  this.tag,
      color: this.color
    };
    
    console.log( word );
  }
  
}
