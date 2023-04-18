const express = require('express');
const { postrout, deleterout, updaterout } = require("../controller/controller");
const Router = express.Router();

Router.post("/",postrout);
Router.patch("/update/:id",updaterout)
Router.delete('/delete/:id',deleterout)

module.exports=Router