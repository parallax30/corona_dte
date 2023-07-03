import { TecnobackApi } from '../tecnoback/api.service';
export declare class CronService {
    private readonly tecnobackApi;
    constructor(tecnobackApi: TecnobackApi);
    emitirBoletas(): Promise<void>;
}
