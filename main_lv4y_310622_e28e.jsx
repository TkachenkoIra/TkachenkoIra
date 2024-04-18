const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
82 - apple
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

11,3,4,94,78,27,31,29,69,55,29,65,5,93,27,56,89,93,41,34,51,67,54,70,81,60,68,70,10,52,38,42 - 7,28,80,44,58,94,39,89,51,40,23,16,61,76,66,93,41,73,44,59,83,36,22,2,29,71,40,95,69,75,11,32,51
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const sum = (a, b) => a + b;
const formatDate = date => new Date(date).toLocaleDateString();
const findSmallestNumber = numbers => Math.min(...numbers);
62 * 21

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
kiwi


const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
banana - 75
let array = getRandomArray(); array.forEach(item => console.log(item));
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
true * 32

const getRandomSubset = (array, size) => array.slice(0, size);
// This is a comment
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
function addNumbers(a, b) { return a + b; }
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
kiwi

const isEven = num => num % 2 === 0;
grape


function addNumbers(a, b) { return a + b; }
