// 1
let action = "move";
switch (action) {
  case "move":
    alert("You're moving!");
    break;
  case "jump":
    alert("You're jumping!");
    break;
  case "run":
    alert("You're running!");
  default:
    alert("Invalid action.");
}
console.log(action);

// 2
let vegetables = "Broccoli" //or Carrot


switch (vegetables) {
  case "Carrot":
    alert("Hello");
    break;
  case "Broccoli":
    alert("Welcome");
    break;
  default:
    alert("Neither");
}
console.log(vegetables)


// 3
function canVote(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
canVote;
console.log(canVote(14));

// 4
let password = prompt("please enter your password");
function passwordTester(password) {
  if (password.length < 3) {
    alert("your password is terrible");
  } else if (password.length >= 3 && password.length <= 6) {
    alert("your password is weak");
  } else if (password.length >= 6 && password.length <= 8) {
    alert("your password is medium");
  } else if (password.length >= 8 && password.length <= 16) {
    alert("your password is strong");
  }
  if (!isNaN(password)) {
    alert("Password should not only contain numbers");
  }
}
passwordTester(password);
