import { Component,Input, Output,EventEmitter } from '@angular/core';
import {tagTypes} from '../workspace/word.class'



@Component({
  selector: 'relationships-panel',
  template: `
  <div style="margin:10px">
      <md-select placeholder="Child Entity" [(ngModel)]="childEntity">
        <md-option *ngFor="let entity of entities" [value]="entity">
          {{entity.word}}
        </md-option>
      </md-select>

      <span> is in </span>

      <md-select placeholder="Parent Entity" [(ngModel)]="parentEntity">
        <md-option *ngFor="let entity of entities" [value]="entity">
          {{entity.word}}
        </md-option>
      </md-select>

      <button md-raised-button color="primary" (click)="addRelationship()">Add</button>


      <table  *ngIf="relationships">
            <thead>
                <tr>
                    <th> Number </th>
                    <th> Relationship </th>
                    <th> Action </th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let relation of relationships; let i=index" >
                    <td>   
                        {{i}}
                    </td>
                    <td> 
                      <b>{{ relation[0].word}} </b>  
                      {{" is in "}} 
                      <b> {{ relation[1].word}} </b>
                    </td>
                    <td> <button md-button color="primary" (click)="removeRelationship(i)">delete</button> </td>
                </tr>
                
            <tbody>
        </table>


  </div>
    `,
  styles: [` 

  `]
})

export class RelationshipsPanelComponent {
  @Input() entities: Array<string>;
  @Input() relationships : Array<any>;
  parentEntity: any;
  childEntity: any;

  addRelationship(){
    console.log("ADD");
    this.relationships.push([this.childEntity, this.parentEntity]);
  }

  removeRelationship(ix: number){
    this.relationships.splice(ix,1);
  }

  
}
