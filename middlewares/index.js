const fs=require('fs')
function logReqRes(filename){
return (req,res,next)=>{
    const log = `\n ${Date.now()}: ${req.method} ${req.url} ${req.ip}`;
    fs.appendFile(filename, log, (err, data)=>{
  next()
    })
  }
}
module.exports={logReqRes}