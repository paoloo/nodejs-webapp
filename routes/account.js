var express = require('express');
var router = express.Router();
module.exports = function(knex) {

  router.post("/checklogin", function(req,res){
    var myaccount = req.body;
    knex("usuario").where(myaccount).select('fullname').then(function(result) {
      if (result.length == 0) {
        res.status(401).send('wrong login/pass');
      } else {
        res.send(result[0]['fullname'])
      }
    });
  });

  router.post("/", function(req,res){
    var newaccount = req.body;
    knex("usuario").insert(newaccount,"idusuario").then(function(retid){
      res.send("User created with id "+retid);
    }).catch(function(err){
      res.status(500).send(err);
      console.log(err);
    });
  });

  return router;
}
