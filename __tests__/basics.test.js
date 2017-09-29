let T = require('../index');

test('Can instantiate instance', () => {
    expect(T(10)).not.toBeNull();
});

test('NaN throws exception', () => {
    expect(() => T(NaN)).toThrow();
});

test('Undefined throws exception', () => {
    expect(() => T(undefined)).toThrow();
});

test('Null throws exception', () => {
    expect(() => T(null)).toThrow();
});

test('Infinity returns infinity', () => {
    expect(T(Infinity)).toEqual(Infinity);
});