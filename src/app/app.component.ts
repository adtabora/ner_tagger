import { Component } from '@angular/core';
import { ArticlesService } from './services/articles.service';

@Component({
  selector: 'my-app',
  providers: [ArticlesService],
  template: `
  <md-sidenav-container style="height:100vh;">
    <md-sidenav #sidenav mode="side" opened="true">
      <left-panel
        [todo]="todo"
        [done]="done"
        (setArticle)="getArticle($event)"
      ></left-panel>
    </md-sidenav>

    <md-sidenav #sidenav mode="side" opened="true" align="end">
      <right-panel
        (setTag)="setTag($event)"
      ></right-panel>
    </md-sidenav>

    <div class="workspace">
      <workspace
        [tag]= "tag" 
        [color]= "color" 
        [article]= "article" 
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

  todo : any[]
  done: any[]
  article: any

  ngOnInit(): void{
    this.getArticleList()
    this.getArticle(this.todo[0].id)
  }

  setTag(obj:any):void{
    this.tag = obj.tag;
    this.color = obj.color;
  }

  getArticleList():void{
    this.todo = this.articleService.getToDoArticles();
    this.done = this.articleService.getDoneArticles();
  }

  getArticle(id:number):void{
    console.log("SET ARTICLE")
    this.article = this.articleService.getArticle(id);
  }

  constructor(private articleService: ArticlesService) { }
  
}
