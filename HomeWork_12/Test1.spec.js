function sum (a, b) {
    return a + b;
}
test('Return sum', () => {
    expect(sum(0.1, 0.2)).toBe(0.3);
});