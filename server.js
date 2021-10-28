const fastify = require('fastify')({
    logger: true
})

const launch = async () => {
    fastify.get('/', async(req, res) => {
        res.send({
            status: "ok",
            statusCode: 200
        })
    })
    fastify.listen("3000", (err, address) => {
        console.log(`listenning ${address}`);
        console.log("done me");
        
    })
}

launch()