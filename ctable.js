var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "games" //Use database...
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE nes (id INT not null AUTO_INCREMENT PRIMARY KEY, nm_jogo VARCHAR(30), qt_jogadores tinyint)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created!");
    });
});