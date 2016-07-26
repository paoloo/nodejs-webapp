var express = require('express');
var router = express.Router();
module.exports = function(knex) {

  router.get("/", function(req,res){
    knex("mensagem").select().then( function(result){
      res.json(result);
    }).catch(function(err){
      res.status(500).send(err);
      console.log(err);
    });
  });

  router.post("/", function(req,res){
    var novamsg = req.body;
    knex("mensagem").insert(novamsg,"idmensagem").then(function(retid){
      res.send("Message stored with id "+retid);
    }).catch(function(err){
      res.status(500).send(err);
      console.log(err);
    });
  });

  return router;
}
