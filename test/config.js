const { default: axios } = require('axios');
const  { launch } = require('../server');

const baseURL = "http://127.0.0.1:3000";

const fetch = async (method, url, headers)=> {

   try {
    const config = {
        url,
        method,
        headers,
    }
    console.log(config);
    const res = await axios(config);
    return res.data;
   } catch (error) {
       if(error.response){
           return error.response.data;
       }
       return error;
   }
}

const delay = (miliSeconds) => {
    return new Promise( (resolve) => {
        setTimeout(resolve, miliSeconds)
    })
    
}

const setupServer = () => {
    return new Promise( (resolve) => {
             launch().then((server) => {

                resolve(server)
            })
    })
}

module.exports = {
    baseURL,
    fetch,
    delay,
    setupServer
}