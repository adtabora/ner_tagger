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
var RightPanelComponent = (function () {
    function RightPanelComponent() {
        this.title = 'right';
        this.setTag = new core_1.EventEmitter();
    }
    RightPanelComponent.prototype.selectLoc = function () {
        this.setTag.emit({
            tag: "Loc",
            color: "warn"
        });
    };
    RightPanelComponent.prototype.selectPer = function () {
        this.setTag.emit({
            tag: "Per",
            color: "accent"
        });
    };
    RightPanelComponent.prototype.selectOrg = function () {
        this.setTag.emit({
            tag: "Org",
            color: "primary"
        });
    };
    RightPanelComponent.prototype.selectMisc = function () {
        this.setTag.emit({
            tag: "Misc",
            color: "none"
        });
    };
    return RightPanelComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RightPanelComponent.prototype, "setTag", void 0);
RightPanelComponent = __decorate([
    core_1.Component({
        selector: 'right-panel',
        template: "\n  <div style=\"margin:10px\">\n    <md-chip-list class=\"mat-chip-list-stacked\">\n      <md-chip color=\"warn\" selected=\"true\" (click)=\"selectLoc()\" >\n        Loc\n      </md-chip>\n      <md-chip color=\"accent\" selected=\"true\" (click)=\"selectPer()\" >\n        Per\n      </md-chip>\n      <md-chip color=\"primary\" selected=\"true\" (click)=\"selectOrg()\" >\n        Org\n      </md-chip>\n      <md-chip color=\"none\" selected=\"true\" (click)=\"selectMisc()\" >\n        Misc\n      </md-chip>\n    </md-chip-list>\n  </div>\n    \n    "
    })
], RightPanelComponent);
exports.RightPanelComponent = RightPanelComponent;
//# sourceMappingURL=right.component.js.map