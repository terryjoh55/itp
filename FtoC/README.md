# Fahrenheit to Celsius Converter Documentation file

First I used the code 

`
let f = prompt ("What is the temperature in Fahrenheit")' 
let c = "What is the temperature in Celsius"
console.log(c === (f-32)*5/9)
`

which gave me a false which is true. However, as I want the answer for the equation, I need to debug it. 

I don't know why but I just deleted the two == and it gave me the answer. I need to ask Prof Rome for the answer. I found out that === is logical assigment which is true or flase but = gives a number. And this code worked.

`
let f = prompt ("What is the temperature in Fahrenheit")
let c = "What is the temperature in Celsius"
console.log(c = (f-32)*5/9)
`

As temperature is in one decomal places, I added the .toFixed(1)

And my code was

` 
let f = prompt ("What is the temperature in Fahrenheit")
let c = "What is the temperature in Celsius"
console.log((c = (f-32)*5/9).toFixed(1))
`

and it worked