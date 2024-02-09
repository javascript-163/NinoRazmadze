// 1;
function calculateSquare(num) {
    return num * num;
  }

  console.log(calculateSquare(9));

  const calc = (num) => {
    return num * num;
  };
  console.log(calc(5));
  //2
  function celiusToFahrenfeit(num) {
    return (num * 9) / 5 + 32;
  }
  console.log(celiusToFahrenfeit(1));
  // 3;
  function checkRange(num, first, last) {
    if (num > first && num < last) {
      console.log("number is in the range!");
    } else {
      console.log("number is not in the range");
    }
  }
  console.log(checkRange(7, 5, 10));
  // 4;
  function checkLeapYear() {
    let year = prompt("enter year");
    if (year % 4 === 0) {
      alert("the year is leap");
    } else {
      alert("the year is not leap");
    }
  }

  checkLeapYear();

  // 5;
  function calculator() {
    const num1 = Number(prompt("enter number"));
    const num2 = Number(prompt("enter another number"));
    const operator = prompt("enter arithmetic operator");

    if (operator === "+") {
      alert(num1 + num2);
    } else if (operator === "-") {
      alert(num1 - num2);
    } else if (operator === "*") {
      alert(num1 * num2);
    } else if (operator === "/") {
      if (num2 === 0) {
        alert("division by 0 not allowed");
      } else {
        alert(num1 / num2);
      }
    }
  }
  calculator();