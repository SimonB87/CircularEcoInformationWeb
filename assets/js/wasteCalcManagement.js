const targetElchilds = document.querySelector(".formToglerControls__itemNumbers").children;
for (var i = 0; i < targetElchilds.length; i++) {
  targetElchilds[i].onclick = changeActiveChild(i);
}


function changeActiveChild(argument) {

  console.log("active function " + argument);

  let _this = this;
  let targets = document.querySelectorAll(".formToglerControls__itemNumber");
  let targetsCount = targets.length;

  for (let i = 0; i < targetsCount; i++) {
    targets[i].classList.remove("active");
  }

  _this.classList = _this.classList + " active";

}
