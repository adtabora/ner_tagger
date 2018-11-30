import { Component,Output,EventEmitter } from '@angular/core';
import {tagTypes} from '../workspace/word.class'



@Component({
  selector: 'right-panel',
  template: `
  <div style="margin:10px">
    <md-chip-list class="mat-chip-list-stacked">
      <md-chip *ngFor="let tag of tagTypes" 
        [style.background] = "tag[1]" 
         selected="true" (click)="selectTag(tag)" >
        {{tag[0]}}
      </md-chip>
    </md-chip-list>
  </div>
    `,
  styles: [` 
    .chip-black {
      background-color: black;
    }
  `]
})

export class RightPanelComponent {
  title = 'right';
  tagTypes = tagTypes;

  @Output() setTag = new EventEmitter<any>();

  selectTag(tag: string):void{
    this.setTag.emit({
      tag:tag[0],
      color:tag[1]
    });
  }

  selectLoc():void{
    this.setTag.emit({
      tag:"Loc",
      color:"warn"
    });
  }

  selectPer():void{
    this.setTag.emit({
      tag:"Per",
      color:"accent"
    });
  }

  selectOrg():void{
    this.setTag.emit({
      tag:"Org",
      color:"primary"
    });
  }

  selectMisc():void{
    this.setTag.emit({
      tag:"Misc",
      color:"none"
    });


    
  }
  
}
