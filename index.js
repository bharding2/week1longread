const server = require(__dirname + '/server');
const router = require(__dirname + '/router');

server.start(router.route);
