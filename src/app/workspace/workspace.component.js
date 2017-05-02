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
var WorkspaceComponent = (function () {
    function WorkspaceComponent() {
    }
    WorkspaceComponent.prototype.tagWord = function (sent_id, word_id) {
        console.log("TAG");
        console.log(sent_id + "-" + word_id);
        var word = this.article.sentences[sent_id][word_id];
        this.article.sentences[sent_id][word_id] = {
            word: word.word,
            tag: this.tag,
            color: this.color
        };
        console.log(word);
    };
    return WorkspaceComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorkspaceComponent.prototype, "tag", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorkspaceComponent.prototype, "color", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], WorkspaceComponent.prototype, "article", void 0);
WorkspaceComponent = __decorate([
    core_1.Component({
        selector: 'workspace',
        template: "\n    <h2>{{article.title}}</h2>\n    <div>\n      <div *ngFor=\"let sentence of article.sentences; let sent_i=index\" style=\"display:flex;flex-wrap:wrap\">\n        <word-tag *ngFor=\"let w of sentence; let word_i=index\"\n            [attr.id]=\"sent_i + '_' + word_i\"\n\n            [word]=\"w\" \n            (click) = \"tagWord(sent_i,word_i)\"\n        > \n        </word-tag>\n        <br/>\n        <br/>\n      </div>\n    </div>\n    ",
        styles: ["\n    .word:hover {\n        background-color: lightblue;\n    }\n    "]
    })
], WorkspaceComponent);
exports.WorkspaceComponent = WorkspaceComponent;
//# sourceMappingURL=workspace.component.js.map