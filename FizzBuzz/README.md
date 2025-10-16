# FizzBuzz Documentation

First I used 
`
for (let i = 1; i < 101; i++)
if (i % 3 === 0) {
	console.log(Fizz)
} else if (i % 5 === 0) {
	console.log(Buzz)
} else (i % 3 === 0 && i % 5 === 0) {
	console.log(FizzBuzz)
}
`


Because I set the condition for the code to print the integers from 1 to 100 thus using

`
for (let i = 1; i < 101; i++);
`

Then I set the conditions for it to print the conditions 
If an integer in the counter is divisible by 3, print "Fizz";

if an integer in the counter is divisible by 5, print "Buzz";

if an integer in the counter is divisible by both 3 and 5, print "FizzBuzz".

by using the code 

`
if (i % 3 === 0) {
	console.log(Fizz)
} else if (i % 5 === 0) {
	console.log(Buzz)
} else (i % 3 === 0 && i % 5 === 0) {
	console.log(FizzBuzz)
}
`

But my initial code did not work.
Thus I started from the beginning and let the code print from 1 to 100 by using 

`
for (let i = 1; i < 101; i++) {
	console.log(i)
}
`

and it worked. 

Then I continued with adding the rest of the code for the conditions,

`
for (let i = 1; i < 101; i++) {
	if (i % 3 === 0) {
	console.log(Fizz)
} else if (i % 5 === 0) {
	console.log(Buzz)
} else if (i % 3 === 0 && i % 5 === 0) {
	console.log(FizzBuzz)
} else {
      console.log(i)}
  }
`

but I kept on getting errors. I was talking to sungmin about my code and he realised that the "" was missing for the words. Thus I added them and it worked. 

`
for (let i = 1; i < 101; i++) {
	if (i % 3 === 0) {
	console.log("Fizz")
} else if (i % 5 === 0) {
	console.log("Buzz")
} else if (i % 3 === 0 && i % 5 === 0) {
	console.log("FizzBuzz")
} else {
      console.log(i)}
  }
`

However I realised that the multiples of 15 was just showing fizz. After thinking for a while, I realised that the codes were read from the top and if 

`
if (i % 3 === 0) {
console.log("Fizz")
`

came before 

`
else if (i % 3 === 0 && i % 5 === 0) {
console.log("FizzBuzz")
`

, then all the multiples of 15 will write Fizz because the 

`
if (i % 3 === 0) {
console.log("Fizz")
`

was written first. 

Thus I changed the order and wrote 

`
for (let i = 1; i < 101; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
	console.log("FizzBuzz")
} else if (i % 5 === 0) {
	console.log("Buzz")
} else if (i % 3 === 0) {
	console.log("Fizz")
} else {
      console.log(i)}
  }
`

it worked perfectly.

