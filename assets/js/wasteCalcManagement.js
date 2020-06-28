console.log("top place - doc state " + document.readyState);

//"loading", "interactive", "complete"
if (document.readyState == "complete") {
  console.log("inside function - doc state " + document.readyState);

  const targetElchilds = document.querySelector(".formToglerControls__itemNumbers").children;
  for (var i = 0; i < targetElchilds.length; i++) {
    targetElchilds[i].onclick = changeActiveChild(i);
  }
}

if (document.readyState == "loading") {
  console.log("inside function - doc state " + document.readyState);
}

if (document.readyState == "interactive") {
  console.log("inside function - doc state " + document.readyState);
}

/*
const targetElchilds = document.querySelector(".formToglerControls__itemNumbers").children;
for (var i = 0; i < targetElchilds.length; i++) {
  targetElchilds[i].onclick = changeActiveChild(i);
}
*/

function changeActiveChild(argument) {
  //test
  console.log("active function " + argument);//test

  let _this = this;
  let targets = document.querySelectorAll(".formToglerControls__itemNumber");
  let targetsCount = targets.length;

  for (let i = 0; i < targetsCount; i++) {
    targets[i].classList.remove("active");
  }

  _this.classList = _this.classList + " active";

}
