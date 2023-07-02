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
const transaction_service_1 = require("../transaction/transaction.service");
const api_service_1 = require("../tecnoback/api.service");
let CronService = exports.CronService = class CronService {
    constructor(transactionService, tecnobackApi) {
        this.transactionService = transactionService;
        this.tecnobackApi = tecnobackApi;
    }
    async runEvery10Seconds() {
        console.log('Every 10 seconds');
        const result = await this.tecnobackApi.emitir();
        console.log(result);
    }
    runEveryMinute() {
        console.log('Every minute');
    }
    async onceAfter5Seconds() {
        console.log('Obtiene Id de Sessión');
        const result = await this.tecnobackApi.getSeassionId();
        console.log(result);
    }
};
__decorate([
    (0, schedule_1.Cron)('*/10 * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CronService.prototype, "runEvery10Seconds", null);
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_MINUTE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronService.prototype, "runEveryMinute", null);
__decorate([
    (0, schedule_1.Timeout)(5000),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CronService.prototype, "onceAfter5Seconds", null);
exports.CronService = CronService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService, api_service_1.TecnobackApi])
], CronService);
//# sourceMappingURL=cron.service.js.map