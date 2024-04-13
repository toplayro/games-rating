const mainRouteController = require("./public/scripts/controllers/main.js");
const gameRouteController = require("./public/scripts/controllers/game.js");
const defaultRouteController = require("./public/scripts/controllers/default.js");
const voteRouteController = require("./public/scripts/controllers/vote.js")

const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");
            break;

        case "/game":
            gameRouteController(res);
            break;

        case "/vote":
            voteRouteController(req, res);
            break;

        default:
            defaultRouteController(res, url);
    }
});

server.listen(3005); 