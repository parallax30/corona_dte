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
exports.CronService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const api_service_1 = require("../tecnoback/api.service");
let CronService = exports.CronService = class CronService {
    constructor(tecnobackApi, emitirBoletasPendientes) {
        this.tecnobackApi = tecnobackApi;
    }
    ;
    async emitirNC() {
        console.log('Emitir NC');
        const fechaDesde = new Date();
        const fechaHasta = new Date();
        fechaDesde.setDate(fechaDesde.getDate() - 1);
        const result = await this.tecnobackApi.emitirNC(formatDate(fechaDesde), formatDate(fechaHasta));
    }
    async emitirServiciosVolletasCargos() {
        console.log('Comienza el proceso SP');
        const fechaDesde = new Date();
        const fechaHasta = new Date();
        fechaDesde.setDate(fechaDesde.getDate() - 1);
        const result = await this.tecnobackApi.emitirBoletasPendientes(formatDate(fechaDesde), formatDate(fechaHasta));
    }
};
__decorate([
    (0, schedule_1.Cron)('*/10 * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CronService.prototype, "emitirNC", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_2AM),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CronService.prototype, "emitirServiciosVolletasCargos", null);
exports.CronService = CronService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [api_service_1.TecnobackApi, api_service_1.TecnobackApi])
], CronService);
function formatDate(date) {
    var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join();
}
//# sourceMappingURL=cron.service.js.map