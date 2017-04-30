import { Component } from '@angular/core';



@Component({
  selector: 'left-panel',
  template: `
  
    
      <md-list dense>
        <h3 md-subheader>To Do Articles</h3>
        <md-list-item *ngFor="let article of todo_articles">
            <md-icon md-list-icon>folder</md-icon>
           
            <p md-line class="demo-2"> {{article}} </p>
        </md-list-item>

        <md-divider></md-divider>

        <h3 md-subheader>Done Articles</h3>
        <md-list-item *ngFor="let article of done_articles">
            <md-icon md-list-icon>note</md-icon>
            <p md-line class="demo-2"> {{article}} </p>
        </md-list-item>
      </md-list>
    
  
    
    `
})

export class LeftPanelComponent {
  todo_articles = ["A4","A5","A6","A7"]
  done_articles = ["A1","A2","A3","A1","A2","A3"]
  
}
