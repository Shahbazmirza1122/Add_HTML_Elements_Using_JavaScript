// var btn = document.getElementById("btn");
// btn.onclick = function () {
//   console.log(Math.random() * 10);
// };

// function userName() {
//   var name = "Ali";
//   var fname = "Raza";
//   var greeting = "Conratulations";

//   console.log(name + " " + fname + " " + greeting);
// }

// addEventListener function got two parametters,
// 1st click and second will be a function

// btn.addEventListener("click", userName);

// below code will also work for button
// btn.onclick(userName);

// How to add list Item in HTML using javaScript?

// var addBtn = document.getElementById("add-Item");

// addBtn.addEventListener("click", function () {
//   var newList = document.createElement("li");
//   var newText = document.createTextNode("Item Three");
//   newList.appendChild(newText);
//   newList.id = "3";
//   console.log(newList);
// });

// console.log(newList);

// newList.appendChild(document.createTextNode("Item Three"));
// newList.id = "3";
// function clickme() {
//   console.log("Button Clicked");
// }

// btn.addEventListener("click", clickme);

// var addBtn = document.getElementById("add-Item");
// var listItem = document.getElementById("todo-list");
// var item = document.getElementById("item1");
// // console.log(item);
// var inputBox = document.getElementById("inText");

// inputBox.addEventListener("input", function (e) {
//   console.log(e.target.value);
// });

// addBtn.addEventListener("click", function () {
//   var NewList = document.createElement("li");
//   var TextNode = document.createTextNode(
//     "Item " + " " + (listItem.childElementCount + 1)
//   );

//   NewList.appendChild(TextNode);
//   NewList.id = "Item" + " " + (listItem.childElementCount + 1);
//   console.log(NewList);
//   listItem.appendChild(NewList);
//   listItem.insertBefore(NewList, item);
//   item = listItem.firstElementChild;
//   console.log(item);
//   console.log(listItem.childElementCount);
//   // console.log(NewList.childElementCount);
// });

// var addBtn = document.getElementById("add-Item");
// var list = document.getElementById("todo-list");
// console.log(list.childElementCount);

// addBtn.addEventListener("click", function () {
//   var newList = document.createElement("li");
//   var textNode = document.createTextNode("Item" + " " + list.childElementCount);
//   newList.appendChild(textNode);
//   newList.id = "Item 3" + " " + list.childElementCount;
//   list.appendChild(newList);

//   // console.log(newList);
// });

var addBtn = document.getElementById("add-Item");
var list = document.getElementById("todo-list");
var productList = document.getElementById("item1");
var inputBox = document.getElementById("textBox");
var currentValue = "";
inputBox.addEventListener("input", function (e) {
  currentValue = e.target.value;
});
inputBox.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    addItem();
  }
});
console.log();
console.log(list.childElementCount);

addBtn.addEventListener("click", addItem);

function addItem() {
  if (
    currentValue !== undefined &&
    currentValue !== "" &&
    currentValue !== null
  ) {
    var newList = document.createElement("li");
    newList.id = "item " + (list.childElementCount + 1);
    var textNode = document.createTextNode(currentValue);
    newList.appendChild(textNode);
    list.appendChild(newList);
    list.insertBefore(newList, productList);

    inputBox.value = "";
    currentValue = "";

    console.log(newList);
  } else {
    console.log("pease enter a value");
  }
}
