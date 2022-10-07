import mongoose from "mongoose";
import config from 'config'
import Logger from '../config/logger'

async function connect() {
    
    const dbUri = config.get<string>("dbUri")

    try {
        await mongoose.connect(dbUri)
        Logger.info("Conectado ao banco de dados");        
    } catch (err) {
        Logger.error("não foi possivel conectar no banco de dados"); 
        Logger.error(`Erro: ${err}`);    
        process.exit(1);   
    }

}

export default connect