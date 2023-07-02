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
        const { data } = await axios_1.default.post(process.env.base_url_tecnoback + '/get-session-id', {
            'usuario': process.env.usuario_api_tecnoback,
            'clave': process.env.clave_api_tecnoback
        }, {
            headers: {
                'x-api-key': process.env.apikey_tecnoback,
            }
        });
        global_service_1.GlobalService.sessionId = data.session_id;
        return global_service_1.GlobalService.sessionId;
    }
    async emitir() {
        config_1.ConfigModule.forRoot();
        if (null == global_service_1.GlobalService.sessionId) {
            this.getSeassionId();
        }
        const requestConfig = {
            headers: {
                'x-api-key': process.env.apikey,
            }
        };
        console.log(global_service_1.GlobalService.sessionId);
        console.log(process.env.rut_emisor_tecnoback);
        const { data } = await axios_1.default.post(process.env.base_url_tecnoback + '/emitir', {
            "session_id": global_service_1.GlobalService.sessionId,
            "RUTEmisor": process.env.rut_emisor_tecnoback,
            "RznSocRecep": "",
            "TipoDTE": "39",
            "FchEmis": "2023-01-17",
            "RUTRecep": "66666666-6",
            "IndServicio": "3",
            "jsonDetalle": [
                {
                    "NroLinDet": "1",
                    "VlrCodigo": "1",
                    "TpoCodigo": "1",
                    "NmbItem": "Manzanas",
                    "QtyItem": "1.0",
                    "UnmdItem": "UNI",
                    "PrcItem": "1000",
                    "DescuentoPct": "",
                    "DescuentoMonto": "",
                    "MontoItem": "1000",
                    "DscItem": "Verdes",
                    "CodItem": "",
                    "RUTmandante": ""
                },
                {
                    "NroLinDet": "1",
                    "VlrCodigo": "1",
                    "TpoCodigo": "1",
                    "NmbItem": "Peras",
                    "QtyItem": "2",
                    "UnmdItem": "UNI",
                    "PrcItem": "1000",
                    "DescuentoPct": "",
                    "DescuentoMonto": "",
                    "MontoItem": "2000",
                    "DscItem": "Verdes",
                    "CodItem": "",
                    "RUTmandante": ""
                }
            ],
            "MntExe": "0",
            "IVA": "479",
            "MntNeto": "2521",
            "MntTotal": "3000",
            "mail_mandato": "contacto@tecnoback.cl"
        }, {
            headers: {
                'x-api-key': process.env.apikey_tecnoback,
            }
        });
        console.log(data);
    }
};
exports.TecnobackApi = TecnobackApi = __decorate([
    (0, common_1.Injectable)()
], TecnobackApi);
//# sourceMappingURL=api.service.js.map