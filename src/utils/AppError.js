class AppError {
    constructor(msg, statusCode = 404) {
        this.msg = msg;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;