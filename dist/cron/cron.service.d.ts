import { TecnobackApi } from '../tecnoback/api.service';
export declare class CronService {
    private readonly tecnobackApi;
    constructor(tecnobackApi: TecnobackApi, emitirBoletasPendientes: TecnobackApi);
    emitirNC(): Promise<void>;
    emitirServiciosVolletasCargos(): Promise<void>;
}
