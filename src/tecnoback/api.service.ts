import { Injectable } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable, lastValueFrom, map } from 'rxjs';
import { GlobalService } from '../global.service';
import { Boleta } from '../transaction/model/boleta.model';
import { BoletaSP } from '../transaction/model/boletaSP.model';
import { getQueryBoletas, setUpdateBoleta, setInsertBoletaDoc, getBoletasPendientes, setUpdateBoletaSP, setInsertBoletaDocSP} from '../transaction/transaction.oracle';


@Injectable()
export class TecnobackApi {
  httpService: any; 
  boletas: Boleta[];
  boletasSP: BoletaSP[];

  async test(){

    ConfigModule.forRoot();

    const {data} = await axios.post(process.env.base_url_tecnoback + '/get-session-id', {
      'usuario': process.env.usuario_api_tecnoback,
      'clave': process.env.clave_api_tecnoback
      }, {
        headers: {
          'x-api-key': 'PQJYdmL3tk3HpUd30EfbEUcd7USHXWLbdk3okd30'
        }
    });
    console.log(data);
    
  }
  async getSeassionId() {
    ConfigModule.forRoot();

    console.log('go for a new sessionId.')

    const {data} = await axios.post(process.env.base_url_tecnoback + '/get-session-id', {
      'usuario': process.env.usuario_api_tecnoback,
      'clave': process.env.clave_api_tecnoback
      }, {
        headers: {
          'x-api-key': process.env.apikey_tecnoback,
        }
    });

    GlobalService.sessionId = (data as any).session_id;
    console.log('new sessionId ' + GlobalService.sessionId)
    return GlobalService.sessionId;
  }

  async emitir() {
    
    console.log(GlobalService.sessionId)
    ConfigModule.forRoot();

    //valido si existe session if
    if(undefined == GlobalService.sessionId){
        console.log('no session id')
        this.getSeassionId();
    }
    else{
      console.log('sessionId ' + GlobalService.sessionId)
      const requestConfig: AxiosRequestConfig = {
        headers: {
          'x-api-key': process.env.apikey,
        }
      };

      console.log('go to get boletas')
      //console.log(GlobalService.sessionId)
      //console.log(process.env.rut_emisor_tecnoback)

      //objtengo array de objetos 
      this.boletas = await getQueryBoletas();

      this.boletas.forEach(async function(b){

        console.log(b);


          const {data} = await axios.post(process.env.base_url_tecnoback + '/emitir', {
            "session_id":GlobalService.sessionId,
            "RUTEmisor": process.env.rut_emisor_tecnoback,
            "RznSocRecep":"",
            "TipoDTE": "39", // CODGO DE BOLETA ELECTRONICA
            "FchEmis": b.FECHA_TRANSACCION,  //"2023-01-17" OJO CON EL FORMATO,
            "RUTRecep": "66666666-6", //NO ENCONTRADO VALOR POR DEFECTO. NO ESTÁ EN TABLA
            "IndServicio":"2", //FACTURA DE OTROS SERVICIOS PERIÓDICOS
            "jsonDetalle": [
                {
                    "NroLinDet": "1",
                    "VlrCodigo": "1",
                    "TpoCodigo": "1",
                    "NmbItem": b.GLOSA_BOLETA,
                    "QtyItem": "1.0",
                    "UnmdItem": "UNI",
                    "PrcItem": b.MONTO_IVA,
                    "DescuentoPct": "",
                    "DescuentoMonto": "",
                    "MontoItem": b.MONTO_IVA,
                    "DscItem": "Verdes",
                    "CodItem": "",
                    "RUTmandante": ""
                }
              ],
            "MntExe": "0",
            "IVA": b.IVA,
            "MntNeto": b.MONTO_CARGO,
            "MntTotal": b.MONTO_IVA,
            "mail_mandato":b.EMAIL
          }, {
              headers: {
                'x-api-key': process.env.apikey_tecnoback,
              }
          });

          setUpdateBoleta(b.ID_BOLETAS_CARGOS);
          setInsertBoletaDoc(b.ID_BOLETAS_CARGOS, data.Folio, data.url_pdf)

        }
        

      )

     


      

      console.log();
    }
  }

  async emitirBoletasPendientes(fechaDesde, fechaHasta) {
    
    console.log(GlobalService.sessionId)
    ConfigModule.forRoot();

    //valido si existe session if
    if(undefined == GlobalService.sessionId){
        console.log('no session id')
        this.getSeassionId();
    }
    else{
      console.log('sessionId ' + GlobalService.sessionId)
      const requestConfig: AxiosRequestConfig = {
        headers: {
          'x-api-key': process.env.apikey,
        }
      };

      console.log('go to get boletas')
      //console.log(GlobalService.sessionId)
      //console.log(process.env.rut_emisor_tecnoback)

      //objtengo array de objetos 
      this.boletasSP = await getBoletasPendientes(fechaDesde, fechaHasta);  //TODO: PENDIENTE CREAR MODELO Y ARMAR JSON DE ENTRADA

      this.boletasSP.forEach(async function(b){

        console.log(b);


          const {data} = await axios.post(process.env.base_url_tecnoback + '/emitir', {
            "session_id":GlobalService.sessionId,
            "RUTEmisor": process.env.rut_emisor_tecnoback,
            "RznSocRecep":"",
            "TipoDTE": "39", // CODGO DE BOLETA ELECTRONICA
            "FchEmis": "",  //SP CurCargosNoBoleteadosFechas NO TIENE FECHA EN EL SELECT DEL CURSOR
            "RUTRecep": "66666666-6", //NO ENCONTRADO VALOR POR DEFECTO. NO ESTÁ EN TABLA
            "IndServicio":"1",
            "jsonDetalle": [
                {
                    "NroLinDet": "1",
                    "VlrCodigo": "1",
                    "TpoCodigo": "1",
                    "NmbItem": b.glosa_boleta,
                    "QtyItem": "1.0",
                    "UnmdItem": "UNI",
                    "PrcItem": b.monto_cargo,
                    "DescuentoPct": "",
                    "DescuentoMonto": "",
                    "MontoItem": b.monto_iva,
                    "DscItem": b.glosa_boleta,
                    "CodItem": "",
                    "RUTmandante": b.rut + '-' + b.dv
                }
              ],
            "MntExe": "0",
            "IVA": b.monto_iva,
            "MntNeto": b.monto_cargo,
            "MntTotal": Number(b.monto_iva) + Number(b.monto_cargo),
            "mail_mandato":b.email
          }, {
              headers: {
                'x-api-key': process.env.apikey_tecnoback,
              }
          });

          setUpdateBoletaSP(b.id_boletas_cargos);
          setInsertBoletaDocSP(data.url_pdf, data.url_xml, data.Folio)

        }
        

      )

     


      

      console.log();
    }
  }


}


