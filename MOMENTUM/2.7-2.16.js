// // #2.7 함수에 데이터를 넣는 방법
// function sayHello1(){
//     console.log("Hello");
//  }

//  sayHello1();
//  console.log("lalalal");
//  // 결과 출력 시 Hello 출려됨

// // #2.8 데이터를 받는 방법
// //   function sayHello2(nameOfPerson, age){
// //     console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
// //  }

// //  sayHello2("nico",10);

//  // #계산기 만들기
// //  function plus (firstNumber, secondNumber){
// //      console.log(firstNumber + secondNumber);
// //  }

// // function divide(a, b){
// //     console.log(a / b)
// // }

// //  plus(8, 60);
// //  divide(4, 8)

//  //변수안에 함수 만들기
//  const player1 = {
//      name: "nico", 
//      sayHelloA: function(otherPersonsName){
//         console.log("hello! " + otherPersonsName + " nice to meet you");
//      }
//  }

//  console.log(player1.name)
//  player1.sayHelloA("nico");

//  // #2.10 숙제

// //  const calculator = {
// //      plus: function(a, b){
// //      console.log(a + b);
// //      },
// //      minus: function(a, b){
// //      console.log(a - b);    
// //      },
// //      divide: function(a, b){
// //          console.log(a /b);
// //      },
// //      power: function(a, b){
// //          console.log(a**b);
// //      }
// //  }

// //  calculator.plus (1, 2);
// //  calculator.minus (1, 2);
// //  calculator.divide (1, 2);
// //  calculator.power (2, 1);

//  //#2.11 Returns 
// //  const age = 96;
// //  function calculateKrAge(ageOfForeigner){
// //      return ageOfForeigner + 2;
// //  }

// //  const krAge = calculateKrAge(age);
//  //calculateKrAge를 실행시키면 96이라는 argument가 age 자리로 대체됨
//  // 96이 64번째 줄 ()안으로 들어감 

//  console.log(krAge);

// //  #2.11 Returns
//  const calculator = {
//     plus: function(a, b){
//     return a + b;
//     },
//     minus: function(a, b){
//     return a - b;    
//     },
//     divide: function(a, b){
//     return a / b;
//     },
//     power: function(a, b){
//     return a**b;
//     }
// }
//  const plusResult = calculator.plus(2,3);
//  const minusResult = calculator.minus(plusResult, 10);
//  const divideResult = calculator.divide(10, minusResult);
//  const powerResult = calculator.power (plusResult, minusResult);
//  console.log(plusResult);
 
 //#2.13 Conditionals
 const age = parseInt(prompt("How old are you?"));

 parseInt
 console.log(isNaN(age));

 if(isNaN(age || age < 0)){
     console.log("please write a real positive number");
 } else if (age < 18) {
     console.log("you are too yung");
} else if (age >= 18 && age <= 50) {
        console.log("you can drink");
        
} else if (age > 50 && age <= 80) {
        console.log("you should exercise");        
} 
 else if (age > 80) {
    console.log("you can do whatever you want.");
    
} 
