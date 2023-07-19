import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType({ description: 'Boleta from SERVICIOS_BOLETAS_CARGOS' })
export class NotaDeCreditoItem {
@Field({ nullable: true })
NroLinDet: string;
@Field({ nullable: true })
VlrCodigo: string;
@Field({ nullable: true })
TpoCodigo: string;
@Field({ nullable: true })
NmbItem: string;
@Field({ nullable: true })
QtyItem: string;
@Field({ nullable: true })
UnmdItem: string;
@Field({ nullable: true })
PrcItem: string;
@Field({ nullable: true })
DescuentoPct: string;
@Field({ nullable: true })
DescuentoMonto: string;
@Field({ nullable: true })
MontoItem: string;
@Field({ nullable: true })
DscItem: string;
@Field({ nullable: true })
CodItem: string;
@Field({ nullable: true })
RUTmandante: string;
}
    