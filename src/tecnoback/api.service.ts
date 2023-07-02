import { Injectable } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Observable, lastValueFrom, map } from 'rxjs';
import { GlobalService } from 'src/global.service';
import { Boleta } from 'src/transaction/model/boleta.model';
import { getQueryBoletas, setUpdateBoleta, setInsertBoletaDoc} from 'src/transaction/transaction.oracle';


@Injectable()
export class TecnobackApi {
  httpService: any;
  boletas: Boleta[];

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

    const {data} = await axios.post(process.env.base_url_tecnoback + '/get-session-id', {
      'usuario': process.env.usuario_api_tecnoback,
      'clave': process.env.clave_api_tecnoback
      }, {
        headers: {
          'x-api-key': process.env.apikey_tecnoback,
        }
    });

    GlobalService.sessionId = (data as any).session_id;
    return GlobalService.sessionId;
  }

  async emitir() {

    ConfigModule.forRoot();
    //valido si existe session if
    if(null == GlobalService.sessionId){
        this.getSeassionId();
    }
    else{
      const requestConfig: AxiosRequestConfig = {
        headers: {
          'x-api-key': process.env.apikey,
        }
      };

      console.log(GlobalService.sessionId)
      console.log(process.env.rut_emisor_tecnoback)

      //objtengo array de objetos 
      this.boletas = await getQueryBoletas();

      this.boletas.forEach(async function(b){
          const {data} = await axios.post(process.env.base_url_tecnoback + '/emitir', {
            "session_id":GlobalService.sessionId,
            "RUTEmisor": process.env.rut_emisor_tecnoback,
            "RznSocRecep":"",
            "TipoDTE": "39", //no encontrado
            "FchEmis": b.FECHA_TRANSACCION,  //"2023-01-17",
            "RUTRecep": "66666666-6", //NO ENCONTRADO
            "IndServicio":"3", //VALIDAR
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
          setInsertBoletaDoc(b.ID_BOLETAS_CARGOS, data.folio, data.url)

        }
        

      )

     


      

      console.log();
    }
  }


}


