import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// Defining Functions with parameters

// function myFunc(name, weather) {
//   console.log("Hello " + name + ".");
//   console.log("Today the weather is " + weather);
// }
// myFunc("Madmax", "Rainy")


// function myFunc1(name, weather = "Sunny") {
//   console.log("Hello " + name + ".");
//   console.log("Today the weather is " + weather);
// }
// myFunc1("Madmax")

// Using a REST parameter
// function myFunc(name, weather, ...extraArgs) {
//   console.log("Hello " + name + ".");
//   console.log("Today the weather is " + weather);
//   for(let i = 0; i < extraArgs.length; i++){
//     console.log("Extra args:" + extraArgs[i]);
//   }
// }

// myFunc("Madmax", "Sunny", "one", "two", "three");

// Defining Functions That Return Results


// function myFunc (name) {
//   return ("Hello " + name + ".")

// }

// console.log(myFunc("Madmax"))

// Using Functions as Argument to the other function.

// function myfunc(nameFunction) {
//   return ("Hello " + nameFunction() + ".")
// }

// var name = myfunc(function () {
//   return "Sunil"
// })

// console.log(name)

// Chaining Functions calls 

// function myFunc(nameFunction) {
//   return ("Hello" + nameFunction() + ".")
// }

// function printName(nameFunction, printFunction) {
//   printFunction(myFunc(nameFunction));
// }

// printName(function() {
//   return "Sunil"
// },console.log)


// using arrow functions

const myFunc = (nameFunction) => ("Hello " + nameFunction() + ".");

const printName = (nameFunction, printFunction) => printFunction(myFunc(nameFunction));

printName(function () {
  return "Sunil"
}, console.log);


//using let to Declare variables 

function messageFunction(name, weather) {
  let message = "Hello, Sunil"
  if (weather == "sunny") {
    let message = "It is a nice day";
    console.log(message);
  } else {
      let message = "It is " + weather + " today.";
      console.log(message);
  }
  console.log(message);
}

messageFunction("Madmax", "raining")