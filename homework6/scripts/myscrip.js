// 1. შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.
let sentence = "AC milan is the best team in the worldd.";
function findLargestWord() {
  let splitsentence = sentence.split(" ");
  let longestWord = splitsentence.reduce(function (longest, currentWord) {
    if (currentWord.length > longest.length) {
      return currentWord;
    } else {
      return longest;
    }
  }, " ");
  return longestWord;
}
console.log(findLargestWord());

// 2. შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2, ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით.
let calculator = {
  num1: 10,
  num2: 5,
  add: function () {
    return this.num1 + this.num2;
  },
  subtruct: function () {
    return this.num1 - this.num2;
  },
  multiply: function () {
    return this.num1 * this.num2;
  },
  divide: function () {
    return this.num1 / this.num2;
  },
};

// 3. შექმენით ფუნქცია, რომელიც შეიძლება გამოყენებულ იქნეს როგორც ფუნქციის ჰოისტინგის მაგალითად. შექმენით ეს ფუნქცია მისი გამოძახების შემდეგ და აღწერეთ კომენტარებით თუ როგორ მუშაობს იგი ჰოისტინგის მეშვეობით.

let children = ["mari", "gio", "nutsa", "nika"];
console.log(addChild());

function addChild() {
  if (children.length < 5) {
    children.splice(2, 0, "jemali", "nini");
  } else {
    children.splice(2, 0, "nini");
  }
  return children;
}
// იმის მიუხედავად, რომ ფუნქცია მანამდეa გამოძახებული, სანამ კოდს დავწერდი, მაინც მუშაობს, რადგან ჰოისტინგის მეშვეობით ჯავასკრიპტი ფუნქციას კოდის თავში აქცევს, სანამ გაეშვება.
