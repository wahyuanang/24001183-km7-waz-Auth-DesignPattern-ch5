const jwt = require("jsonwebtoken");    


const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token) {
        return res.status(401).json ({
            status: "failed",
            message: "Youre not authorized",
            isSuccess: false,
            data: null
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) {
            return res.status(403).json({
                status: "failed",
                message: "Invalid token",
                isSuccess: false,
                data: null
            });
        }
        req.user = user;
        next();
    });
 }

 module.exports = authenticateToken;