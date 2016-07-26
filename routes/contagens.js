var express = require('express');
var router = express.Router();
module.exports = function(knex) {

  router.get("/", function(req,res){
    knex("mensagem").count('idmensagem as CNT').then( function(result){
      res.json(result[0].CNT);
    }).catch(function(err){
      res.status(500).send(err);
      console.log(err);
    });
  });

  return router;
}
