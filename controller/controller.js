const moviesSchema = require("../modals/schema")

let postrout = async(req,res)=>{
    await moviesSchema.create(req.body)
      res.send('done')
  }
  let deleterout = async(req ,res)=>{
    let{id} = req.params;
    let idDelete =await moviesSchema.findByIdAndDelete(id)
    
    res.send(await moviesSchema.find())
}

let updaterout =async(req,res)=>{
  let{id} = req.params;
  let idUpdet = await moviesSchema.findByIdAndUpdate(id,req.body)
  let updeteId =await moviesSchema.find()
  res.send(updeteId)
}
  module.exports = {postrout , deleterout ,updaterout}