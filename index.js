/* módulos que usaremos */
var express = require("express");
var bodyParser = require("body-parser");
var knexfile = require("./knexfile");
var knex = require("knex")(knexfile.development);
var app = express();

knex.migrate.latest();
app.use(bodyParser.json());

// rotas
app.use("/mensagens", require('./routes/mensagens')(knex));
app.use("/contagens", require('./routes/contagens')(knex));
app.use("/account", require('./routes/account')(knex));

app.use(express.static("public"));

app.listen(3000);
