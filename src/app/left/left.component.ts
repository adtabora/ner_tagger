import { Component, Input, Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'left-panel',
  template: `
  
    
      <md-list dense *ngIf="todo">
        <h3 md-subheader>To Do Articles</h3>
        <md-list-item *ngFor="let article of todo"
          (click)="selectArticle(article)"
        >
            <md-icon md-list-icon>folder</md-icon>
           
            <p md-line class="demo-2"> {{article.title}} </p>
        </md-list-item>

        <md-divider></md-divider>

        <h3 md-subheader>Done Articles</h3>
        <md-list-item *ngFor="let article of done"
          (click)="selectArticle(article)"
        >
            <md-icon md-list-icon>note</md-icon>
            <p md-line class="demo-2"> {{article.title}} </p>
        </md-list-item>
      </md-list>
    
  
    
    `
})

export class LeftPanelComponent {
  @Input() todo : any[]
  @Input() done : any[]
  @Output() setArticle = new EventEmitter<Number>();

  selectArticle(article:any):void{
    console.log("SELEC ARTICLE")
    this.setArticle.emit(article.id)
  }

  
}
