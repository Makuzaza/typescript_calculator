export class Calculator {
    // Initialize variables to store input values and operation
    currentInput: string = ''; // The current input value as a string.
    previousInput: string = ''; // The previous input value as a string.
    operation: string | null = null; // The current operation symbol (+, -, *, /) or null if none.

/**
 * Calculates the result of the current operation and updates the current input value.
 * If the previous or current input values are not valid numbers, or the operation is null, does nothing.
 */

calculateResult(): void {
    // Check if inputs and operation are valid
    if (!this.isValidNumber(this.currentInput) || !this.isValidNumber(this.previousInput) || this.operation === null) {
        return; // If not, do nothing
      }

 // Calculate result based on current operation
let result: number;
const currentNum = parseFloat(this.currentInput);
const previousNum = parseFloat(this.previousInput);

switch (this.operation) {
    case '+':
      result = previousNum + currentNum;
      break;
    case '-':
      result = previousNum - currentNum;
      break;
    case '*':
      result = previousNum * currentNum;
      break;
    case '/':
      result = previousNum / currentNum;
      break;
    default:
      result = 0;
  }

   // Update current input value with result
this.currentInput = result.toString();
  // Clear previous input and operation
this.previousInput = '';
this.operation = null;
  // Update display
this.updateDisplay();
}

/**
 * Appends a number to the current input value and updates the display.
 * @param num - The number to append.
 */

inputNumber(num: string): void {
    // If current input is "0", replace it with the new number
    if (this.currentInput === '0') {
        this.currentInput = num;
    } else {
        this.currentInput += num;
    }
    this.updateDisplay();
}

/**
 * Sets the current operation and moves the current input value to the previous input value.
 * If there is already a previous input value, calculates the result first.
 * @param op - The operation symbol to set.
 */

inputOperator(op: string): void {
    // If there is already a previous input value, calculate the result first
    if (this.previousInput !== '') {
      this.calculateResult();
    }
    // Set the operation and move current input value to previous input
    this.operation = op;
    this.previousInput = this.currentInput;
    this.currentInput = '';
  }

  /**
 * Clears the current and previous input values and the operation and updates the display.
 */
  clearDisplay(): void {
    this.currentInput = '0';
    this.previousInput = '';
    this.operation = null;
     // Update display
    this.updateDisplay();
  }

/**
 * Updates the display element with the current input value.
 */
updateDisplay(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    if (display) {
      display.value = this.currentInput;
    }
  }

  // Step 7: Utility function to check if a string is a valid number
  private isValidNumber(numStr: string): boolean {
    return /^\d*\.?\d+$/.test(numStr);
  }
}

const calculator = new Calculator();

(window as any).calculator = calculator;