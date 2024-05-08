import mysql from 'mysql';

function makeMoveQuery(query, res) {
    var con = mysql.createConnection({
        host: "127.0.0.1",
        user: "move",
        password: "PoyboveP1tZuHZxJ",
        database: 'move',
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected to MySQL!");
      });

      con.query(query, function (err, result) {
        if (err) throw err;
        res.send(result);
      });

      con.end();
}

export default makeMoveQuery;

