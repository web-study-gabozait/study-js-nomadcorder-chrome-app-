// a = 221;
// b = a - 5;
// console.log(b);
// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// console.log(daysOfWeek[1]);

// const dhInfo = {
//   name: "동현",
//   age: "17",
//   gender: "male",
//   isHandsome: true,
//   fav: ["soccer", "programing", ""],
// };

// console.log(dhInfo.fav);

// function sayhello(id, age) {
//   return `Hello ${id} you have ${age} years old`;
// }

// const greetdh = sayhello("dh", 17);
// console.log(greetdh);
function printf(f) {
  console.log(f);
}

const calculator = {
  plus: function (n1, n2) {
    return n1 + n2;
  },
  minus: function (n1, n2) {
    return n1 - n2;
  },
  multiply: function (n1, n2) {
    return n1 * n2;
  },
  dividing: function (n1, n2) {
    return n1 / n2;
  },
};

const title = document.querySelector("#title");

function handleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handleClick);
