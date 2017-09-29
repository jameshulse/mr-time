let T = require('../index');

describe('Correctly convert milliseconds to', () => {
    test('milliseconds', () => {
        expect(T(200).milliseconds.in.milliseconds).toEqual(200);
    });

    test('seconds', () => {
        expect(T(5000).milliseconds.in.seconds).toEqual(5);
    });

    test('minutes', () => {
        expect(T(360000).milliseconds.in.minutes).toEqual(6);
    });
});