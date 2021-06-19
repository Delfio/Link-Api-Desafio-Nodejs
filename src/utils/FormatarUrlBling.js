const axios = require('axios');
const BLING_API_TOKEN = process.env.BLING_API_TOKEN;

const baseURL = axios.create({
    baseURL: 'https://bling.com.br/Api/v2',
    params: {
        apikey: BLING_API_TOKEN,
    },
})

module.exports = baseURL;