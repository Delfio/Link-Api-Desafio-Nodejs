
const BLING_API_TOKEN = process.env.BLING_API_TOKEN;

function FormatarUrlBling(path) {
    return `https://bling.com.br/Api/v2/${path}?apikey=${BLING_API_TOKEN}`;
}

module.exports = FormatarUrlBling;