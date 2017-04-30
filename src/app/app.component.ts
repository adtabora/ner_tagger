import { Component } from '@angular/core';



@Component({
  selector: 'my-app',
  template: `
  <md-sidenav-container style="height:100vh;">
    <md-sidenav #sidenav mode="side" opened="true">
      <left-panel></left-panel>
    </md-sidenav>

    <md-sidenav #sidenav mode="side" opened="true" align="end">
      <right-panel
        (setTag)="setTag($event)"
      ></right-panel>
    </md-sidenav>

    <div class="workspace">
      <workspace
        title= "Article 1" 
        [tag]= "tag" 
        [color]= "color" 
      ></workspace>
    </div>

  </md-sidenav-container>
    `,
  styles:[`
    .container {
      display: flex; 
    }


    .right {
      background:lightcyan;
      min-width: 140px;
      max-width: 200px;
      padding: 1em;
    }

    .workspace {
      background:lightyellow;
      padding: 1em;
      width: 100%;
    }

  `]

})

export class AppComponent {
  title = 'main';
  tag = "Per";
  color = "warn";

  

  setTag(obj:any):void{
    this.tag = obj.tag;
    this.color = obj.color;
  }
  
}
