const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

describe('Array tests', () => {
    test('The array should contain "admin" element', () => {
        expect(userList).toContain('admin');
    });
    test('First element is "Nick"', () => {
        expect(userList[0]).toBe('Nick');
    });
    test('Last element is "new_user_2"', () => {
        expect(userList[userList.length - 1]).toBe('new_user_2');
    });
    test('Array length = 5', () => {
        expect(userList).toHaveLength(5);
    });
    test('The type of third element is string', () => {
        expect(typeof userList[2]).toBe('string');
    });
    test('There is no 8th element in the array', () => {
        expect(userList[7]).toBeFalsy();
    }); 
});