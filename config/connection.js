var mysql = require("mysql"); //requirte mysql

var connection = mysql.createConnection({
  host: "zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ccfvuei4uw55rgsc",
  password: "ojisdo7jw7e7bfja",
  database: "gpg5rd01lex2my5z"
});

//start connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// export connection
module.exports = connection;
