"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const transaction_oracle_1 = require("./transaction.oracle");
let TransactionService = exports.TransactionService = class TransactionService {
    async getBoletas() {
        return await (0, transaction_oracle_1.getQueryBoletas)();
    }
    async updateBoleta(idBoleta, folio, url) {
        return await (0, transaction_oracle_1.setUpdateBoleta)(idBoleta);
    }
};
exports.TransactionService = TransactionService = __decorate([
    (0, common_1.Injectable)()
], TransactionService);
//# sourceMappingURL=transaction.service.js.map