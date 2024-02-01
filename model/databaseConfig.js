var mysql = require('mysql');
var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "sep",
            password: "Jmdx5800498@zz",
            database: "islandfurniture-it07"
        });
        return conn;
    }
};
module.exports = dbconnect