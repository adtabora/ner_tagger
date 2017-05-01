"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ArticlesService = (function () {
    function ArticlesService() {
    }
    ArticlesService.prototype.getToDoArticles = function () {
        var articles = [
            { id: 89, title: "Article 89" },
            { id: 90, title: "Article 90" },
            { id: 91, title: "Article 91" },
            { id: 92, title: "Article 92" },
            { id: 93, title: "Article 93" }
        ];
        return articles;
    };
    ArticlesService.prototype.getDoneArticles = function () {
        var articles = [
            { id: 71, title: "Article 79" },
            { id: 80, title: "Article 80" },
            { id: 81, title: "Article 81" },
            { id: 82, title: "Article 82" },
            { id: 83, title: "Article 83" }
        ];
        return articles;
    };
    ArticlesService.prototype.getArticle = function (id) {
        var articles = [{
                id: 89, title: "Article 89",
                sentences: [
                    [{ word: "El", tag: "none" }, { word: "capitan", tag: "none" }, { word: "Jorge", tag: "none" }, { word: "Lagos", tag: "none" }],
                    [{ word: "Segun", tag: "none" }, { word: "fuentes", tag: "none" }, { word: "la", tag: "none" }, { word: "direccion", tag: "none" }],
                    [{ word: "Cuando", tag: "none" }, { word: "el", tag: "none" }, { word: "conductor", tag: "none" }, { word: "fue", tag: "none" }],
                ]
            }, {
                id: 90, title: "Article 90",
                sentences: [
                    [{ word: "Hoy", tag: "none" }, { word: "a", tag: "none" }, { word: "las", tag: "none" }, { word: "10:30", tag: "none" }],
                    [{ word: "Observadores", tag: "none" }, { word: "pudieron", tag: "none" }, { word: "identificar", tag: "none" }, { word: "una", tag: "none" }],
                    [{ word: "Cerca", tag: "none" }, { word: "de", tag: "none" }, { word: "la", tag: "none" }, { word: "Canada", tag: "none" }],
                ]
            }, {
                id: 71, title: "Article 71",
                sentences: [
                    [{ word: "Miles", tag: "none" }, { word: "de", tag: "none" }, { word: "hondurenos", tag: "none" }, { word: "tendran", tag: "none" }],
                    [{ word: "Segun", tag: "none" }, { word: "fuentes", tag: "none" }, { word: "la", tag: "none" }, { word: "direccion", tag: "none" }],
                    [{ word: "La", tag: "none" }, { word: "Institucion", tag: "none" }, { word: "del", tag: "none" }, { word: "Trabajador", tag: "none" }],
                ]
            }, {
                id: 80, title: "Article 80",
                sentences: [
                    [{ word: "Los", tag: "none" }, { word: "migrantes", tag: "none" }, { word: "tendran", tag: "none" }, { word: "que", tag: "none" }],
                    [{ word: "Segun", tag: "none" }, { word: "fuentes", tag: "none" }, { word: "la", tag: "none" }, { word: "direccion", tag: "none" }],
                    [{ word: "Cuando", tag: "none" }, { word: "el", tag: "none" }, { word: "conductor", tag: "none" }, { word: "fue", tag: "none" }],
                ]
            }
        ];
        var art = articles.find(function (x) { return x.id === id; });
        return art;
    };
    return ArticlesService;
}());
ArticlesService = __decorate([
    core_1.Injectable()
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map