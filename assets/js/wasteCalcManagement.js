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
  document.getElementById("region_cr").setAttribute("disabled", "");
  document.getElementById("region_cr").classList.add("valueDisabled");
  document.getElementById("town_name").setAttribute("disabled", "");
  document.getElementById("town_name").classList.add("valueDisabled");
  document.getElementById("townName").innerText = document.getElementById("town_name").value;

  displayComparisonValues();

  prepareGaugesObjects();
  drawGauges();
  drawChartColumns();

  function manageResults() {
    const targetEl = document.querySelector("#formToglerActions__send .submitButton");
    const valueEl = targetEl.classList.contains("disabled");

    if (!valueEl) {

      for (let k = 1; k < 16; k++) {
        if (k < 10) {
          let selector = "wasteResult0" + k;
          document.querySelector("#wasteResultNotice0" + k).innerText = formValueResult[selector];
        } else if (k < 16) {
          let selector = "wasteResult" + k;
          document.querySelector("#wasteResultNotice" + k).innerText = formValueResult[selector];
        }
      }
    }
  }


  function displayComparisonValues() {
    let choosenRegion = document.getElementById("region_cr").value;
    let showRegions = true;

    if (choosenRegion === "default") {
      choosenRegion = "cr";
      document.getElementById("region_cr").value = "cr";
      showRegions = false;
    }

    if (showRegions) {
      for (let k = 1; k < 12; k++) {
        let comparisonRegionSelector;
        if (k < 10) {
          comparisonRegionSelector = "#valueCompariosonRegion0" + k;
        } else if (k < 12) {//the regional values ends with cathegory number 12
          comparisonRegionSelector = "#valueCompariosonRegion" + k;
        }
        let cathegory = getWasteCategory(k);
        let comparisonRegionValue = wasteData[cathegory][choosenRegion];
        document.querySelector(comparisonRegionSelector).innerText = comparisonRegionValue;
      }
    } else {
      for (let i = 1; i < 12; i++) {
        let comparisonRegionSelector;
        if (i < 10) {
          comparisonRegionSelector = "#valueCompariosonRegion0" + i;
        } else if (i < 12) {//the regional values ends with cathegory number 12
          comparisonRegionSelector = "#valueCompariosonRegion" + i;
        }
        document.querySelector(comparisonRegionSelector).innerText = " ---";
      }
    }

    for (let j = 1; j < 16; j++) {
      let countrySelector;
      if (j < 10) {
        countrySelector = "#valueCompariosonCountry0" + j;
      } else if (j < 16) {
        countrySelector = "#valueCompariosonCountry" + j;
      }
      let cathegoryName = getWasteCategory(j);
      let comparisonCountryObject = wasteData[cathegoryName];
      let comparisonCountryValue = comparisonCountryObject.cr;
      document.querySelector(countrySelector).innerText = comparisonCountryValue;
    }


    function getWasteCategory(cathegoryNumber) {
      if (cathegoryNumber == 1) {
        return "nakladyNaOhKc";
      } else if (cathegoryNumber == 2) {
        return "nakladyZOhKc";
      } else if (cathegoryNumber == 3) {
        return "nakladyTridenySberTun";
      } else if (cathegoryNumber == 4) {
        return "nakladyTridenySberKc";
      } else if (cathegoryNumber == 5) {
        return "nakladySkoTun";
      } else if (cathegoryNumber == 6) {
        return "nakladySkoKc";
      } else if (cathegoryNumber == 7) {
        return "produkceOdpadCelkova";
      } else if (cathegoryNumber == 8) {
        return "produkceOdpadO";
      } else if (cathegoryNumber == 9) {
        return "produkceOdpadN";
      } else if (cathegoryNumber == 10) {
        return "produkceKomunal";
      } else if (cathegoryNumber == 11) {
        return "produkceSko";
      } else if (cathegoryNumber == 12) {
        return "produkcePlast";
      } else if (cathegoryNumber == 13) {
        return "produkcePapir";
      } else if (cathegoryNumber == 14) {
        return "produkceSklo";
      } else if (cathegoryNumber == 15) {
        return "produkceKovy";
      } else if (cathegoryNumber == 16) {
        return "produkceBro";
      }
    }
  }

  function drawGauges() {
    google.charts.load('current', { 'packages': ['gauge'] });
    google.charts.setOnLoadCallback(drawChart);
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
  document.getElementById("region_cr").removeAttribute("disabled")
  document.getElementById("region_cr").classList.remove("valueDisabled");
  document.getElementById("town_name").removeAttribute("disabled")
  document.getElementById("town_name").classList.remove("valueDisabled");

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
    allInputs[i].value = "0";
  }

  removePreviousGauges();

  function removePreviousGauges() {
    const gaugesArray = document.querySelectorAll(".google_gauge table");
    for (i = 0; i < gaugesArray.length; i++) {
      gaugesArray[i].remove();
    }
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