import { envs } from "./envs.plugin"

describe('envs.plugins.ts', () => {

    test('should return env options', () => {
        
        expect( envs).toEqual({
            PORT: 3000,
            MAILER_SERVICE: 'gmail',
            MAILER_EMAIL: 'davs.academy@gmail.com',
            MAILER_SECRET_KEY: 'ixhbkpebtccowyvz',
            PROD: false,
            MONGO_URL: 'mongodb://DAVS:123456789@localhost:27017/',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'DAVS',
            MONGO_PASS: '123456789',
            POSTGRES_URL: 'postgresql://postgres:123456@localhost:5432/NOC',
            POSTGRES_USER: 'postgres',
            POSTGRES_DB: 'NOC-TEST',
            POSTGRES_PASSWORD: '123456789'
        });
    });

    test('Shoulf return error if not found env', async () => {
        jest.resetModules();
        process.env.PORT = 'ABC';

        try{

            await import ('./envs.plugin')
            expect(true).toBe(false);

        } catch (error){
            //console.log(error);
            expect(`${error}`).toContain('"PORT" should be a valid integer');
        }
    })
})