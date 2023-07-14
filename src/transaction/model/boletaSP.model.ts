import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType({ description: 'Boleta from SERVICIOS_BOLETAS_CARGOS' })
export class BoletaSP {
@Field({ nullable: true })
id_boletas_cargos: number;
@Field({ nullable: true })
Estado: string;
@Field({ nullable: true })
rut: number;
@Field({ nullable: true })
dv: string;
@Field({ nullable: true })
nombre_cliente: string;
@Field({ nullable: true })
email: string;
@Field({ nullable: true })
telefono_celular: string;
@Field({ nullable: true })
direccion_cliente: string;
@Field({ nullable: true })
monto_cargo: number;
@Field({ nullable: true })
monto_iva: number;
@Field({ nullable: true })
tienda: string;
@Field({ nullable: true })
tienda_nombre: string;
@Field({ nullable: true })
cod_art_boleta: string;
@Field({ nullable: true })
glosa_boleta: string;
@Field({ nullable: true })
forma_de_pago: string;
@Field({ nullable: true })
rut_empresa: string;
@Field({ nullable: true })
razon_social_empresa: string;
@Field({ nullable: true })
comuna_empresa: string;
@Field({ nullable: true })
ciudad_empresa: string;
}