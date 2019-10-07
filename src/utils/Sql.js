var mysql = require("mysql");
const { sqlConfig } = require("../config/sql.config");
const Logger = require("../utils/Logger");
const pool = mysql.createPool(sqlConfig);

exports.getSQLResult = function(sql) {
    return new Promise((resolve, reject) => {
        Logger.info(sql);
        pool.getConnection(function(err, connection) {
            if (err) {
                Logger.error("getConnection error", err);
                reject(err);
                return;
            }
            connection.query(sql, function(err, result) {
                if (err) {
                    Logger.error("[SELECT ERROR] - ", err.message);
                    reject(err);
                    return;
                }
                Logger.info(JSON.stringify(result));
                resolve(result);
            });
            connection.release();
        });
    });
};
