"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
const users_1 = __importDefault(require("./routes/users"));
const apis_1 = __importDefault(require("./routes/apis"));
var app = express_1.default();
const databaseUrl = process.env.MONGO_URL || 'mongodb://localhost/development';
console.log(process.env.NODE_ENV);
mongoose_1.default
    .connect(databaseUrl, { useNewUrlParser: true, useCreateIndex: true })
    .catch(err => err);
const db = mongoose_1.default.connection;
db.on('error', () => {
    console.log('Connection Failed');
    let sec = 3;
    let retry = setInterval(() => {
        if (sec > 0) {
            console.log(`Retrying In ${sec} Second(s)`);
        }
        else {
            console.log('Retrying Now......');
            clearInterval(retry);
            mongoose_1.default
                .connect(databaseUrl, { useNewUrlParser: true, useCreateIndex: true })
                .catch(err => err);
        }
        sec--;
    }, 1000);
});
db.once('open', function () {
    console.log(`Connected to ${databaseUrl}`);
});
// view engine setup
app.set('views', path_1.default.join(__dirname, '../views'));
app.set('view engine', 'jade');
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cookie_parser_1.default());
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/users', users_1.default);
app.use('/apis', apis_1.default);
const clientDirectory = path_1.default.join(__dirname, '../', '/build');
if (fs_1.default.existsSync(clientDirectory) && process.env.NODE_ENV === 'production') {
    console.log('Production Environment');
    app.use(express_1.default.static(clientDirectory));
    app.get('/*', (_req, res) => {
        res.sendFile(path_1.default.join(clientDirectory, 'index.html'));
    });
}
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(http_errors_1.default(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
module.exports = app;
//# sourceMappingURL=app.js.map