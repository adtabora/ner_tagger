"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/http");
// material
var material_1 = require("@angular/material");
var material_2 = require("@angular/material");
var material_3 = require("@angular/material");
var material_4 = require("@angular/material");
var app_component_1 = require("./app.component");
var left_component_1 = require("./left/left.component");
var right_component_1 = require("./right/right.component");
var workspace_component_1 = require("./workspace/workspace.component");
var word_component_1 = require("./workspace/word.component");
var material_5 = require("@angular/material");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            animations_1.BrowserAnimationsModule,
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            //material
            material_1.MdButtonModule,
            material_1.MdListModule,
            material_2.MdIconModule, material_3.MdSidenavModule,
            material_5.MdChipsModule, material_4.MdToolbarModule
        ],
        declarations: [
            app_component_1.AppComponent, left_component_1.LeftPanelComponent, right_component_1.RightPanelComponent, workspace_component_1.WorkspaceComponent, word_component_1.WordComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map