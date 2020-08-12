function toggleForm(show, hide) {
  const targetSelectorShow = ".formTogler_panel" + show;
  const targetSelectorHide = ".formTogler_panel" + hide;
  const targetsShow = document.querySelectorAll(targetSelectorShow);
  const targetsHide = document.querySelectorAll(targetSelectorHide);

  storeValues();

  for (let i = 0; i < targetsHide.length; i++) {
    targetsHide[i].style.display = "none";
  }

  for (let j = 0; j < targetsShow.length; j++) {
    targetsShow[j].style.display = "block";
  }

  if (show == 2) {
    document.querySelector("#formToglerActions__back .button").classList.remove("disabled");

    document.querySelector("#formToglerControls_item1 .button").classList.remove("primary");
    document.querySelector("#formToglerControls_item2 .button").classList.add("primary");
    document.querySelector("#formToglerControls_item3 .button").classList.remove("primary");
    //enable calculate button
    document.querySelector("#formToglerActions__send .submitButton").classList.remove("disabled");
    document.querySelector("#formToglerActions__forward .button").classList.add("disabled");

  } else if (show == 1) {
    document.querySelector("#formToglerActions__back .button").classList.add("disabled");

    document.querySelector("#formToglerControls_item1 .button").classList.add("primary");
    document.querySelector("#formToglerControls_item2 .button").classList.remove("primary");
    document.querySelector("#formToglerControls_item3 .button").classList.remove("primary");
    document.querySelector("#formToglerActions__forward .button").classList.remove("disabled");
  }
}

function calculateWaste() {
  //Fix show panels
  hideInputs(2);
  hideInputs(1);

  manageResults();
  displayResuts(3, "block");

  document.querySelector("#formToglerActions__back .button").classList.add("disabled");
  document.querySelector("#formToglerControls_item1 .button").classList.remove("primary");
  document.querySelector("#formToglerControls_item2 .button").classList.remove("primary");
  document.querySelector("#formToglerControls_item3 .button").classList.add("primary");

  function manageResults() {
    const targetEl = document.querySelector("#formToglerActions__send .submitButton");
    const valueEl = targetEl.classList.contains("disabled");

    if (!valueEl) {

      for (let k = 1; k < 17; k++) {
        if (k < 10) {
          let selector = "wasteResult0" + k;
          document.querySelector("#wasteResultNotice0" + k).innerText = formValueResult[selector];
        } else if (k < 17) {
          let selector = "wasteResult" + k;
          document.querySelector("#wasteResultNotice" + k).innerText = formValueResult[selector];
        }
      }
    }
  }
}

function hideInputs(hide) {
  const targetSelectorHide = ".formTogler_panel" + hide;
  const targetsHide = document.querySelectorAll(targetSelectorHide);

  storeValues();

  for (let i = 0; i < targetsHide.length; i++) {
    targetsHide[i].style.display = "none";
  }
}

function displayResuts(show, displayCss) {
  const targetSelectorShow = ".formTogler_panel" + show;
  const targetsShow = document.querySelectorAll(targetSelectorShow);

  for (let i = 0; i < targetsShow.length; i++) {
    targetsShow[i].style.display = displayCss;
  }
}

function resetForm() {
  toggleForm(1, 2);

  document.querySelector(".results.formTogler_panel3").style.display = "none";

  let allInputs = document.querySelectorAll(".wasteCaclForm input[type = text]");
  let allInputsCount = allInputs.length;

  for (let k = 1; k < 17; k++) {
    if (k < 10) {
      formValueResult["wasteResult0" + k] = "";
    } else if (k < 18) {
      formValueResult["wasteResult" + k] = "";
    }

  }

  for (let i = 0; i < allInputsCount; i++) {
    allInputas[i].value = "0";
  }
}

function switchFormView(number) {

  if (number === 1) {

    toggleForm(1, 2);
    displayResuts(3, "none");

  } else if (number === 2) {

    toggleForm(2, 1);
    displayResuts(3, "none");

  } else if (number === 3) {

    hideInputs(2);
    hideInputs(1);
    displayResuts(3, "block");

    document.querySelector("#formToglerControls_item1 .button").classList.remove("primary");
    document.querySelector("#formToglerControls_item2 .button").classList.remove("primary");
    document.querySelector("#formToglerControls_item3 .button").classList.add("primary");
  }
}

function storeValues() {
  for (let k = 1; k < 17; k++) {
    if (k < 10) {
      let selector = "wasteResult0" + k;
      formValueResult[selector] = document.querySelector("." + selector).value;
    } else if (k < 17) {
      let selector = "wasteResult" + k;
      formValueResult[selector] = document.querySelector("." + selector).value;
    }
  }
}