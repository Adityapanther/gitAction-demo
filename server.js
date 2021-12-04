const fastify = require('fastify')({
    logger: true
})

const launch = async () => {
    fastify.get('/', async(req, res) => {
        res.send({
            status: "success",
            statusCode: 200,
            msg: 1,
        })
    })
    fastify.listen("3000", (err, address) => {
        console.log(`listenning ${address}`);
    })

    return fastify;
}


module.exports = {
    launch
}