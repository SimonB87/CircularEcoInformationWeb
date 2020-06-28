function toggleForm(show, hide) {
  const targetSelectorShow = ".formTogler_panel" + show;
  const targetSelectorHide = ".formTogler_panel" + hide;
  const targetsShow = document.querySelectorAll(targetSelectorShow);
  const targetsHide = document.querySelectorAll(targetSelectorHide);

  for (let i = 0; i < targetsHide.length; i++) {
    targetsHide[i].style.display = "none";
  }

  for (let j = 0; j < targetsShow.length; j++) {
    targetsShow[j].style.display = "block";
  }

  if (show == 1) {
    document.querySelector("#formToglerActions__back .button").classList.remove("disabled");

    document.querySelector("#formToglerControls_item1 .button").classList.add("primary");
    document.querySelector("#formToglerControls_item2 .button").classList.remove("primary");
    document.querySelector("#formToglerControls_item3 .button").classList.remove("primary");
    //document.querySelector("#formToglerActions__forward .button").classList.add("disabled");
  } else if (show == 2) {
    document.querySelector("#formToglerActions__back .button").classList.add("disabled");

    document.querySelector("#formToglerControls_item1 .button").classList.remove("primary");
    document.querySelector("#formToglerControls_item2 .button").classList.add("primary");
    document.querySelector("#formToglerControls_item3 .button").classList.remove("primary");
    //document.querySelector("#formToglerActions__forward .button").classList.remove("disabled");
  }
}

//console.log("top place - doc state " + document.readyState);

/* if (document.readyState == "loading") {
  console.log("inside function - doc state " + document.readyState);
}

if (document.readyState == "interactive") {
  console.log("inside function - doc state " + document.readyState);
} */

//"loading", "interactive", "complete" - (document.readyState == "complete")
/*
console.log("inside function - doc state " + document.readyState);

const targetElchilds = document.querySelector(".formToglerControls__itemNumbers").children;
for (var i = 0; i < targetElchilds.length; i++) {
  targetElchilds[i].onclick = changeActiveChild(i);
}


const targetElchilds = document.querySelector(".formToglerControls__itemNumbers").children;
for (var i = 0; i < targetElchilds.length; i++) {
  targetElchilds[i].onclick = changeActiveChild(i);
}
*/

/* formTogler_panel2, formTogler_panel1 */

/*
function changeActiveChild(argument) {
  //test
  console.log("active function / loading " + argument);//test

  if (document.readyState == "complete") {
    //test
    console.log("active function / complete " + argument);//test

    let _this = this;
    let targets = document.querySelectorAll(".formToglerControls__itemNumber");
    let targetsCount = targets.length;

    for (let i = 0; i < targetsCount; i++) {
      targets[i].classList.remove("active");
    }

    _this.classList = _this.classList + " active";
  }
}
*/