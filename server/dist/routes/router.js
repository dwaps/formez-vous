"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const server_1 = __importDefault(require("../classes/server"));
const router = express_1.Router();
router.get('/messages', (req, res) => {
    res.json({
        success: true,
        message: 'Lecture des messages',
    });
});
router.post('/messages/:id', (req, res) => {
    const { id } = req.params;
    const { pseudo, message } = req.body;
    const payload = { pseudo, message };
    const server = server_1.default.instance;
    server.io.in(id).emit('new-private-message', payload);
    res.json({ id, pseudo, message });
});
exports.default = router;
