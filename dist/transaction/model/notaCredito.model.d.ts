import { NotaDeCreditoItem } from './notaCreditoItem.model';
import { NotaDeCreditoReferencia } from './notaCreditoReferencia.model';
export declare class NotaDeCredito {
    Acteco: string;
    FchEmis: string;
    RUTRecep: string;
    RznSocRecep: string;
    GiroRecep: string;
    DirRecep: string;
    CmnaRecep: string;
    CiudadRecep: string;
    boletaTiposerv: string;
    jsonDetalle: NotaDeCreditoItem[];
    jsonReferencias: NotaDeCreditoReferencia[];
    MntExe: string;
    IVA: string;
    MntNeto: string;
    MntTotal: string;
    mail_mandato: string;
}
