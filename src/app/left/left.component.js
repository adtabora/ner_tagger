"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var LeftPanelComponent = (function () {
    function LeftPanelComponent() {
        this.todo_articles = ["A4", "A5", "A6", "A7"];
        this.done_articles = ["A1", "A2", "A3", "A1", "A2", "A3"];
    }
    return LeftPanelComponent;
}());
LeftPanelComponent = __decorate([
    core_1.Component({
        selector: 'left-panel',
        template: "\n  \n    \n      <md-list dense>\n        <h3 md-subheader>To Do Articles</h3>\n        <md-list-item *ngFor=\"let article of todo_articles\">\n            <md-icon md-list-icon>folder</md-icon>\n           \n            <p md-line class=\"demo-2\"> {{article}} </p>\n        </md-list-item>\n\n        <md-divider></md-divider>\n\n        <h3 md-subheader>Done Articles</h3>\n        <md-list-item *ngFor=\"let article of done_articles\">\n            <md-icon md-list-icon>note</md-icon>\n            <p md-line class=\"demo-2\"> {{article}} </p>\n        </md-list-item>\n      </md-list>\n    \n  \n    \n    "
    })
], LeftPanelComponent);
exports.LeftPanelComponent = LeftPanelComponent;
//# sourceMappingURL=left.component.js.map