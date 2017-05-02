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

    <div class="workspace" *ngIf="article">
      <md-toolbar>
        <button md-raised-button color="primary" (click)="saveArticle()">
          Save
        </button>
      </md-toolbar>
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
  }

  setTag(obj:any):void{
    this.tag = obj.tag;
    this.color = obj.color;
  }

  getArticleList():void{
    var self = this;
    this.articleService.listArticles().then(function(lists){
      console.log("----")
      console.log(lists)
      self.todo = lists.todo; 
      self.done = lists.done; 
      self.getArticle(self.todo[0].id)
    });
  }

  getArticle(id:number):void{
    var self = this;
    this.articleService.getArticle(id).then(function(article:any){
      console.log("----")
      console.log(article)
      self.article = article

    });
  }

    saveArticle():void{
    var self = this;

    this.articleService.saveArticle(this.article.id,this.article.sentences)
    .then(function(response:any){
      console.log("----")
      console.log(response)
      this.getArticleList()
    });
  }

  constructor(private articleService: ArticlesService) { }
  
}
