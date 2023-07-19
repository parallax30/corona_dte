"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNC = exports.getBoletasPendientes = exports.setInsertBoletaDoc = exports.setInsertBoletaDocSP = exports.setUpdateBoletaSP = exports.setUpdateBoleta = exports.getQueryBoletas = void 0;
const config_1 = require("@nestjs/config");
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
const getQueryBoletas = async () => {
    config_1.ConfigModule.forRoot();
    return oracledb.getConnection({
        user: process.env.oracle_username,
        password: process.env.oracle_password,
        connectString: process.env.oracle_connection_string
    })
        .then(function (connection) {
        var OracleQry = "SELECT * FROM BOLETAS_CARGOS WHERE ESTADO =1 AND ROWNUM <500";
        return connection.execute(OracleQry, [], { resultSet: false })
            .then(function (result) {
            connection.close();
            return result.rows;
        })
            .catch(function (err) {
            connection.close();
            throw new Error(err.message);
        });
    });
};
exports.getQueryBoletas = getQueryBoletas;
const setUpdateBoleta = async (idBoletasCargos) => {
    console.log(idBoletasCargos);
    config_1.ConfigModule.forRoot();
    return oracledb.getConnection({
        user: process.env.oracle_username,
        password: process.env.oracle_password,
        connectString: process.env.oracle_connection_string
    })
        .then(function (connection) {
        var OracleQry = "update BOLETAS_CARGOS SET ESTADO = 2 WHERE ESTADO =1 AND ID_BOLETAS_CARGOS=:0";
        return connection.execute(OracleQry, [idBoletasCargos], { autoCommit: true })
            .then(function (result) {
            console.log('Update OK: ' + result.rowsAffected + ' rows. ');
            connection.close();
            return result.rows;
        })
            .catch(function (err) {
            connection.close();
            throw new Error(err.message);
        });
    });
};
exports.setUpdateBoleta = setUpdateBoleta;
const setUpdateBoletaSP = async (idBoletasCargos) => {
    console.log(idBoletasCargos);
    config_1.ConfigModule.forRoot();
    return oracledb.getConnection({
        user: process.env.oracle_username,
        password: process.env.oracle_password,
        connectString: process.env.oracle_connection_string
    })
        .then(function (connection) {
        var OracleQry = "EXEC clientes.servicios_boletas_cargos.SetActestadoEmisionBoleta (:0, 2)";
        return connection.execute(OracleQry, [idBoletasCargos], { autoCommit: true })
            .then(function (result) {
            console.log('Update OK: ' + result.rowsAffected + ' rows. ');
            connection.close();
            return result.rows;
        })
            .catch(function (err) {
            connection.close();
            throw new Error(err.message);
        });
    });
};
exports.setUpdateBoletaSP = setUpdateBoletaSP;
const setInsertBoletaDocSP = async (url_pdf, url_xml, Folio) => {
    console.log(url_pdf);
    config_1.ConfigModule.forRoot();
    return oracledb.getConnection({
        user: process.env.oracle_username,
        password: process.env.oracle_password,
        connectString: process.env.oracle_connection_string
    })
        .then(function (connection) {
        var OracleQry = "EXEC clientes.servicios_boletas_cargos.SetActDocEmisionBoleta (:0, :1, :2)";
        return connection.execute(OracleQry, [url_pdf, url_xml, Folio], { autoCommit: true })
            .then(function (result) {
            console.log('Update OK: ' + result.rowsAffected + ' rows. ');
            connection.close();
            return result.rows;
        })
            .catch(function (err) {
            connection.close();
            throw new Error(err.message);
        });
    });
};
exports.setInsertBoletaDocSP = setInsertBoletaDocSP;
const setInsertBoletaDoc = async (idBoleta, folio, url) => {
    config_1.ConfigModule.forRoot();
    return oracledb.getConnection({
        user: process.env.oracle_username,
        password: process.env.oracle_password,
        connectString: process.env.oracle_connection_string
    })
        .then(function (connection) {
        var OracleQry = "insert into BOLETAS_CARGOS_DOC (ID_BOLETAS_CARGOS, B_CARGOS_TRAMA, B_CARGOS_ARCHIVO, B_CARGOS_URL, B_CARGOS_FOLIOSII, B_CARGOS_USU_REGISTRO, B_CARGOS_FECHA_REGISTRO, B_CARGOS_FECHA_EMISION) VALUES(:0,NULL,NULL,:1,:2,'TECNO',SYSDATE,NULL)";
        return connection.execute(OracleQry, [idBoleta, url, folio], { autoCommit: true })
            .then(function (result) {
            connection.close();
            console.log('Insert OK: ' + result.rowsAffected + ' rows. ');
            return result.rows;
        })
            .catch(function (err) {
            connection.close();
            throw new Error(err.message);
        });
    });
};
exports.setInsertBoletaDoc = setInsertBoletaDoc;
const getBoletasPendientes = async (fechaDesde, fechaHasta) => {
    config_1.ConfigModule.forRoot();
    return oracledb.getConnection({
        user: process.env.oracle_username,
        password: process.env.oracle_password,
        connectString: process.env.oracle_connection_string
    })
        .then(function (connection) {
        var OracleQry = "EXEC clientes.servicios_boletas_cargos.CurCargosNoBoleteadosFechas (to_date(@0,'yyyyMMdd'),to_date(@1,'yyyyMMdd')) ";
        return connection.execute(OracleQry, [fechaDesde, fechaHasta])
            .then(function (result) {
            connection.close();
            console.log('Procedure OK: ' + result.rowsAffected + ' rows. ');
            return result.rows;
        })
            .catch(function (err) {
            connection.close();
            throw new Error(err.message);
        });
    });
};
exports.getBoletasPendientes = getBoletasPendientes;
const getNC = async (fechaDesde, fechaHasta) => {
    const jsonNC = [{
            "Acteco": "123",
            "FchEmis": "2023-01-17",
            "RUTRecep": "77486703-1",
            "RznSocRecep": "Nombre Empresa de Prueba",
            "GiroRecep": "Giro Empresa de Prueba",
            "DirRecep": "Dir Empresa de Prueba",
            "CmnaRecep": "Providencia",
            "CiudadRecep": "Santiago",
            "boletaTiposerv": "3",
            "jsonDetalle": [
                {
                    "NroLinDet": "1",
                    "VlrCodigo": "1",
                    "TpoCodigo": "1",
                    "NmbItem": "Manzanas",
                    "QtyItem": "1",
                    "UnmdItem": "UNI",
                    "PrcItem": "1000",
                    "DescuentoPct": "",
                    "DescuentoMonto": "",
                    "MontoItem": "1000",
                    "DscItem": "Verdes",
                    "CodItem": "",
                    "RUTmandante": ""
                },
                {
                    "NroLinDet": "1",
                    "VlrCodigo": "1",
                    "TpoCodigo": "1",
                    "NmbItem": "Peras",
                    "QtyItem": "2",
                    "UnmdItem": "UNI",
                    "PrcItem": "1000",
                    "DescuentoPct": "",
                    "DescuentoMonto": "",
                    "MontoItem": "2000",
                    "DscItem": "Verdes",
                    "CodItem": "",
                    "RUTmandante": ""
                }
            ],
            "jsonReferencias": [
                {
                    "TpoDocRef": "39",
                    "FolioRef": "123",
                    "FchRef": "2023-01-19",
                    "NroLinRef": "1",
                    "RazonRef": "XXX",
                    "CodRef": "1"
                }
            ],
            "MntExe": "0",
            "IVA": "479",
            "MntNeto": "2521",
            "MntTotal": "3000",
            "mail_mandato": "contacto@tecnoback.cl"
        }];
    return jsonNC;
};
exports.getNC = getNC;
//# sourceMappingURL=transaction.oracle.js.map