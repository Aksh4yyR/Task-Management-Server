const jwt = require('jsonwebtoken');

const jwtMiddleware = (req, res, next) => {
    console.log(req);
    console.log("Inside JwtMiddleware");
    
    const token = req.headers['authorization']?.split(" ")[1]; // Safe token extraction
    if (!token) {
        return res.status(401).json("Authorization failed.... Token is missing");
    }

    try {
        const jwtResponse = jwt.verify(token, process.env.JWTPASSWORD);
        console.log(jwtResponse);
        req.userId = jwtResponse.userId;
        console.log(req.userId);
        
        next();
    } catch (err) {
        res.status(401).json("Authorization failed... Please login.....");
    }
}

module.exports = jwtMiddleware;
