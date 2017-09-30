let T = require('../index');

test('Correctly converts 3 years to 36 months', () => {
    expect(T(3).years.in.months).toEqual(36);
});

test('Correctly converts 2 years to 730 days', () => {
    expect(T(2).years.in.days).toEqual(730);
});