"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TecnobackApi = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("axios");
const global_service_1 = require("../global.service");
const transaction_oracle_1 = require("../transaction/transaction.oracle");
let TecnobackApi = exports.TecnobackApi = class TecnobackApi {
    async test() {
        config_1.ConfigModule.forRoot();
        const { data } = await axios_1.default.post(process.env.base_url_tecnoback + '/get-session-id', {
            'usuario': process.env.usuario_api_tecnoback,
            'clave': process.env.clave_api_tecnoback
        }, {
            headers: {
                'x-api-key': 'PQJYdmL3tk3HpUd30EfbEUcd7USHXWLbdk3okd30'
            }
        });
        console.log(data);
    }
    async getSeassionId() {
        config_1.ConfigModule.forRoot();
        console.log('go for a new sessionId.');
        const { data } = await axios_1.default.post(process.env.base_url_tecnoback + '/get-session-id', {
            'usuario': process.env.usuario_api_tecnoback,
            'clave': process.env.clave_api_tecnoback
        }, {
            headers: {
                'x-api-key': process.env.apikey_tecnoback,
            }
        });
        global_service_1.GlobalService.sessionId = data.session_id;
        console.log('new sessionId ' + global_service_1.GlobalService.sessionId);
        return global_service_1.GlobalService.sessionId;
    }
    async emitir() {
        console.log(1);
        console.log(global_service_1.GlobalService.sessionId);
        config_1.ConfigModule.forRoot();
        console.log(2);
        if (undefined == global_service_1.GlobalService.sessionId) {
            console.log('no session id');
            this.getSeassionId();
        }
        else {
            console.log('sessionId ' + global_service_1.GlobalService.sessionId);
            const requestConfig = {
                headers: {
                    'x-api-key': process.env.apikey,
                }
            };
            console.log('go to get boletas');
            this.boletas = await (0, transaction_oracle_1.getQueryBoletas)();
            this.boletas.forEach(async function (b) {
                console.log(b);
                const { data } = await axios_1.default.post(process.env.base_url_tecnoback + '/emitir', {
                    "session_id": global_service_1.GlobalService.sessionId,
                    "RUTEmisor": process.env.rut_emisor_tecnoback,
                    "RznSocRecep": "",
                    "TipoDTE": "39",
                    "FchEmis": b.FECHA_TRANSACCION,
                    "RUTRecep": "66666666-6",
                    "IndServicio": "2",
                    "jsonDetalle": [
                        {
                            "NroLinDet": "1",
                            "VlrCodigo": "1",
                            "TpoCodigo": "1",
                            "NmbItem": b.GLOSA_BOLETA,
                            "QtyItem": "1.0",
                            "UnmdItem": "UNI",
                            "PrcItem": b.MONTO_IVA,
                            "DescuentoPct": "",
                            "DescuentoMonto": "",
                            "MontoItem": b.MONTO_IVA,
                            "DscItem": "Verdes",
                            "CodItem": "",
                            "RUTmandante": ""
                        }
                    ],
                    "MntExe": "0",
                    "IVA": b.IVA,
                    "MntNeto": b.MONTO_CARGO,
                    "MntTotal": b.MONTO_IVA,
                    "mail_mandato": b.EMAIL
                }, {
                    headers: {
                        'x-api-key': process.env.apikey_tecnoback,
                    }
                });
                (0, transaction_oracle_1.setUpdateBoleta)(b.ID_BOLETAS_CARGOS);
            });
            console.log();
        }
    }
};
exports.TecnobackApi = TecnobackApi = __decorate([
    (0, common_1.Injectable)()
], TecnobackApi);
//# sourceMappingURL=api.service.js.map