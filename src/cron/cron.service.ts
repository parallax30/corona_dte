import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';
import { Boleta } from 'src/transaction/model/boleta.model'; 
import { TransactionService } from 'src/transaction/transaction.service';
import { TecnobackApi } from 'src/tecnoback/api.service';



@Injectable()
export class CronService {

  constructor(private readonly transactionService: TransactionService, private readonly tecnobackApi: TecnobackApi) { }

  @Cron('*/10 * * * * *')
  async runEvery10Seconds() {
    console.log('Every 10 seconds');

   //const result = await this.transactionService.getBoletas()
   //const result = await this.tecnobackApi.getSeassionId();
   const result = await this.tecnobackApi.emitir();
   console.log(result);
  }

  @Cron(CronExpression.EVERY_MINUTE)
  runEveryMinute() {
    console.log
    ('Every minute');
  }

  @Timeout(5000)
  async onceAfter5Seconds() {
    console.log('Obtiene Id de Sessión');
    const result = await this.tecnobackApi.getSeassionId();
    console.log(result);
  }
}