import { Component,Input } from '@angular/core';
import {tagged_word} from './word.class'



@Component({
  selector: 'workspace',
  template: `
    <h2>{{article.title}}</h2>
    <div>
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
    console.log("TAG " + sent_id + "-" + word_id)
    var tag : String;
    let word = this.article.sentences[sent_id][word_id];

    // check if it is the same tag which in that case put a none tag
    if (word.tag.substr(2) == this.tag){
      this.article.sentences[sent_id][word_id] = {
        word: word.word,
        tag: "none"
      };
      console.log("none");
      //check the next word and correct it if necessary
      if ( this.article.sentences[sent_id].length -1 > word_id){
        let next = this.article.sentences[sent_id][word_id+1]
        if ( next.tag == tag ){
          this.article.sentences[sent_id][word_id +1].tag = "B-" + this.tag
        }
      }

      return
    }

    // check if the word is the first of its tag type
    if (word_id == 0){
      tag = "B-" + this.tag;
    }else{
      let before = this.article.sentences[sent_id][word_id-1];
      if( before.tag.substr(2) == this.tag ){
        tag = "I-" + this.tag;
      } else{
        tag = "B-" + this.tag;
      }
    }

    //if the word is the first of its tag type check and correct the next one
    if ( tag[0] == "B" && this.article.sentences[sent_id].length -1 > word_id){
      let next = this.article.sentences[sent_id][word_id+1]
      if ( next.tag == tag ){
        this.article.sentences[sent_id][word_id +1].tag = "I-" + this.tag
      }
    }

    // create a new object because this way it will trigger the update routine
    this.article.sentences[sent_id][word_id] = {
      word: word.word, 
      tag:  tag
    };
    
    console.log( tag );
  }
  
}
