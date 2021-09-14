var mysql = require('mysql')
var connection = mysql.createConnection({
  host: '203.150.221.207',
  user: "pupan",
  // password: '6BR]WxKoKPvT*vBR=',
  database: 'pupan'
})

connection.connect()




connection.query('SELECT * FROM `pupan`.`test`', function (err, rows, fields) {
  if (err) throw err
  console.log('The solution is: ', rows[0].solution)
  console.log(err)
})

// connection.end()