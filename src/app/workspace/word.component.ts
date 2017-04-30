import { Component,Input } from '@angular/core';
import {tagged_word} from './word.class'

@Component({
  selector: 'word-tag',
  template: `
    <div class="text-word" *ngIf="!tagged">
        {{word.word}}&nbsp;
    </div>
    <md-chip selected="true" *ngIf="tagged" [color]="word.color">
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

    ngOnInit(): void{
        if( this.word.tag == "none"){
            this.tagged = false
            
        }else{
            this.tagged = true
        }
    }
}