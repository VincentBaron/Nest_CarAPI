"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupApp = void 0;
const common_1 = require("@nestjs/common");
const cookie_session_1 = require("cookie-session");
const setupApp = (app) => {
    app.use((0, cookie_session_1.default)({
        keys: ['asdfasfd'],
    }));
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    app.set('etag', false);
    app.use((req, res, next) => {
        res.removeHeader('x-powered-by');
        res.removeHeader('date');
        next();
    });
};
exports.setupApp = setupApp;
//# sourceMappingURL=setup-app.js.map