const expect = require('chai').expect;
const { fetch, baseURL, setupServer, delay } = require('../config');

let server;

describe("parant dir test", async () => {
    this.timeout(20000)
    before(async function(){
        server = await setupServer();
        await delay(20000)
    })
    it("should get 1", async function(){
        const headers = {
            "Content-Type": "application/json",
        }
        const res = await fetch(
            "GET",
            `${baseURL}/`,
            headers,
        )
        console.log(res);
        expect(res.statusCode).to.be.eq(200);
        expect(res.status).to.be.a("string");
        expect(res.status).to.be.eq("success");
        expect(res.msg).to.be.eq(1);
    })

    

    after(async function(){
        server.close()
    })
})