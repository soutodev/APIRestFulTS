// ENV variables
require("dotenv").config();

import express from 'express'
import config from 'config'

const app = express()

// Database
import db from "../config/db"

// JSON middleware
app.use(express.json());

//Routes
import router from './router'

//Logger
import Logger from "../config/logger"

//Middelawares
import morganMiddleware from "./middleware/morganMiddleware"
app.use(morganMiddleware);

app.use("/api/", router);

// app port
const port = config.get<number>("port")

app.listen(port, async () => {
    await db();
    Logger.info(`Aplicação funcionando na porta: ${port}`);    
})