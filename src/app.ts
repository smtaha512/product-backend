import express from "express";
import bodyParser from "body-parser";
import { environment } from "./environments/environtment";

const app = express();

app.set("port", environment.port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export { app };
