let T = require('../index');

test('Milliseconds', () => {
    expect(T(1).seconds.in.milliseconds).toEqual(1000);
});