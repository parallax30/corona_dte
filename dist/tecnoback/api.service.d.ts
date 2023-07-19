import { Boleta } from '../transaction/model/boleta.model';
import { BoletaSP } from '../transaction/model/boletaSP.model';
import { NotaDeCredito } from 'src/transaction/model/notaCredito.model';
export declare class TecnobackApi {
    httpService: any;
    boletas: Boleta[];
    boletasSP: BoletaSP[];
    notasDeCredito: NotaDeCredito[];
    test(): Promise<void>;
    getSeassionId(): Promise<any>;
    emitir(): Promise<void>;
    emitirBoletasPendientes(fechaDesde: any, fechaHasta: any): Promise<void>;
    emitirNC(fechaDesde: any, fechaHasta: any): Promise<void>;
}
