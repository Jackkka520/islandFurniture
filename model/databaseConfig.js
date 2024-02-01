var mysql = require('mysql');
var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "sepuser",
            password: "Kake3378",
            database: "islandfurniture-it07"
        });
        return conn;
    }
};
module.exports = dbconnect