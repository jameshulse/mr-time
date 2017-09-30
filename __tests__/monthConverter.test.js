let T = require('../index');

test('12 months to 1 year', () => {
    expect(T(12).months.in.years).toEqual(1);
});