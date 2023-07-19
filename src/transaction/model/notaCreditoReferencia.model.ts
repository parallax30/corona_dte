import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType({ description: 'Boleta from SERVICIOS_BOLETAS_CARGOS' })
export class NotaDeCreditoReferencia {
@Field({ nullable: true })
TpoDocRef: string;
@Field({ nullable: true })
FolioRef: string;
@Field({ nullable: true })
FchRef: string;
@Field({ nullable: true })
NroLinRef: string;
@Field({ nullable: true })
RazonRef: string;
@Field({ nullable: true })
CodRef: string;
}
