import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType({ description: 'Boleta Summary' })
export class Boleta {
@Field({ nullable: true })
RUT: number;
@Field({ nullable: true })
FECHA_REGISTROstring;
@Field({ nullable: true })
USU_REGISTRO: string;
@Field({ nullable: true })
FECHA_REGISTRO_N: number;
@Field({ nullable: true })
ID_CARGO: number;
@Field({ nullable: true })
ID_TIE_TA_DATOS_POS: number;
@Field({ nullable: true })
TIPO_CARGO: string;
@Field({ nullable: true })
ORIGEN_CARGO: string;
@Field({ nullable: true })
MONTO_CARGO: number;
@Field({ nullable: true })
IVA: number;
MONTO_IVA: number;
@Field({ nullable: true })
DV: string;
@Field({ nullable: true })
ID_BOLETAS_CARGOS: number;
@Field({ nullable: true })
ESTADO: number;
@Field({ nullable: true })
ID_AVANCE: number;
@Field({ nullable: true })
FECHA_NOTIFICA_POS;
@Field({ nullable: true })
FECHA_NOTIFICA_SMS;
@Field({ nullable: true })
FECHA_NOTIFICA_EMAIL;
@Field({ nullable: true })
EMAIL: string;
@Field({ nullable: true })
TELEFONO_CELULAR: string;
@Field({ nullable: true })
TIENDA: number;
@Field({ nullable: true })
TIENDA_NOMBRE: string;
@Field({ nullable: true })
ID_POS: number;
@Field({ nullable: true })
UNIDAD: number;
@Field({ nullable: true })
FORMA_DE_PAGO: string;
@Field({ nullable: true })
GLOSA_BOLETA: string;
@Field({ nullable: true })
TIPO_COMISION: string;
@Field({ nullable: true })
COD_ART_BOLETA: number;
@Field({ nullable: true })
RUT_EMPRESA: string;
@Field({ nullable: true })
RAZON_SOCIAL_EMPRESA: string;
@Field({ nullable: true })
DIRECCION_EMPRESA: string;
@Field({ nullable: true })
COMUNA_EMPRESA: string;
@Field({ nullable: true })
CIUDAD_EMPRESA: string;
@Field({ nullable: true })
HORA_TRANSACCION: string;
@Field({ nullable: true })
FECHA_TRANSACCION;
@Field({ nullable: true })
NOMBRE_CLIENTE: string;
@Field({ nullable: true })
DIRECCION_CLIENTE: string;
@Field({ nullable: true })
TIPO_TARJETA: string;
@Field({ nullable: true })
PROCESADOR: string
}