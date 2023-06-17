#!/usr/bin/node
// Script imports a dictionary of occurrences by user id

const { dict } = require('./101-data.js');
const Dictn = {};
for (const N in dict) {
    if (Dictn[dict[N]] === undefined) {
	Dictn[dict[N]] = [];
    }
    Dictn[dict[N]].push(N);
}
console.log(Dictn);
