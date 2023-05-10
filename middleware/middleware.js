let midalwer=(req,res,next)=>{
    let data =req.body
    if( data.title && data.poster && data.year&& data.rating&& data.Director&& data.durection ){
        console.log(data.title);
        next()
    }
    else{
            res.status(444).send("error")
    }    
}
module.exports=midalwer
