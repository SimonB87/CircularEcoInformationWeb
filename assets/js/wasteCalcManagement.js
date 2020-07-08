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
    //enable calculate button
    document.querySelector("#formToglerActions__send .submitButton").classList.remove("disabled");

  } else if (show == 2) {
    document.querySelector("#formToglerActions__back .button").classList.add("disabled");

    document.querySelector("#formToglerControls_item1 .button").classList.remove("primary");
    document.querySelector("#formToglerControls_item2 .button").classList.add("primary");
    document.querySelector("#formToglerControls_item3 .button").classList.remove("primary");

  }
}

function calculateWaste() {
  //Fix show panels
  hideInputs(2);
  hideInputs(1);

  manageResults();
  showResuts(3);

  function manageResults() {
    const targetEl = document.querySelector("#formToglerActions__send .submitButton");
    const valueEl = targetEl.classList.contains("disabled");
    if (!valueEl) {
      document.querySelector("#wasteResultNotice1").innerHTML = document.querySelector("#naklady_oh").value;
      document.querySelector("#wasteResultNotice2").innerHTML = document.querySelector("#prijmy_oh").value;
    }
  }

  function hideInputs(hide) {
    const targetSelectorHide = ".formTogler_panel" + hide;
    const targetsHide = document.querySelectorAll(targetSelectorHide);

    for (let i = 0; i < targetsHide.length; i++) {
      targetsHide[i].style.display = "none";
    }
  }

  function showResuts(show) {
    const targetSelectorShow = ".formTogler_panel" + show;
    const targetsShow = document.querySelectorAll(targetSelectorShow);

    for (let i = 0; i < targetsShow.length; i++) {
      targetsShow[i].style.display = "block";
    }
  }
}