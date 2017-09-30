let T = require('../index');

test('Correctly converts 5 weeks to 840 hours', () => {
    expect(T(5).weeks.in.hours).toEqual(840);
});