import { Injectable } from '@nestjs/common';
import { getQueryBoletas, setUpdateBoleta } from './transaction.oracle';
import { Boleta } from './model/boleta.model';

@Injectable()
export class TransactionService {

    async getBoletas(): Promise<Boleta[]>  {
        return await getQueryBoletas();
    }
    async updateBoleta(idBoleta: any, folio: any, url: any) {
        return await setUpdateBoleta(idBoleta)
    }
    
}
