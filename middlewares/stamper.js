module.exports=(req,res,next)=>{
    req.addtime=new Date();
    next();  
  }
