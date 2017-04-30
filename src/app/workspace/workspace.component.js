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
        this.text = ["Un autobús ejecutivo se estrelló la mañana de este sábado en un portón de la iglesia Inmaculada Concepción , donde estaban reunidas varias personas con discapacidad .",
            "Según testigos , el conductor del bus 424, de la ruta Las Torres – Centro, venía peleando línea cuando perdió el control del vehículo .",
            "Posteriormente el autobús fue a impactar al portón de uno de los salones del templo, donde estaban congregados feligreses con capacidades especiales que se llevaron tremendo susto .",
            "No es la primera vez que los conductores de unidades protagonizan choques similares por la disputa de los pasajeros ."
        ];
        this.sentences = [];
    }
    WorkspaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.text.forEach(function (sentence) {
            var words = sentence.split(" ");
            var items = [];
            for (var i = 0; i < words.length; i++) {
                items.push({
                    word: words[i],
                    tag: "none"
                });
            }
            _this.sentences.push(items);
        });
    };
    WorkspaceComponent.prototype.tagWord = function (sent_id, word_id) {
        console.log("HELLO");
        console.log(sent_id + "-" + word_id);
        var word = this.sentences[sent_id][word_id];
        this.sentences[sent_id][word_id] = {
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
], WorkspaceComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorkspaceComponent.prototype, "tag", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WorkspaceComponent.prototype, "color", void 0);
WorkspaceComponent = __decorate([
    core_1.Component({
        selector: 'workspace',
        template: "\n    <h2>{{title}}</h2>\n    <div >\n      <div *ngFor=\"let sentence of sentences; let sent_i=index\" style=\"display:flex;flex-wrap:wrap\">\n        <word-tag *ngFor=\"let w of sentence; let word_i=index\"\n            [attr.id]=\"sent_i + '_' + word_i\"\n\n            [word]=\"w\" \n            (click) = \"tagWord(sent_i,word_i)\"\n        > \n        </word-tag>\n        <br/>\n        <br/>\n      </div>\n    </div>\n    ",
        styles: ["\n    .word:hover {\n        background-color: lightblue;\n    }\n    "]
    })
], WorkspaceComponent);
exports.WorkspaceComponent = WorkspaceComponent;
//# sourceMappingURL=workspace.component.js.map