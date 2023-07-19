import { Field, ObjectType } from '@nestjs/graphql';
import { NotaDeCreditoItem } from './notaCreditoItem.model';
import { NotaDeCreditoReferencia } from './notaCreditoReferencia.model';
@ObjectType({ description: 'Boleta from SERVICIOS_BOLETAS_CARGOS' })
export class NotaDeCredito {

@Field({ nullable: true })
Acteco: string;
@Field({ nullable: true })
FchEmis: string;
@Field({ nullable: true })
RUTRecep: string;
@Field({ nullable: true })
RznSocRecep: string;
@Field({ nullable: true })
GiroRecep: string;
@Field({ nullable: true })
DirRecep: string;
@Field({ nullable: true })
CmnaRecep: string;
@Field({ nullable: true })
CiudadRecep: string;
@Field({ nullable: true })
boletaTiposerv: string;
@Field(() => [NotaDeCreditoItem])
jsonDetalle: NotaDeCreditoItem[];
@Field(() => [NotaDeCreditoReferencia])
jsonReferencias: NotaDeCreditoReferencia[];
@Field({ nullable: true })
MntExe: string;
@Field({ nullable: true })
IVA: string;
@Field({ nullable: true })
MntNeto: string;
@Field({ nullable: true })
MntTotal: string;
@Field({ nullable: true })
mail_mandato: string;
}