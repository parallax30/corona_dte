import { ConfigModule } from '@nestjs/config';

const oracledb = require('oracledb');


oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
export const getQueryBoletas = async () => {
    ConfigModule.forRoot();
    return oracledb.getConnection({
        user: process.env.oracle_username,
        password: process.env.oracle_password,
        connectString: process.env.oracle_connection_string
    })
    .then(function (connection) {
        var OracleQry = "SELECT * FROM BOLETAS_CARGOS WHERE ESTADO =1 AND ROWNUM <500";
        return connection.execute(OracleQry, [], { resultSet: false})
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

export const setUpdateBoleta = async (idBoletasCargos) => {

    console.log(idBoletasCargos);

    ConfigModule.forRoot();
    return oracledb.getConnection({
        user: process.env.oracle_username,
        password: process.env.oracle_password,
        connectString: process.env.oracle_connection_string
    })
    .then(function (connection) {
        var OracleQry = "update BOLETAS_CARGOS SET ESTADO = 2 WHERE ESTADO =1 AND ID_BOLETAS_CARGOS=:0";
        return connection.execute(OracleQry, [idBoletasCargos], { autoCommit: true })
    .then(function (result) {
        console.log('Update OK: ' + result.rowsAffected + ' rows. ')
        connection.close();
        return result.rows;
    })
    .catch(function (err) {
        connection.close();
        throw new Error(err.message);
    });
    });
};

export const setUpdateBoletaSP = async (idBoletasCargos) => {

    console.log(idBoletasCargos);

    ConfigModule.forRoot();
    return oracledb.getConnection({
        user: process.env.oracle_username,
        password: process.env.oracle_password,
        connectString: process.env.oracle_connection_string
    })
    .then(function (connection) {
        var OracleQry = "EXEC clientes.servicios_boletas_cargos.SetActestadoEmisionBoleta (:0, 2)";
        return connection.execute(OracleQry, [idBoletasCargos], { autoCommit: true })
    .then(function (result) {
        console.log('Update OK: ' + result.rowsAffected + ' rows. ')
        connection.close();
        return result.rows;
    })
    .catch(function (err) {
        connection.close();
        throw new Error(err.message);
    });
    });
};

export const setInsertBoletaDocSP = async (url_pdf, url_xml, Folio) => {

    console.log(url_pdf);

    ConfigModule.forRoot();
    return oracledb.getConnection({
        user: process.env.oracle_username,
        password: process.env.oracle_password,
        connectString: process.env.oracle_connection_string
    })
    .then(function (connection) {
        var OracleQry = "EXEC clientes.servicios_boletas_cargos.SetActDocEmisionBoleta (:0, :1, :2)";
        return connection.execute(OracleQry, [url_pdf, url_xml, Folio], { autoCommit: true }) //TODO: REVISAR COMPATIBILIDAD DE URL CON BLOB
    .then(function (result) {
        console.log('Update OK: ' + result.rowsAffected + ' rows. ')
        connection.close();
        return result.rows;
    })
    .catch(function (err) {
        connection.close();
        throw new Error(err.message);
    });
    });
};

export const setInsertBoletaDoc = async (idBoleta, folio, url) => {
    ConfigModule.forRoot();
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
        console.log('Insert OK: ' + result.rowsAffected + ' rows. ')
        return result.rows;
    })
    .catch(function (err) {
        connection.close();
        throw new Error(err.message);
    });
    });
};

export const getBoletasPendientes= async (fechaDesde, fechaHasta) => {
    ConfigModule.forRoot();
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
        console.log('Procedure OK: ' + result.rowsAffected + ' rows. ')
        return result.rows;
    })
    .catch(function (err) {
        connection.close();
        throw new Error(err.message);
    });
    });
};
