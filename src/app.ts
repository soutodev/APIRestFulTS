import express from 'express'
import config from 'config'

const app = express()

// JSON middleware
app.use(express.json());

// Database
import db from "../config/db"

//Routes
import router from './router'

app.use("/api/", router);

// app port
const port = config.get<number>("port")

app.listen(port, async () => {
    await db();
    console.log(`Aplicação funcionando na porta: ${port}`);    
})