import { LogEntity } from "../../entities/log.entities";
import { CheckService } from "./check-services"


describe('Checkservice UseCase', () => {

    const mockRepository = {
        saveLog: jest.fn(),
        getLogs: jest.fn(),
    }

    const succeddCallback = jest.fn();
    const errorCallback = jest.fn();

    const checkService = new CheckService(
        mockRepository,
        succeddCallback,
        errorCallback
    );

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('should call succeddCallback when fetch return true', async () => {    

        const wasOk = await checkService.execute('https://google.com')

        expect(wasOk).toBe(true);
        expect( succeddCallback ).toHaveBeenCalled();
        expect( errorCallback ).not.toHaveBeenCalled();
        expect(mockRepository.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
    });

    test('should call errorCallback when fetch return false', async () => {    

        const wasOk = await checkService.execute('https://googddddddle.com')

        expect(wasOk).toBe(false);
        expect( succeddCallback ).not.toHaveBeenCalled();
        expect( errorCallback ).toHaveBeenCalled();
        expect(mockRepository.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
    });
});