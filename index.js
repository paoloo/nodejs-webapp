/* módulos que usaremos */
var express = require("express");
var bodyParser = require("body-parser");
var knexfile = require("./knexfile");
var cookieSession = require('cookie-session');
var knex = require("knex")(knexfile.development);
var app = express();

knex.migrate.latest();
app.use(bodyParser.json());

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
}));

// rotas
app.use("/mensagens", require('./routes/mensagens')(knex));
app.use("/contagens", require('./routes/contagens')(knex));
app.use("/account", require('./routes/account')(knex));

app.all('*', function(req, res, next) {
    if (['/login.html', '/js/login.js', '/bower_components/angular/angular.min.js', '/favicon.ico'].indexOf(req.originalUrl) != -1 ||
        req.session.loginToken == 'ok') {

        next();
    } else {
        res.redirect('/login.html');
    }
});

app.use(express.static("public"));

app.listen(3000);
