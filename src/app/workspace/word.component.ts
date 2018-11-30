import { Component,Input } from '@angular/core';
import {tagged_word, tagTypes} from './word.class'

@Component({
  selector: 'word-tag',
  template: `
    <div class="text-word" *ngIf="!tagged">
        {{word.word}}&nbsp;
    </div>
    <md-chip selected="true" *ngIf="tagged" [style.background] = "color" >
        {{word.word}}
    </md-chip>
    `,
    styles:[`
    .text-word:hover {
        background-color: lightblue;
    }
    `]
})

export class WordComponent {
    @Input() word: tagged_word
    tagged= false
    color: string
    ngOnInit(): void{
        if( this.word.tag == "none"){
            this.tagged = false
        }else{
            this.tagged = true

            let tag = tagTypes.find(element => {
                return element[0] == this.word.tag.substr(2);
            });

            this.color = tag[1]
        }
    }
}