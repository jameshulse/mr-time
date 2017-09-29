let T = require('../index');

describe('3 hours', () => {
    test('in milliseconds', () => {
        expect(T(3).hours.in.milliseconds).toEqual(1.08e+7);
    });

    test('in seconds', () => {
        expect(T(3).hours.in.seconds).toEqual(10800);
    });

    test('in minutes', () => {
        expect(T(3).hours.in.minutes).toEqual(180);
    });

    test('in hours', () => {
        expect(T(3).hours.in.hours).toEqual(3);
    });
})