var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "games" //Use database...
});

// Fields é: uma matriz contendo informações sobre cada campo no resultado (tente usar no console.log no lugar de results)

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM nes", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});