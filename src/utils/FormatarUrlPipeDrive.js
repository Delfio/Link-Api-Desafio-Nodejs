
const DEFAULT_URL = process.env.PIPE_DRIVE_API_HOST;
const TOKEN_PIPE_DRIVE = process.env.PIPE_DRIVE_API_TOKEN;

function formatarUrl(rota) {
    return `https://${DEFAULT_URL}.pipedrive.com/api/v1/${rota}?api_token=${TOKEN_PIPE_DRIVE}`;
};

module.exports = formatarUrl;
