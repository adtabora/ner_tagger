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
var word_class_1 = require("./word.class");
var WordComponent = (function () {
    function WordComponent() {
        this.tagged = false;
    }
    WordComponent.prototype.ngOnInit = function () {
        var colors = {
            Loc: "warn",
            Per: "accent",
            Org: "primary",
            Misc: "none",
        };
        if (this.word.tag == "none") {
            this.tagged = false;
        }
        else {
            this.tagged = true;
            this.color = colors[this.word.tag];
        }
    };
    return WordComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", word_class_1.tagged_word)
], WordComponent.prototype, "word", void 0);
WordComponent = __decorate([
    core_1.Component({
        selector: 'word-tag',
        template: "\n    <div class=\"text-word\" *ngIf=\"!tagged\">\n        {{word.word}}&nbsp;\n    </div>\n    <md-chip selected=\"true\" *ngIf=\"tagged\" [color]=\"color\">\n        {{word.word}}\n    </md-chip>\n    ",
        styles: ["\n    .text-word:hover {\n        background-color: lightblue;\n    }\n    "]
    })
], WordComponent);
exports.WordComponent = WordComponent;
//# sourceMappingURL=word.component.js.map