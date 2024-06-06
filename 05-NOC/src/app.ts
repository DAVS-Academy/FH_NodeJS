import { Prisma, PrismaClient } from '@prisma/client';
import { envs } from './config/plugins/envs.plugin';
import { LogModel, MongoDatabase } from './data/mongo';
import { Server } from './presentation/server'

const title : string = "DAVS - NOC APP";
console.log(title);

(async() => {
    main()
})();

async function main() {
    
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
        
    });

        
    Server.start();
}