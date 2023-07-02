"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryBoletas = void 0;
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
//# sourceMappingURL=transaction.oracle.js.map