"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environment_1 = require("../global/environment");
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const socket = __importStar(require("../sockets/socket"));
class Server {
    constructor() {
        if (Server._instance) {
            throw new Error(`Singleton : création d'une instance interdite !`);
        }
        this.app = express_1.default();
        this.port = environment_1.SERVER_PORT;
        this.httpServer = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.httpServer);
        this.listenSockets();
        Server._instance = this;
    }
    listenSockets() {
        this.io.on('connection', (client) => {
            socket.connectUser(client);
            socket.disconnectUser(client);
            socket.onConfigUser(client);
            socket.onMessage(client, this.io);
        });
    }
    static get instance() {
        return Server._instance;
    }
    start(callback) {
        this.httpServer.listen(this.port, callback);
    }
}
Server._instance = new Server();
exports.default = Server;
