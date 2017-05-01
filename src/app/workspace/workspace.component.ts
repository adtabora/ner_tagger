import { Component,Input } from '@angular/core';
import {tagged_word} from './word.class'



@Component({
  selector: 'workspace',
  template: `
    <h2>{{article.title}}</h2>
    <div >
      <div *ngFor="let sentence of article.sentences; let sent_i=index" style="display:flex;flex-wrap:wrap">
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
  @Input() tag: String
  @Input() color: String
  @Input() article: any
  



  tagWord(sent_id: number,  word_id: number ): void{
    console.log("TAG")
    console.log(sent_id + "-" + word_id)

    let word = this.article.sentences[sent_id][word_id]
    this.article.sentences[sent_id][word_id] = {
      word: word.word, 
      tag:  this.tag,
      color: this.color
    };
    
    console.log( word );
  }
  
}
