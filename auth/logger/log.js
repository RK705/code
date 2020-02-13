const logger=(req,res,next)=>{
    console.log("==========================")
    console.log("Data",req.body)
    console.log("Path",req.path)
    console.log("==========================")
    next()
}
module.exports=logger