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
exports.NotaDeCreditoItem = void 0;
const graphql_1 = require("@nestjs/graphql");
let NotaDeCreditoItem = exports.NotaDeCreditoItem = class NotaDeCreditoItem {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCreditoItem.prototype, "NroLinDet", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCreditoItem.prototype, "VlrCodigo", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCreditoItem.prototype, "TpoCodigo", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCreditoItem.prototype, "NmbItem", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCreditoItem.prototype, "QtyItem", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCreditoItem.prototype, "UnmdItem", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCreditoItem.prototype, "PrcItem", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCreditoItem.prototype, "DescuentoPct", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCreditoItem.prototype, "DescuentoMonto", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCreditoItem.prototype, "MontoItem", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCreditoItem.prototype, "DscItem", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCreditoItem.prototype, "CodItem", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], NotaDeCreditoItem.prototype, "RUTmandante", void 0);
exports.NotaDeCreditoItem = NotaDeCreditoItem = __decorate([
    (0, graphql_1.ObjectType)({ description: 'Boleta from SERVICIOS_BOLETAS_CARGOS' })
], NotaDeCreditoItem);
//# sourceMappingURL=notaCreditoItem.model.js.map