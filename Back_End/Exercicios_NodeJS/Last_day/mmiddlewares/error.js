
const errorMiddleware = (err, req, res, next) => {
        if(err.status) {
           res.status(err.status).send({
             error: err.message
           }) 
        }
        res.status(500).send({
          error: `Deu erro aqui irmao ${err.message}`
        })

        
}

module.exports = errorMiddleware;