export function validateOperation(num1: number, num2: number, operator: string, result: number): boolean {
    switch (operator) {
        case '+':
            return num1 + num2 === result;
        case '-':
            return num1 - num2 === result;
        case '×':
            return num1 * num2 === result;
        case '÷':
            return num2 !== 0 && num1 / num2 === result;
        default:
            return false;
    }
}