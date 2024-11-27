const jwt=require('jsonwebtoken')

const middilewares=(req,res,next)=>{
   try{
    const token = req.headers.authorization.split(" ")[1]
    if(token){
        const jwtResponse=jwt.verify(token,process.env.seacretkey)
        req.payload=jwtResponse.userID        
        next()
        // console.log("middileware exicuted success!!");
    }else{
        res.status(401).json("token not available")
    }
   }catch(err){
    res.status(401).json("Authorization faild!! Login please..:")
   }

}
module.exports =  middilewares ;