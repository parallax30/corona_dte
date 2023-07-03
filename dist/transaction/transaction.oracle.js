"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setInsertBoletaDoc = exports.setUpdateBoleta = exports.getQueryBoletas = void 0;
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
        var OracleQry = "SELECT * FROM BOLETAS_CARGOS WHERE ESTADO =1";
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
const setInsertBoletaDoc = async (idBoleta, folio, url) => {
    config_1.ConfigModule.forRoot();
    return oracledb.getConnection({
        user: process.env.oracle_username,
        password: process.env.oracle_password,
        connectString: process.env.oracle_connection_string
    })
        .then(function (connection) {
        var OracleQry = "insert into BOLETAS_CARGOS_DOC (ID_BOLETAS_CARGOS, B_CARGOS_TRAMA, B_CARGOS_ARCHIVO, B_CARGOS_URL, B_CARGOS_FOLIOSII, B_CARGOS_USU_REGISTRO, B_CARGOS_FECHA_REGISTRO, B_CARGOS_FECHA_EMISION) VALUES(@0,NULL,NULL,@1,@2,'TECNO',SYSDATE,NULL)";
        return connection.execute(OracleQry, [idBoleta, url, folio], { resultSet: false })
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
exports.setInsertBoletaDoc = setInsertBoletaDoc;
//# sourceMappingURL=transaction.oracle.js.map