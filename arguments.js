// sum = function() {
//   args = Array.from(arguments); 
//   return args.reduce((a,b) => a+b);
// }

// sum = function(...args) {
//   return args.reduce((a,b) => a+b)
// }


// console.log(sum(1, 2, 3, 4)) //=== 10;
// console.log(sum(1, 2, 3, 4, 5)) //=== 15;



// Function.prototype.myBind = function(context) {
//   const that = this
//   let args = Array.from(arguments).slice(1);
//   return function() {
//     args = args.concat(Array.from(arguments));
//     that.apply(context, args);
//   };
// }


// Function.prototype.myBind = function(context, ...args) {
//   const that = this;
//   let args1 = args;
//   return function(...argues) {
//     args1 = args1.concat(argues);
//     that.apply(context, args);
//   };
// }

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true


// function curriedSum (numArgs) {
//   let nums = [];
//   return function _curry (digit) {
//     nums.push(digit);
//     if (nums.length === numArgs) {
//       return nums.reduce((a, b) => a + b);
//     } else {
//       return _curry;
//     }
//   }
// }

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1));

Function.prototype.curry = function(numArgs) {
  let answer = [];
  let that = this;
  return function _curry (input) {
    answer.push(input);
    if (answer.length === numArgs) {
      // return that.apply(that, answer);
      return that.call(that, ...answer);
    } else {
      return _curry;
    }
  } 
}

function add(num1, num2) {
  return num1 + num2;
}

console.log(add.curry(2)(50)(49));