import express from "express";
import http from "http";
import userRouter from "./routes/user.routes.js"

//path e url para trabalhar com caminhos
import path from "path";
import { fileURLToPath } from "url";


//config dos caminhos
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use("/", userRouter)


const server = http.createServer(app)
export default server;