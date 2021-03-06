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
var core_1 = require("@angular/core");
var google_charts_loader_service_1 = require("../google-charts-loader.service");
var GoogleChartComponent = (function () {
    function GoogleChartComponent(el, loaderService) {
        this.el = el;
        this.loaderService = loaderService;
    }
    GoogleChartComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var key = 'data';
        if (changes[key]) {
            if (this.data === null) {
                return;
            }
            this.loaderService.load(this.data.chartType).then(function () {
                if (_this.wrapper === undefined) {
                    _this.wrapper = new google.visualization.ChartWrapper(_this.data);
                }
                else {
                    _this.wrapper.setDataTable(_this.data.dataTable);
                    _this.wrapper.setOptions(_this.data.options);
                }
                _this.wrapper.draw(_this.el.nativeElement.querySelector('div'));
            });
        }
    };
    return GoogleChartComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], GoogleChartComponent.prototype, "data", void 0);
GoogleChartComponent = __decorate([
    core_1.Component({
        selector: 'google-chart',
        template: '<div></div>',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        google_charts_loader_service_1.GoogleChartsLoaderService])
], GoogleChartComponent);
exports.GoogleChartComponent = GoogleChartComponent;
