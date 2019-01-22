// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function sayPersonalizedHello() {
	let name = prompt("What is your name?");
	function sayHello() {
		alert(`Hello ${name}`);
	}
	sayHello();
}

// ==== Challenge 2: Create a counter function ====
const counter = () => {
	// Return a function that when invoked increments and returns a counter variable.
	let score = 0;
	return function counterInner() {
		return score++;
	};
};

const newCounter = counter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
	let counter = 0;
	let innerObject = {
		increment: () => counter++,
		decrement: () => counter--
	};

	return makeDecision => {
		if (makeDecision === "increment") {
			innerObject.increment();
		} else if (makeDecision === "decrement") {
			innerObject.decrement();
		}
		return counter;
	};
};
//you need to include "increment" or "decrement" as attribute
const incrementOrdecrement = counterFactory();
// Return an object that has two methods called `increment` and `decrement`.
// `increment` should increment a counter variable in closure scope and return it.
// `decrement` should decrement the counter variable and return it.
