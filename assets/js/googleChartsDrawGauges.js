var selectedRegion;
var gaugeData1 = {
  gaugeNumber: 1,
  x01_labelName: function () {
    return gaugeAction_getLabelNameTitle(this.gaugeNumber);
  },
  x02_gaugeMainValue: "",
  x03_wasteCategory: "",
  x04_difference: "",
  x05_lowerComparisonValue: "",
  x06_upperComparisonValue: "",
  x07_gaugeMinimum: "",
  x08_gaugeMaximum: "",
  x09_gaugeGreenFrom: "",
  x10_gaugeGreenTo: "",
  x11_gaugeYellowFrom: "",
  x12_gaugeYellowTo: "",
  x13_gaugeRedFrom: "",
  x14_gaugeRedTo: "",
  x15_gaugeMinorTicks: ""
};
var gaugeData2 = {
  gaugeNumber: 2,
  x01_labelName: function () {
    return gaugeAction_getLabelNameTitle(this.gaugeNumber);
  },
  x02_gaugeMainValue: "",
  x03_wasteCategory: "",
  x04_difference: "",
  x05_lowerComparisonValue: "",
  x06_upperComparisonValue: "",
  x07_gaugeMinimum: "",
  x08_gaugeMaximum: "",
  x09_gaugeGreenFrom: "",
  x10_gaugeGreenTo: "",
  x11_gaugeYellowFrom: "",
  x12_gaugeYellowTo: "",
  x13_gaugeRedFrom: "",
  x14_gaugeRedTo: "",
  x15_gaugeMinorTicks: ""
};


/**
 * Functions for edits of objects
 */

function gaugeAction_getLabelNameTitle(selectedLabelNumber) {
  let myQuerySelector = ".result" + selectedLabelNumber + " .gauge .result_title";
  let labelNameForGauge = document.querySelector(myQuerySelector).innerText;
  return labelNameForGauge;
}

function gaugeAction_getWasteCategory(cathegoryNumber) {
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
    return "nakladyNaOhKc";
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

function gaugeAction_getDifferenceValue(wasteCathegoryName, selectedRegion, gaugeNumber) {
  if (gaugeNumber < 12) {
    let regionalValue = wasteData[wasteCathegoryName][selectedRegion];
    let countryValue = wasteData[wasteCathegoryName]["cr"];
    let differenceValue = regionalValue - countryValue;
    if (differenceValue < 0) {
      differenceValue = (-1) * differenceValue;
    }
    if (differenceValue < 21) {
      differenceValue = 20;
    }
    return differenceValue;
  }
}

function gaugeAction_getMainGaugeValue(gaugeUnitNumber) {
  let selectorMainValue = "wasteResultNotice"
  if (gaugeUnitNumber < 10) {
    selectorMainValue = selectorMainValue + "0" + gaugeUnitNumber;
  } else if (gaugeUnitNumber < 17) {
    selectorMainValue = selectorMainValue + gaugeUnitNumber;
  } else {
    return 0;
  }
  let resultValue = Number(document.getElementById(selectorMainValue).innerText)
  return resultValue;
}

function gaugeAction_getValueFromWasteData(valueKind, wasteCathegoryNaming, selectedRegionName, selectedGaugeNumber) {
  if (selectedGaugeNumber < 12) {
    let regionalSelectedValue = wasteData[wasteCathegoryNaming][selectedRegionName];
    let countrySelectedValue = wasteData[wasteCathegoryNaming]["cr"];
    let higherValueFromRegionVsCountry;
    let lowerValueFromRegionVsCountry;
    if (regionalSelectedValue < countrySelectedValue) {
      lowerValueFromRegionVsCountry = regionalSelectedValue;
      higherValueFromRegionVsCountry = countrySelectedValue;
    } else {
      lowerValueFromRegionVsCountry = countrySelectedValue;
      higherValueFromRegionVsCountry = regionalSelectedValue;
    }
    if (valueKind == "lower") {
      return lowerValueFromRegionVsCountry;
    } else if (valueKind == "upper") {
      return higherValueFromRegionVsCountry;
    }
  }
}

function gaugeAction_calculateBorderValue(giverValue, difference, minOrMax) {
  let calcResult;
  if (minOrMax == "min") {
    let supportValue1 = parseFloat(giverValue);
    let supportValue2 = parseFloat(difference);
    calcResult = supportValue1 - (2 * supportValue2);
  } else if (minOrMax == "max") {
    let supportValue3 = parseFloat(giverValue);
    let supportValue4 = parseFloat(difference);
    calcResult = supportValue3 + (2 * supportValue4);
  }
  return calcResult;
}

function prepareGaugesObjects() {
  var selectedRegion = document.getElementById("region_cr").value;

  gaugeData1.x02_gaugeMainValue = gaugeAction_getMainGaugeValue(gaugeData1.gaugeNumber)
  gaugeData1.x03_wasteCategory = gaugeAction_getWasteCategory(gaugeData1.gaugeNumber);
  gaugeData1.x04_difference = gaugeAction_getDifferenceValue(gaugeData1.x03_wasteCategory, selectedRegion, gaugeData1.gaugeNumber);
  gaugeData1.x05_lowerComparisonValue = gaugeAction_getValueFromWasteData("lower", gaugeData1.x03_wasteCategory, selectedRegion, gaugeData1.gaugeNumber);
  gaugeData1.x06_upperComparisonValue = gaugeAction_getValueFromWasteData("upper", gaugeData1.x03_wasteCategory, selectedRegion, gaugeData1.gaugeNumber);
  gaugeData1.x07_gaugeMinimum = gaugeAction_calculateBorderValue(gaugeData1.x05_lowerComparisonValue, gaugeData1.x04_difference, "min");
  gaugeData1.x08_gaugeMaximum = gaugeAction_calculateBorderValue(gaugeData1.x06_upperComparisonValue, gaugeData1.x04_difference, "max");
  gaugeData1.x09_gaugeGreenFrom = gaugeData1.x05_lowerComparisonValue;
  gaugeData1.x10_gaugeGreenTo = gaugeData1.x06_upperComparisonValue;
  gaugeData1.x11_gaugeYellowFrom = gaugeData1.x10_gaugeGreenTo;
  gaugeData1.x12_gaugeYellowTo = gaugeData1.x11_gaugeYellowFrom;
  gaugeData1.x13_gaugeRedFrom = gaugeData1.x12_gaugeYellowTo;
  gaugeData1.x14_gaugeRedTo = gaugeData1.x8_gaugeMaximum;
  gaugeData1.x15_gaugeMinorTicks = parseInt(Number(gaugeData1.x04_difference) / 4);

  gaugeData2.x02_gaugeMainValue = gaugeAction_getMainGaugeValue(gaugeData2.gaugeNumber)
  gaugeData2.x03_wasteCategory = gaugeAction_getWasteCategory(gaugeData2.gaugeNumber);
  gaugeData2.x04_difference = gaugeAction_getDifferenceValue(gaugeData2.x03_wasteCategory, selectedRegion, gaugeData2.gaugeNumber);
  gaugeData2.x05_lowerComparisonValue = gaugeAction_getValueFromWasteData("lower", gaugeData2.x03_wasteCategory, selectedRegion, gaugeData2.gaugeNumber);
  gaugeData2.x06_upperComparisonValue = gaugeAction_getValueFromWasteData("upper", gaugeData2.x03_wasteCategory, selectedRegion, gaugeData2.gaugeNumber);
  gaugeData2.x07_gaugeMinimum = gaugeAction_calculateBorderValue(gaugeData2.x05_lowerComparisonValue, gaugeData2.x04_difference, "min");
  gaugeData2.x08_gaugeMaximum = gaugeAction_calculateBorderValue(gaugeData2.x06_upperComparisonValue, gaugeData2.x04_difference, "max");
  gaugeData2.x09_gaugeGreenFrom = gaugeData2.x05_lowerComparisonValue;
  gaugeData2.x10_gaugeGreenTo = gaugeData2.x06_upperComparisonValue;
  gaugeData2.x11_gaugeYellowFrom = gaugeData2.x10_gaugeGreenTo;
  gaugeData2.x12_gaugeYellowTo = gaugeData2.x11_gaugeYellowFrom;
  gaugeData2.x13_gaugeRedFrom = gaugeData2.x12_gaugeYellowTo;
  gaugeData2.x14_gaugeRedTo = gaugeData2.x8_gaugeMaximum;
  gaugeData2.x15_gaugeMinorTicks = parseInt(Number(gaugeData2.x04_difference) / 4);
}

/** 
 * Old function for drawing
 */
function drawChart() {

  var data1 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData1.x01_labelName(), gaugeData1.x02_gaugeMainValue],
  ]);
  var data2 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData2.x01_labelName(), gaugeData2.x02_gaugeMainValue],
  ]);

  var options1 = {
    optionsNumber: 1,
    min: gaugeData1.x07_gaugeMinimum,
    max: gaugeData1.x08_gaugeMaximum,
    width: 300,
    height: 300,
    redFrom: gaugeData1.x13_gaugeRedFrom,
    redTo: gaugeData1.x14_gaugeRedTo,
    yellowFrom: gaugeData1.x12_gaugeYellowFrom,
    yellowTo: gaugeData1.x12_gaugeYellowTo,
    greenFrom: gaugeData1.x09_gaugeGreenFrom,
    greenTo: gaugeData1.x10_gaugeGreenTo,
    minorTicks: gaugeData1.x15_gaugeMinorTicks
  };
  var options2 = {
    optionsNumber: 2,
    min: gaugeData2.x07_gaugeMinimum,
    max: gaugeData2.x08_gaugeMaximum,
    width: 300,
    height: 300,
    redFrom: gaugeData2.x13_gaugeRedFrom,
    redTo: gaugeData2.x14_gaugeRedTo,
    yellowFrom: gaugeData2.x12_gaugeYellowFrom,
    yellowTo: gaugeData2.x12_gaugeYellowTo,
    greenFrom: gaugeData2.x09_gaugeGreenFrom,
    greenTo: gaugeData2.x10_gaugeGreenTo,
    minorTicks: gaugeData2.x15_gaugeMinorTicks
  };

  var chart1 = new google.visualization.Gauge(document.getElementById("google_gauge_chart1"));
  var chart2 = new google.visualization.Gauge(document.getElementById("google_gauge_chart2"));

  chart1.draw(data1, options1);
  chart2.draw(data2, options2);
}