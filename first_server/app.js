import http from "http";
import { requestHandler as routes } from "./routes.js";

const server = http.createServer(routes);

server.listen(3000);
