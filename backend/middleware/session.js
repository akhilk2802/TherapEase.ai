module.exports = async (req, res, next) => {
    const token = req.cookies.sid;
    
    if (!token) res.status(401).send('Access denied. No token provided.');

    try{
        const user = await User.findOne({ sessionId: token });
        if (!user) res.status(400).send('Invalid token.');
        req.user = user;
        next(); 
    }
    catch(err){
        res.status(400).send('Invalid token.');
    }
}
