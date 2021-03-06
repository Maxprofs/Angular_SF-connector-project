"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var google_chart_component_1 = require("./google-chart/google-chart.component");
var google_charts_loader_service_1 = require("./google-charts-loader.service");
var Ng2GoogleChartsModule = (function () {
    function Ng2GoogleChartsModule() {
    }
    return Ng2GoogleChartsModule;
}());
Ng2GoogleChartsModule = __decorate([
    core_1.NgModule({
        declarations: [
            google_chart_component_1.GoogleChartComponent
        ],
        providers: [
            google_charts_loader_service_1.GoogleChartsLoaderService
        ],
        exports: [
            google_chart_component_1.GoogleChartComponent
        ]
    })
], Ng2GoogleChartsModule);
exports.Ng2GoogleChartsModule = Ng2GoogleChartsModule;
