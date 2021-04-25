import express from "express";
import { createServer } from 'http';
import { Server, Socket } from "socket.io";
import path from 'path';

import './database/index';
import { routes } from "./routes";

const app = express();

// Definindo Caminho da Pasta PUBLIC
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (req, res) => {
    return res.render("html/client.html");
});

app.get("/pages/admin", (req, res) => {
    return res.render("html/admin.html");
});

const http = createServer(app); // CRIANDO PROTOCOLO HTTP
const io = new Server(http); // CRIANDO O PROTOCOLO WEB SOCKET

io.on('connection', (socket: Socket) => {
    // console.log("Se conectou no Socket", socket.id);
});

app.use(express.json());
app.use(routes);

export { http, io };