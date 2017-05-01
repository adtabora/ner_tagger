"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var articles_service_1 = require("./services/articles.service");
var AppComponent = (function () {
    function AppComponent(articleService) {
        this.articleService = articleService;
        this.title = 'main';
        this.tag = "Per";
        this.color = "warn";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getArticleList();
        this.getArticle(this.todo[0].id);
    };
    AppComponent.prototype.setTag = function (obj) {
        this.tag = obj.tag;
        this.color = obj.color;
    };
    AppComponent.prototype.getArticleList = function () {
        this.todo = this.articleService.getToDoArticles();
        this.done = this.articleService.getDoneArticles();
    };
    AppComponent.prototype.getArticle = function (id) {
        console.log("SET ARTICLE");
        this.article = this.articleService.getArticle(id);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        providers: [articles_service_1.ArticlesService],
        template: "\n  <md-sidenav-container style=\"height:100vh;\">\n    <md-sidenav #sidenav mode=\"side\" opened=\"true\">\n      <left-panel\n        [todo]=\"todo\"\n        [done]=\"done\"\n        (setArticle)=\"getArticle($event)\"\n      ></left-panel>\n    </md-sidenav>\n\n    <md-sidenav #sidenav mode=\"side\" opened=\"true\" align=\"end\">\n      <right-panel\n        (setTag)=\"setTag($event)\"\n      ></right-panel>\n    </md-sidenav>\n\n    <div class=\"workspace\">\n      <workspace\n        [tag]= \"tag\" \n        [color]= \"color\" \n        [article]= \"article\" \n      ></workspace>\n    </div>\n\n  </md-sidenav-container>\n    ",
        styles: ["\n    .container {\n      display: flex; \n    }\n\n\n    .right {\n      background:lightcyan;\n      min-width: 140px;\n      max-width: 200px;\n      padding: 1em;\n    }\n\n    .workspace {\n      background:lightyellow;\n      padding: 1em;\n      width: 100%;\n    }\n\n  "]
    }),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map