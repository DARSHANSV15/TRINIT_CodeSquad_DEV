module.exports.isLoggedIn=(req,res,next)=>{
    if(req.isAuthenticated()){
        return true;
    }
    return false;
}