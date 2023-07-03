import { Boleta } from './model/boleta.model';
export declare class TransactionService {
    getBoletas(): Promise<Boleta[]>;
    updateBoleta(idBoleta: any, folio: any, url: any): Promise<any>;
}
