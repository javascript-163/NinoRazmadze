// 1 შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.

let children = [
    "lizi",
    "nika",
    "nutsa",
    "elene",
    "nini",
    "misho",
    "tina",
    "rati",
    "gio",
    "tata",
  ];
  
  for (let index = 2; index < children.length; index += 3) {
    console.log(children[index]);
  }
  // 2 შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.
  
  let number = 10;
  
  while (number >= 1) {
    console.log(number);
    number = number - 1;
  }
  
  // for
  for (let number = 10; number >= 1; number = number - 1) {
    console.log(number);
  }
  
  // 3 მოცემული მასივიდან
  //  let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
  // ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.
  
  let names1 = ["John", "Nick", "Bob", "Mary", "Bob", "Sue", "Ann", "Bob", "Bob"];
  
  for (remove = names1.length - 1; remove >= 0; remove--) {
    if (names1[remove] === "Bob") {
      names1.splice(remove, 1);
    }
  }
  console.log(names1);
  
  //
  
  let names = ["John", "Nick", "Bob", "Mary", "Bob", "Sue", "Ann", "Bob", "Bob"];
  let fuckBob = names.filter((item) => item !== "Bob");
  
  console.log(fuckBob);
  
  // 4 ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.
  
  function fun(number, power) {
    let result = 1;
    let count = 0;
  
    while (count < power) {
      result = result * number;
      count++;
    }
    return result;
  }
  console.log(fun(3, 3));
  
  
  // 6 შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120,
  
  function factorialCalculator(number) {
    let result = 1;
    let count = 1;
  
    while (count <= number) {
      result = result * count;
      count++;
    }
    return result;
  }
  console.log(factorialCalculator(5));
  
  // 7 შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.
  
  function CapitalizeString (string) {
  
    let firstLetter = string.charAt(0);
    let upperCase = firstLetter.toUpperCase();
  
    return upperCase + string.slice(1)
  
  
  }
  console.log(CapitalizeString("javascript"));
  
  // 9 შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]
  
  function stringToArray(){
    let string = "Hello, World"
    let newArray = string.split(",")
  return newArray
  
  }
  console.log (stringToArray())
=======
  "lizi",
  "nika",
  "nutsa",
  "elene",
  "nini",
  "misho",
  "tina",
  "rati",
  "gio",
  "tata",
];

for (let index = 2; index < children.length; index += 3) {
  console.log(children[index]);
}
// 2 შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.

let number = 10;

while (number >= 1) {
  console.log(number);
  number = number - 1;
}

// for
for (let number = 10; number >= 1; number = number - 1) {
  console.log(number);
}

// 3 მოცემული მასივიდან
//  let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
// ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.

let names1 = ["John", "Nick", "Bob", "Mary", "Bob", "Sue", "Ann", "Bob", "Bob"];

for (remove = names1.length - 1; remove >= 0; remove--) {
  if (names1[remove] === "Bob") {
    names1.splice(remove, 1);
  }
}
console.log(names1);

//

let names = ["John", "Nick", "Bob", "Mary", "Bob", "Sue", "Ann", "Bob", "Bob"];
let fuckBob = names.filter((item) => item !== "Bob");

console.log(fuckBob);

// 4 ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

function fun(number, power) {
  let result = 1;
  let count = 0;

  while (count < power) {
    result = result * number;
    count++;
  }
  return result;
}
console.log(fun(3, 3));


// 6 შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120,

function factorialCalculator(number) {
  let result = 1;
  let count = 1;

  while (count <= number) {
    result = result * count;
    count++;
  }
  return result;
}
console.log(factorialCalculator(5));

// 7 შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

function CapitalizeString (string) {

  let firstLetter = string.charAt(0);
  let upperCase = firstLetter.toUpperCase();

  return upperCase + string.slice(1)


}
console.log(CapitalizeString("javascript"));

// 9 შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]

function stringToArray(){
  let string = "Hello, World"
  let newArray = string.split(",")
return newArray

}
console.log (stringToArray())
