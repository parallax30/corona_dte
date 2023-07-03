import { Boleta } from '../transaction/model/boleta.model';
export declare class TecnobackApi {
    httpService: any;
    boletas: Boleta[];
    test(): Promise<void>;
    getSeassionId(): Promise<any>;
    emitir(): Promise<void>;
}
