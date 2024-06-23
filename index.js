// 1. Sum Function
function calculateSum(a, b) {
    return a + b;
}

function showSum() {
    const a = parseFloat(document.getElementById('sumA').value);
    const b = parseFloat(document.getElementById('sumB').value);
    document.getElementById('sumOutput').innerText = 'Sum: ' + calculateSum(a, b);
}


// 2. Even Function

function isEven(number) {
    return number % 2 === 0;
}

function showIsEven() {
    const number = parseInt(document.getElementById('evenoddNumber').value);
    const result = isEven(number) ? 'The number ' + number + ' is even' : 'The number ' + number + ' is odd';
    document.getElementById('isEvenOutput').innerText = result;
}



// 3. Find the maximum number Function

function findMax(numbers) {
    return Math.max(...numbers);
}

function showMax() {
    const numbers = document.getElementById('maxNumbers').value.split(',').map(Number);
    document.getElementById('maxOutput').innerText = 'Max number: ' + findMax(numbers);
}


// 4. Reverse Function

function reverseString(str) {
    return str.split('').reverse().join('');
}

function showReversedString() {
    const str = document.getElementById('reverseString').value;
    document.getElementById('reversedOutput').innerText = 'Reversed string: ' + reverseString(str);
}


// 5. Filter out odd numbers Function

function filterOddNumbers(numbers) {
    return numbers.filter(num => num % 2 !== 0);
}

function showOddNumbers() {
    const numbers = document.getElementById('oddNumbersInput').value.split(',').map(Number);
    document.getElementById('oddNumbersOutput').innerText = 'Odd numbers: ' + filterOddNumbers(numbers);
}



// 6. S um all numbers in array Function

function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

function showArraySum() {
    const numbers = document.getElementById('arraySumInput').value.split(',').map(Number);
    document.getElementById('arraySumOutput').innerText = 'Sum of array: ' + sumArray(numbers);
}



// 7. Ascending order Function
function sortArray(numbers) {
    return numbers.slice().sort((a, b) => a - b);
}

function showSortedArray() {
    const numbers = document.getElementById('sortArrayInput').value.split(',').map(Number);
    document.getElementById('sortedArrayOutput').innerText = 'Sorted array: ' + sortArray(numbers);
}



// 8. Capitalize the first letter Function
function capitalizeFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function showCapitalized() {
    const str = document.getElementById('capitalizeInput').value;
    document.getElementById('capitalizedOutput').innerText = 'Capitalized string: ' + capitalizeFirstLetter(str);
}
