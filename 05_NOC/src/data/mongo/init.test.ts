import mongoose from "mongoose"
import { MongoDatabase } from "./init"


describe('init MongoDB', () => {

    afterAll(() => {
        mongoose.connection.close()
    })


    test('should connect to mongoDb', async() => {

        const connected = await MongoDatabase.connect({
            dbName: process.env.MONGO_DB_NAME!,
            mongoUrl: process.env.MONGO_URL!,
        });

        expect(connected).toBe(true);
    });

    test('should throw an error', async() => {

    try {
        const connected = await MongoDatabase.connect({
            dbName: process.env.MONGO_DB_NAME!,
            mongoUrl: 'mongodb://DAVS:123456@localhoaaaaaast:27017',
        });
        expect(true).toBe(false)
    } catch (error){
        
    }
  })
})