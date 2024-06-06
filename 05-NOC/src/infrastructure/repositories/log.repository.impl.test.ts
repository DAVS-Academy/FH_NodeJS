import exp from "constants";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entities";
import { LogRepositoryImpl } from "./log.repository.impl"
import { escape } from "querystring";



describe('LogRepositoryImpl', () => {

    const mockLogDatasource = {
        saveLog: jest.fn(),
        getLogs: jest.fn(), 
    }

    const LogRepository = new LogRepositoryImpl(mockLogDatasource );

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('saveLog should call the datasource with arguments', async () => {

        const log = { level: LogSeverityLevel.high, message: 'hola'} as LogEntity;
        await LogRepository.saveLog(log);
        expect( mockLogDatasource.saveLog ).toHaveBeenCalledWith( log );

    });


    test('getLogs should call the datasource with arguments', async () => {

        await LogRepository.getLogs( LogSeverityLevel.low);
        expect( mockLogDatasource.getLogs).toHaveBeenCalledWith(LogSeverityLevel.low)


    })
})