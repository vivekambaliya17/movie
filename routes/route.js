const express = require('express');
const { postrout, deleterout, updaterout, getrout } = require("../controller/controller");
const midalwer = require("../middleware/middleware")
const Router = express.Router();
Router.get("/get",getrout)
Router.post("/post",midalwer,postrout);
Router.patch("/update/:id",updaterout)
Router.delete('/delete/:id',deleterout)

module.exports=Router