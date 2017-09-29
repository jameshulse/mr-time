let T = require('../index');

describe('6 minutes', () => {
    test('in milliseconds', () => {
        expect(T(6).minutes.in.milliseconds).toEqual(360000);
    });

    test('in seconds', () => {
        expect(T(6).minutes.in.seconds).toEqual(360);
    });

    test('in minutes', () => {
        expect(T(6).minutes.in.minutes).toEqual(6);
    });

    test('in hours', () => {
        expect(T(6).minutes.in.hours).toEqual(0.1);
    });
})