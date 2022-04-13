const jwt = require("jsonwebtoken")
require("dotenv").config();

module.exports = async(req,res,next) => {
    try {
        const jwtToken = req.cookies.access_token;
        if(!jwtToken) {
            return res.status(403).json("Not authorized")
        }
        const payload = jwt.verify(jwtToken, process.env.jwtSecret)
        req.user = payload.user;
        
    } catch (error) {
        
    }
    next()
}