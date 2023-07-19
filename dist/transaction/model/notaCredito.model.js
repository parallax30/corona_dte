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
exports.NotaDeCredito = void 0;
const graphql_1 = require("@nestjs/graphql");
const notaCreditoItem_model_1 = require("./notaCreditoItem.model");
const notaCreditoReferencia_model_1 = require("./notaCreditoReferencia.model");
let NotaDeCredito = exports.NotaDeCredito = class NotaDeCredito {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCredito.prototype, "Acteco", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCredito.prototype, "FchEmis", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCredito.prototype, "RUTRecep", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCredito.prototype, "RznSocRecep", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCredito.prototype, "GiroRecep", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCredito.prototype, "DirRecep", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCredito.prototype, "CmnaRecep", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCredito.prototype, "CiudadRecep", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCredito.prototype, "boletaTiposerv", void 0);
__decorate([
    (0, graphql_1.Field)(() => [notaCreditoItem_model_1.NotaDeCreditoItem]),
    __metadata("design:type", Array)
], NotaDeCredito.prototype, "jsonDetalle", void 0);
__decorate([
    (0, graphql_1.Field)(() => [notaCreditoReferencia_model_1.NotaDeCreditoReferencia]),
    __metadata("design:type", Array)
], NotaDeCredito.prototype, "jsonReferencias", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCredito.prototype, "MntExe", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCredito.prototype, "IVA", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCredito.prototype, "MntNeto", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCredito.prototype, "MntTotal", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCredito.prototype, "mail_mandato", void 0);
exports.NotaDeCredito = NotaDeCredito = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Boleta from SERVICIOS_BOLETAS_CARGOS' })
], NotaDeCredito);
//# sourceMappingURL=notaCredito.model.js.map