let T = require('../index');

test('Correctly converts one day to 24 hours', () => {
    expect(T(1).days.in.hours).toEqual(24);
});