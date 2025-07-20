export default (req, res, next) =>{
    res.json({ message :  "API en mantenimiento"});
    next();
};