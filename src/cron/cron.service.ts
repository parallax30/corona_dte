import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';
import { TecnobackApi } from '../tecnoback/api.service';



@Injectable()
export class CronService {

  constructor(
    private readonly tecnobackApi: TecnobackApi,
  ) {}

  ;


  @Cron('*/10 * * * * *')
  async emitirBoletas() {
    console.log('Comienza el proceso');

   const result = await this.tecnobackApi.emitir();
   //console.log(result);
  }

  /*@Cron(CronExpression.EVERY_MINUTE)
  runEveryMinute() {
    console.log
    ('Every minute');
  }

  @Timeout(5000)
  async onceAfter5Seconds() {
    console.log('Obtiene Id de Sessión');
    const result = await this.tecnobackApi.getSeassionId();
    console.log(result);
  }*/
}