var express = require('express');
var mysql = require('mysql');
var app = express();
var bodyParser = require("body-parser");
var acc;
var x;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(5050, function(){
  console.log('Port 5050 is ready')
});


    var connection = mysql.createConnection({
      host: 'localhost',
      user     : 'root',
      password : '',
      database: 'test'
    });
    connection.connect();

    var id = '1; drop table users;'; 

    var query = connection.query('select * from users', function(err, rows) {
      if (err) {
        console.error(err);
        return;
      }
      acc = rows;
      x = rows.length;
      console.log(x);
    });


app.get('/Accounts', function (req, res) {
      var connection = mysql.createConnection({
      host: 'localhost',
      user     : 'root',
      password : '',
      database: 'test'
    });
    connection.connect();

    var id = '1; drop table users;'; 

    var query = connection.query('select * from users', function(err, rows) {
      if (err) {
        console.error(err);
        return;
      }
      acc = rows;
      res.end(JSON.stringify(acc));
    });
});

app.get('/Acc2', function (req, res) {
      res.end(JSON.stringify(acc));
    });

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/Home.html")
});

app.get('/Root', function (req, res) {
  res.sendFile(__dirname + "/Root.html")
});

app.get('/Index', function (req, res) {
  res.sendFile(__dirname + "/Index.html")
});

app.get('/Registration', function (req, res) {
  res.sendFile(__dirname + "/Registration.html")
});

app.get('/Dash', function (req, res) {
  res.sendFile(__dirname + "/Dash.html")
});

app.post('/signing-up',function(req,res){
  var email=req.body.email;
  var password=req.body.password;


  var article = {
    Email: email,
    Password: password,
    ID: x
  };
  x++;
  console.log(x);
  var connection = mysql.createConnection({
    host: 'localhost',
    user     : 'root',
    password : '',
    database: 'test'
  });
  connection.connect();


  var query = connection.query('insert into users set ?', article, function (err, result) {
    if (err) {
      console.error(err);
      return;
    }
    console.error(result);
  });

});


/*
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

/*
var article = {
  Email: 'Pieyyouel',
  Password: 'Pieyyouel',
  ID: 1
};

var query = connection.query('insert into users set ?', article, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.error(result);
});
*/

/*
var query = connection.query('select * from users where id = ?', id, function(err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.error(result);
});
*/
/*
    var connection = mysql.createConnection({
      host: 'localhost',
      user     : 'root',
      password : '',
      database: 'test'
    });
    connection.connect();

    var id = '1; drop table users;'; 

    var query = connection.query('select * from users', function(err, rows, fields) {
      if (err) {
        console.error(err);
        return;
      }
      console.error(rows);
      console.error(fields);
    });
*/
