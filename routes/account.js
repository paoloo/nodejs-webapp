var express = require('express');
var router = express.Router();
module.exports = function(knex) {

  router.post("/checklogin", function(req,res){
    var myaccount = req.body;
    knex("usuario").where(myaccount).then(function(result) {
      if (result.length == 0) {
        res.status(401).send('wrong login/pass');
      } else {
        req.session.login = 'ok';
        res.send(true)
      }
    });
  });

  router.get("/exit", function(req,res){
    req.session = null;
    res.send(true)
  });

  router.post("/", function(req,res){
    var newaccount = req.body;
    knex("usuario").insert(newaccount,"idusuario").then(function(retid){
      res.send("User created with id "+retid);
    }).catch(function(err){
      res.status(500).send(err);
    });
  });

  return router;
}
