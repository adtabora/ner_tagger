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
var LeftPanelComponent = (function () {
    function LeftPanelComponent() {
        this.setArticle = new core_1.EventEmitter();
    }
    LeftPanelComponent.prototype.selectArticle = function (article) {
        console.log("SELEC ARTICLE");
        this.setArticle.emit(article.id);
    };
    return LeftPanelComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], LeftPanelComponent.prototype, "todo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], LeftPanelComponent.prototype, "done", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LeftPanelComponent.prototype, "setArticle", void 0);
LeftPanelComponent = __decorate([
    core_1.Component({
        selector: 'left-panel',
        template: "\n  \n    \n      <md-list dense *ngIf=\"todo\">\n        <h3 md-subheader>To Do Articles</h3>\n        <md-list-item *ngFor=\"let article of todo\"\n          (click)=\"selectArticle(article)\"\n        >\n            <md-icon md-list-icon>folder</md-icon>\n           \n            <p md-line class=\"demo-2\"> {{article.title}} </p>\n        </md-list-item>\n\n        <md-divider></md-divider>\n\n        <h3 md-subheader>Done Articles</h3>\n        <md-list-item *ngFor=\"let article of done\"\n          (click)=\"selectArticle(article)\"\n        >\n            <md-icon md-list-icon>note</md-icon>\n            <p md-line class=\"demo-2\"> {{article.title}} </p>\n        </md-list-item>\n      </md-list>\n    \n  \n    \n    "
    })
], LeftPanelComponent);
exports.LeftPanelComponent = LeftPanelComponent;
//# sourceMappingURL=left.component.js.map