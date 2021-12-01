const filterFoodPrice = require('./food');

const food = [
  { kind: 'potato', price: 10 },
  { kind: 'bred', price: 16 },
  { kind: 'pepper', price: 27 },
  { kind: 'banana', price: 32 },
  { kind: 'lemon', price: 50 }
];

describe('Sorted array test', () => {
    test('Array length = 3', () => {
        expect(filterFoodPrice(food, 12, 40)).toHaveLength(3);
    });
    test('Object has pepper: 27', () => {
        expect(filterFoodPrice(food, 12, 40)).toEqual(
            expect.arrayContaining([
              expect.objectContaining({kind: 'pepper'}),
              expect.objectContaining({price: 27})
            ])
          );
    });
    test('Sorted array contains 2,3,4 elements of the initial array', () => {
      let expected = [food[1], food[2], food[3]];
        expect(filterFoodPrice(food, 12, 40)).toEqual(expected);
  });
    test('First element price > min value', () => {
      expect(filterFoodPrice(food, 12, 40)[0].price).toBeGreaterThan(12);
});
    test('Third element price < max value', () => {
      expect(filterFoodPrice(food, 12, 40)[2].price).toBeLessThan(40);
});
    test("Sorted array contains lemon element", () => {
      let expected = {kind: 'lemon', price: 50};
      expect(filterFoodPrice(food, 12, 40)).not.toContainEqual(expected);
});
test("Sorted array doesn't match initial aray", () => {
  expect(filterFoodPrice(food, 12, 40)).not.toEqual(food);
});
test("First array element < second one < third one", () => {
  let first = filterFoodPrice(food, 12, 40)[0].price;
  let second = filterFoodPrice(food, 12, 40)[1].price;
  let third = filterFoodPrice(food, 12, 40)[2].price;
  expect(first < second && second < third).toBe(true);
});
});
