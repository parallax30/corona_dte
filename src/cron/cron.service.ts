import { Injectable } from '@nestjs/common';
import { Cron, CronExpression, Timeout } from '@nestjs/schedule';
import { TecnobackApi } from '../tecnoback/api.service';



@Injectable()
export class CronService {

  constructor(
    private readonly tecnobackApi: TecnobackApi, emitirBoletasPendientes: TecnobackApi
  ) {}

  ;

  @Cron('*/30 * * * * *')
  async emitirNC() {
    console.log('Emitir NC');

    const fechaDesde = new Date()
    const fechaHasta = new Date()

    fechaDesde.setDate(fechaDesde.getDate() - 1);

   const result = await this.tecnobackApi.emitirNC(formatDate(fechaDesde), formatDate(fechaHasta));
   //console.log(result);
  }

  
  @Cron('*/10 * * * * *')
  async emitirBoletas() {
    console.log('Comienza el proceso de boletas');

  const result = await this.tecnobackApi.emitir();
   //console.log(result);
  }

 
  @Cron(CronExpression.EVERY_DAY_AT_2AM)  
  async emitirServiciosBoletasCargos() {
    console.log('Comienza el proceso SP');

    const fechaDesde = new Date()
    const fechaHasta = new Date()

    fechaDesde.setDate(fechaDesde.getDate() - 1);

    const result = await this.tecnobackApi.emitirBoletasPendientes(formatDate(fechaDesde), formatDate(fechaHasta));
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

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join();
}