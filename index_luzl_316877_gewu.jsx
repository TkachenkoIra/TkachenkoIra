11 + false
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

16 - true
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

45 * kiwi
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
69 * 32,94,72,81,86,35,51,4,97,49,78,99,36,84,85,73,69,31,77,10,27,75,93,91,59,35,11,11,61,54,89,90,87,86,6,77,50,55,46,54,79,73
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

