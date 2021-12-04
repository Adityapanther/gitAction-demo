const fastify = require('fastify')({
    logger: true
})

const launch = async () => {
    fastify.get('/', async(req, res) => {
        const {search} = req.query;
        if(!search){
            res.send({
                status: "success",
                statusCode: 200,
                msg: "1",
            })
        }

        if(search && search === "5"){
            res.send({
                status: "success",
                statusCode: 200,
                msg:"5",
            })
        }else{
            res.send({
                status: "error",
                statusCode: 404,
                msg: search,
            })
        }
    })
    fastify.listen("3000", (err, address) => {
        console.log(`listenning ${address}`);
    })

    return fastify;
}


module.exports = {
    launch
}