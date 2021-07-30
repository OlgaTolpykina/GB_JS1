/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/
'use strict';

/**
 * Функция выполняет сложение двух аргументов
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function toSum (a, b) {
    return a + b;
}

/**
 * Функция выполняет вычитание двух аргументов
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function toDecrease (a, b) {
    return a - b;
}

/**
 * Функция выполняет деление одного аргумента на другой
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function toDivide (a, b) {
    return a / b;
}

/**
 * Функция выполняет умножение одного аргумента на другой
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */

function toMultiply (a, b) {
    return a * b;
}

/**
 * Функция выполняет одну из арифметических операций с двумя аргументами
 * @param {number} arg1 значение аргумента
 * @param {number} arg2 значение аргумента
 * @param {string} operation название выполняемой арифметической операции
 * @returns {number}  
 */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return toSum(arg1, arg2);
        case 'вычитание':
            return toDecrease(arg1, arg2);
        case 'умножение':
            return toMultiply(arg1, arg2);
        case 'деление':
            return toDivide(arg1, arg2);
        default:
            throw new Error('Такая операция не предусмотрена. Укажите другую');    
    }
}

console.log(mathOperation(6, 3, 'вычитание'));