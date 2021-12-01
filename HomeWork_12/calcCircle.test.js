const calcCircle = require('./calcCircle');

describe('Circle tests', () => {
    test('Circle length = 138.2', () => {
        let value = calcCircle.getCircleLength(22);
        expect(Math.round(value * 10) / 10).toBe(138.2);
    });
    test('Test Circle length without parameter', () => {
        let value = calcCircle.getCircleLength();
        expect(Math.round(value * 10) / 10).toBe(138.2);
    });
    test('Circle area = 254.47', () => {
        let value = calcCircle.getCircleArea(9);
        expect(Math.round(value * 100) / 100).toBe(254.47);
    });
    test('Test Circle area without parameter', () => {
        let value = calcCircle.getCircleArea();
        expect(Math.round(value * 100) / 100).toBe(254.47);
    });
});