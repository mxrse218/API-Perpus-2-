validateAPI = '12345'

const auth = (req, res, next) => {
    const apikey = req.headers['x-api-key']

    if(key = undefined){
        res.status(500).json({
            msg : 'not authorized'
        })
    }
    else if(apikey !== validateAPI){
        res.status(500).json({
            msg : 'not valid api'
        })
    }
    next();
}
module.exports = auth;
