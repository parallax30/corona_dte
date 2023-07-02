import { TransactionService } from 'src/transaction/transaction.service';
import { TecnobackApi } from 'src/tecnoback/api.service';
export declare class CronService {
    private readonly transactionService;
    private readonly tecnobackApi;
    constructor(transactionService: TransactionService, tecnobackApi: TecnobackApi);
    runEvery10Seconds(): Promise<void>;
    runEveryMinute(): void;
    onceAfter5Seconds(): Promise<void>;
}
