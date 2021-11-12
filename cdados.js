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

    var sql = "INSERT INTO nes values (default, 'Super Mario Bros.', 2), (default, 'Zelda', 1), (default, 'Donkey Kong', 1)";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Dados inseridos!");
    });
});