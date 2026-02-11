export function declinationMinutes(n: number) {
    const cases = [2, 0, 1, 1, 1, 2];
    const titles = ['минута', 'минуты', 'минут'];

    return titles[(n % 100 > 4 && n % 100 < 20) ? 2 : cases[(n % 10 < 5) ? n % 10 : 5]]
}
