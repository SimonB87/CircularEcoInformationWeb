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
var gaugeData3 = {
  gaugeNumber: 3,
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
var gaugeData4 = {
  gaugeNumber: 4,
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
var gaugeData5 = {
  gaugeNumber: 5,
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
var gaugeData6 = {
  gaugeNumber: 6,
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
var gaugeData7 = {
  gaugeNumber: 7,
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
var gaugeData8 = {
  gaugeNumber: 8,
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

function gaugeAction_calculateMinorTicks(gaugeDifference) {
  let gaugeDifferenceValue = Math.ceil(gaugeDifference);
  let calculateMinorTicks = 0.25 * gaugeDifferenceValue;
  calculateMinorTicks = Math.ceil(calculateMinorTicks);
  return calculateMinorTicks;
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
  gaugeData1.x12_gaugeYellowTo = (gaugeData1.x11_gaugeYellowFrom) + (gaugeData1.x04_difference);
  gaugeData1.x13_gaugeRedFrom = (gaugeData1.x12_gaugeYellowTo);
  gaugeData1.x14_gaugeRedTo = (gaugeData1.x13_gaugeRedFrom) + (gaugeData1.x04_difference);
  gaugeData1.x15_gaugeMinorTicks = gaugeAction_calculateMinorTicks(gaugeData1.x04_difference);

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
  gaugeData2.x12_gaugeYellowTo = (gaugeData2.x11_gaugeYellowFrom) + (gaugeData2.x04_difference);
  gaugeData2.x13_gaugeRedFrom = (gaugeData2.x12_gaugeYellowTo);
  gaugeData2.x14_gaugeRedTo = (gaugeData2.x13_gaugeRedFrom) + (gaugeData2.x04_difference);
  gaugeData2.x15_gaugeMinorTicks = gaugeAction_calculateMinorTicks(gaugeData2.x04_difference);

  gaugeData3.x02_gaugeMainValue = gaugeAction_getMainGaugeValue(gaugeData3.gaugeNumber)
  gaugeData3.x03_wasteCategory = gaugeAction_getWasteCategory(gaugeData3.gaugeNumber);
  gaugeData3.x04_difference = gaugeAction_getDifferenceValue(gaugeData3.x03_wasteCategory, selectedRegion, gaugeData3.gaugeNumber);
  gaugeData3.x05_lowerComparisonValue = gaugeAction_getValueFromWasteData("lower", gaugeData3.x03_wasteCategory, selectedRegion, gaugeData3.gaugeNumber);
  gaugeData3.x06_upperComparisonValue = gaugeAction_getValueFromWasteData("upper", gaugeData3.x03_wasteCategory, selectedRegion, gaugeData3.gaugeNumber);
  gaugeData3.x07_gaugeMinimum = gaugeAction_calculateBorderValue(gaugeData3.x05_lowerComparisonValue, gaugeData3.x04_difference, "min");
  gaugeData3.x08_gaugeMaximum = gaugeAction_calculateBorderValue(gaugeData3.x06_upperComparisonValue, gaugeData3.x04_difference, "max");
  gaugeData3.x09_gaugeGreenFrom = gaugeData3.x05_lowerComparisonValue;
  gaugeData3.x10_gaugeGreenTo = gaugeData3.x06_upperComparisonValue;
  gaugeData3.x11_gaugeYellowFrom = gaugeData3.x10_gaugeGreenTo;
  gaugeData3.x12_gaugeYellowTo = (gaugeData3.x11_gaugeYellowFrom) + (gaugeData3.x04_difference);
  gaugeData3.x13_gaugeRedFrom = (gaugeData3.x12_gaugeYellowTo);
  gaugeData3.x14_gaugeRedTo = (gaugeData3.x13_gaugeRedFrom) + (gaugeData3.x04_difference);
  gaugeData3.x15_gaugeMinorTicks = gaugeAction_calculateMinorTicks(gaugeData3.x04_difference);

  gaugeData4.x02_gaugeMainValue = gaugeAction_getMainGaugeValue(gaugeData4.gaugeNumber)
  gaugeData4.x03_wasteCategory = gaugeAction_getWasteCategory(gaugeData4.gaugeNumber);
  gaugeData4.x04_difference = gaugeAction_getDifferenceValue(gaugeData4.x03_wasteCategory, selectedRegion, gaugeData4.gaugeNumber);
  gaugeData4.x05_lowerComparisonValue = gaugeAction_getValueFromWasteData("lower", gaugeData4.x03_wasteCategory, selectedRegion, gaugeData4.gaugeNumber);
  gaugeData4.x06_upperComparisonValue = gaugeAction_getValueFromWasteData("upper", gaugeData4.x03_wasteCategory, selectedRegion, gaugeData4.gaugeNumber);
  gaugeData4.x07_gaugeMinimum = gaugeAction_calculateBorderValue(gaugeData4.x05_lowerComparisonValue, gaugeData4.x04_difference, "min");
  gaugeData4.x08_gaugeMaximum = gaugeAction_calculateBorderValue(gaugeData4.x06_upperComparisonValue, gaugeData4.x04_difference, "max");
  gaugeData4.x09_gaugeGreenFrom = gaugeData4.x05_lowerComparisonValue;
  gaugeData4.x10_gaugeGreenTo = gaugeData4.x06_upperComparisonValue;
  gaugeData4.x11_gaugeYellowFrom = gaugeData4.x10_gaugeGreenTo;
  gaugeData4.x12_gaugeYellowTo = (gaugeData4.x11_gaugeYellowFrom) + (gaugeData4.x04_difference);
  gaugeData4.x13_gaugeRedFrom = (gaugeData4.x12_gaugeYellowTo);
  gaugeData4.x14_gaugeRedTo = (gaugeData4.x13_gaugeRedFrom) + (gaugeData4.x04_difference);
  gaugeData4.x15_gaugeMinorTicks = gaugeAction_calculateMinorTicks(gaugeData4.x04_difference);

  gaugeData5.x02_gaugeMainValue = gaugeAction_getMainGaugeValue(gaugeData5.gaugeNumber)
  gaugeData5.x03_wasteCategory = gaugeAction_getWasteCategory(gaugeData5.gaugeNumber);
  gaugeData5.x04_difference = gaugeAction_getDifferenceValue(gaugeData5.x03_wasteCategory, selectedRegion, gaugeData5.gaugeNumber);
  gaugeData5.x05_lowerComparisonValue = gaugeAction_getValueFromWasteData("lower", gaugeData5.x03_wasteCategory, selectedRegion, gaugeData5.gaugeNumber);
  gaugeData5.x06_upperComparisonValue = gaugeAction_getValueFromWasteData("upper", gaugeData5.x03_wasteCategory, selectedRegion, gaugeData5.gaugeNumber);
  gaugeData5.x07_gaugeMinimum = gaugeAction_calculateBorderValue(gaugeData5.x05_lowerComparisonValue, gaugeData5.x04_difference, "min");
  gaugeData5.x08_gaugeMaximum = gaugeAction_calculateBorderValue(gaugeData5.x06_upperComparisonValue, gaugeData5.x04_difference, "max");
  gaugeData5.x09_gaugeGreenFrom = gaugeData5.x05_lowerComparisonValue;
  gaugeData5.x10_gaugeGreenTo = gaugeData5.x06_upperComparisonValue;
  gaugeData5.x11_gaugeYellowFrom = gaugeData5.x10_gaugeGreenTo;
  gaugeData5.x12_gaugeYellowTo = (gaugeData5.x11_gaugeYellowFrom) + (gaugeData5.x04_difference);
  gaugeData5.x13_gaugeRedFrom = (gaugeData5.x12_gaugeYellowTo);
  gaugeData5.x14_gaugeRedTo = (gaugeData5.x13_gaugeRedFrom) + (gaugeData5.x04_difference);
  gaugeData5.x15_gaugeMinorTicks = gaugeAction_calculateMinorTicks(gaugeData5.x04_difference);

  gaugeData6.x02_gaugeMainValue = gaugeAction_getMainGaugeValue(gaugeData6.gaugeNumber)
  gaugeData6.x03_wasteCategory = gaugeAction_getWasteCategory(gaugeData6.gaugeNumber);
  gaugeData6.x04_difference = gaugeAction_getDifferenceValue(gaugeData6.x03_wasteCategory, selectedRegion, gaugeData6.gaugeNumber);
  gaugeData6.x05_lowerComparisonValue = gaugeAction_getValueFromWasteData("lower", gaugeData6.x03_wasteCategory, selectedRegion, gaugeData6.gaugeNumber);
  gaugeData6.x06_upperComparisonValue = gaugeAction_getValueFromWasteData("upper", gaugeData6.x03_wasteCategory, selectedRegion, gaugeData6.gaugeNumber);
  gaugeData6.x07_gaugeMinimum = gaugeAction_calculateBorderValue(gaugeData6.x05_lowerComparisonValue, gaugeData6.x04_difference, "min");
  gaugeData6.x08_gaugeMaximum = gaugeAction_calculateBorderValue(gaugeData6.x06_upperComparisonValue, gaugeData6.x04_difference, "max");
  gaugeData6.x09_gaugeGreenFrom = gaugeData6.x05_lowerComparisonValue;
  gaugeData6.x10_gaugeGreenTo = gaugeData6.x06_upperComparisonValue;
  gaugeData6.x11_gaugeYellowFrom = gaugeData6.x10_gaugeGreenTo;
  gaugeData6.x12_gaugeYellowTo = (gaugeData6.x11_gaugeYellowFrom) + (gaugeData6.x04_difference);
  gaugeData6.x13_gaugeRedFrom = (gaugeData6.x12_gaugeYellowTo);
  gaugeData6.x14_gaugeRedTo = (gaugeData6.x13_gaugeRedFrom) + (gaugeData6.x04_difference);
  gaugeData6.x15_gaugeMinorTicks = gaugeAction_calculateMinorTicks(gaugeData6.x04_difference);

  gaugeData7.x02_gaugeMainValue = gaugeAction_getMainGaugeValue(gaugeData7.gaugeNumber)
  gaugeData7.x03_wasteCategory = gaugeAction_getWasteCategory(gaugeData7.gaugeNumber);
  gaugeData7.x04_difference = gaugeAction_getDifferenceValue(gaugeData7.x03_wasteCategory, selectedRegion, gaugeData7.gaugeNumber);
  gaugeData7.x05_lowerComparisonValue = gaugeAction_getValueFromWasteData("lower", gaugeData7.x03_wasteCategory, selectedRegion, gaugeData7.gaugeNumber);
  gaugeData7.x06_upperComparisonValue = gaugeAction_getValueFromWasteData("upper", gaugeData7.x03_wasteCategory, selectedRegion, gaugeData7.gaugeNumber);
  gaugeData7.x07_gaugeMinimum = gaugeAction_calculateBorderValue(gaugeData7.x05_lowerComparisonValue, gaugeData7.x04_difference, "min");
  gaugeData7.x08_gaugeMaximum = gaugeAction_calculateBorderValue(gaugeData7.x06_upperComparisonValue, gaugeData7.x04_difference, "max");
  gaugeData7.x09_gaugeGreenFrom = gaugeData7.x05_lowerComparisonValue;
  gaugeData7.x10_gaugeGreenTo = gaugeData7.x06_upperComparisonValue;
  gaugeData7.x11_gaugeYellowFrom = gaugeData7.x10_gaugeGreenTo;
  gaugeData7.x12_gaugeYellowTo = (gaugeData7.x11_gaugeYellowFrom) + (gaugeData7.x04_difference);
  gaugeData7.x13_gaugeRedFrom = (gaugeData7.x12_gaugeYellowTo);
  gaugeData7.x14_gaugeRedTo = (gaugeData7.x13_gaugeRedFrom) + (gaugeData7.x04_difference);
  gaugeData7.x15_gaugeMinorTicks = gaugeAction_calculateMinorTicks(gaugeData7.x04_difference);

  gaugeData8.x02_gaugeMainValue = gaugeAction_getMainGaugeValue(gaugeData8.gaugeNumber)
  gaugeData8.x03_wasteCategory = gaugeAction_getWasteCategory(gaugeData8.gaugeNumber);
  gaugeData8.x04_difference = gaugeAction_getDifferenceValue(gaugeData8.x03_wasteCategory, selectedRegion, gaugeData8.gaugeNumber);
  gaugeData8.x05_lowerComparisonValue = gaugeAction_getValueFromWasteData("lower", gaugeData8.x03_wasteCategory, selectedRegion, gaugeData8.gaugeNumber);
  gaugeData8.x06_upperComparisonValue = gaugeAction_getValueFromWasteData("upper", gaugeData8.x03_wasteCategory, selectedRegion, gaugeData8.gaugeNumber);
  gaugeData8.x07_gaugeMinimum = gaugeAction_calculateBorderValue(gaugeData8.x05_lowerComparisonValue, gaugeData8.x04_difference, "min");
  gaugeData8.x08_gaugeMaximum = gaugeAction_calculateBorderValue(gaugeData8.x06_upperComparisonValue, gaugeData8.x04_difference, "max");
  gaugeData8.x09_gaugeGreenFrom = gaugeData8.x05_lowerComparisonValue;
  gaugeData8.x10_gaugeGreenTo = gaugeData8.x06_upperComparisonValue;
  gaugeData8.x11_gaugeYellowFrom = gaugeData8.x10_gaugeGreenTo;
  gaugeData8.x12_gaugeYellowTo = (gaugeData8.x11_gaugeYellowFrom) + (gaugeData8.x04_difference);
  gaugeData8.x13_gaugeRedFrom = (gaugeData8.x12_gaugeYellowTo);
  gaugeData8.x14_gaugeRedTo = (gaugeData8.x13_gaugeRedFrom) + (gaugeData8.x04_difference);
  gaugeData8.x15_gaugeMinorTicks = gaugeAction_calculateMinorTicks(gaugeData8.x04_difference);
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
  var data3 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData3.x01_labelName(), gaugeData3.x02_gaugeMainValue],
  ]);
  var data4 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData4.x01_labelName(), gaugeData4.x02_gaugeMainValue],
  ]);
  var data5 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData5.x01_labelName(), gaugeData5.x02_gaugeMainValue],
  ]);
  var data6 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData6.x01_labelName(), gaugeData6.x02_gaugeMainValue],
  ]);
  var data7 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData7.x01_labelName(), gaugeData7.x02_gaugeMainValue],
  ]);
  var data8 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData8.x01_labelName(), gaugeData8.x02_gaugeMainValue],
  ]);

  var options1 = {
    optionsNumber: 1,
    min: gaugeData1.x07_gaugeMinimum,
    max: gaugeData1.x08_gaugeMaximum,
    width: 280,
    height: 280,
    redFrom: gaugeData1.x13_gaugeRedFrom,
    redTo: gaugeData1.x14_gaugeRedTo,
    yellowFrom: gaugeData1.x11_gaugeYellowFrom,
    yellowTo: gaugeData1.x12_gaugeYellowTo,
    greenFrom: gaugeData1.x09_gaugeGreenFrom,
    greenTo: gaugeData1.x10_gaugeGreenTo,
    minorTicks: gaugeData1.x15_gaugeMinorTicks,
  };
  var options2 = {
    optionsNumber: 2,
    min: gaugeData2.x07_gaugeMinimum,
    max: gaugeData2.x08_gaugeMaximum,
    width: 280,
    height: 280,
    redFrom: gaugeData2.x13_gaugeRedFrom,
    redTo: gaugeData2.x14_gaugeRedTo,
    yellowFrom: gaugeData2.x11_gaugeYellowFrom,
    yellowTo: gaugeData2.x12_gaugeYellowTo,
    greenFrom: gaugeData2.x09_gaugeGreenFrom,
    greenTo: gaugeData2.x10_gaugeGreenTo,
    minorTicks: gaugeData2.x15_gaugeMinorTicks,
  };
  var options3 = {
    optionsNumber: 3,
    min: gaugeData3.x07_gaugeMinimum,
    max: gaugeData3.x08_gaugeMaximum,
    width: 280,
    height: 280,
    redFrom: gaugeData3.x13_gaugeRedFrom,
    redTo: gaugeData3.x14_gaugeRedTo,
    yellowFrom: gaugeData3.x11_gaugeYellowFrom,
    yellowTo: gaugeData3.x12_gaugeYellowTo,
    greenFrom: gaugeData3.x09_gaugeGreenFrom,
    greenTo: gaugeData3.x10_gaugeGreenTo,
    minorTicks: gaugeData3.x15_gaugeMinorTicks,
  };
  var options4 = {
    optionsNumber: 4,
    min: gaugeData4.x07_gaugeMinimum,
    max: gaugeData4.x08_gaugeMaximum,
    width: 280,
    height: 280,
    redFrom: gaugeData4.x13_gaugeRedFrom,
    redTo: gaugeData4.x14_gaugeRedTo,
    yellowFrom: gaugeData4.x11_gaugeYellowFrom,
    yellowTo: gaugeData4.x12_gaugeYellowTo,
    greenFrom: gaugeData4.x09_gaugeGreenFrom,
    greenTo: gaugeData4.x10_gaugeGreenTo,
    minorTicks: gaugeData4.x15_gaugeMinorTicks,
  };
  var options5 = {
    optionsNumber: 5,
    min: gaugeData5.x07_gaugeMinimum,
    max: gaugeData5.x08_gaugeMaximum,
    width: 280,
    height: 280,
    redFrom: gaugeData5.x13_gaugeRedFrom,
    redTo: gaugeData5.x14_gaugeRedTo,
    yellowFrom: gaugeData5.x11_gaugeYellowFrom,
    yellowTo: gaugeData5.x12_gaugeYellowTo,
    greenFrom: gaugeData5.x09_gaugeGreenFrom,
    greenTo: gaugeData5.x10_gaugeGreenTo,
    minorTicks: gaugeData5.x15_gaugeMinorTicks,
  };
  var options6 = {
    optionsNumber: 6,
    min: gaugeData6.x07_gaugeMinimum,
    max: gaugeData6.x08_gaugeMaximum,
    width: 280,
    height: 280,
    redFrom: gaugeData6.x13_gaugeRedFrom,
    redTo: gaugeData6.x14_gaugeRedTo,
    yellowFrom: gaugeData6.x11_gaugeYellowFrom,
    yellowTo: gaugeData6.x12_gaugeYellowTo,
    greenFrom: gaugeData6.x09_gaugeGreenFrom,
    greenTo: gaugeData6.x10_gaugeGreenTo,
    minorTicks: gaugeData6.x15_gaugeMinorTicks,
  };
  var options7 = {
    optionsNumber: 7,
    min: gaugeData7.x07_gaugeMinimum,
    max: gaugeData7.x08_gaugeMaximum,
    width: 280,
    height: 280,
    redFrom: gaugeData7.x13_gaugeRedFrom,
    redTo: gaugeData7.x14_gaugeRedTo,
    yellowFrom: gaugeData7.x11_gaugeYellowFrom,
    yellowTo: gaugeData7.x12_gaugeYellowTo,
    greenFrom: gaugeData7.x09_gaugeGreenFrom,
    greenTo: gaugeData7.x10_gaugeGreenTo,
    minorTicks: 100,
  };
  var options8 = {
    optionsNumber: 8,
    min: gaugeData8.x07_gaugeMinimum,
    max: gaugeData8.x08_gaugeMaximum,
    width: 280,
    height: 280,
    redFrom: gaugeData8.x13_gaugeRedFrom,
    redTo: gaugeData8.x14_gaugeRedTo,
    yellowFrom: gaugeData8.x11_gaugeYellowFrom,
    yellowTo: gaugeData8.x12_gaugeYellowTo,
    greenFrom: gaugeData8.x09_gaugeGreenFrom,
    greenTo: gaugeData8.x10_gaugeGreenTo,
    minorTicks: 100,
  };
  var chart1 = new google.visualization.Gauge(document.getElementById("google_gauge_chart1"));
  var chart2 = new google.visualization.Gauge(document.getElementById("google_gauge_chart2"));

  var chart3 = new google.visualization.Gauge(document.getElementById("google_gauge_chart3"));
  var chart4 = new google.visualization.Gauge(document.getElementById("google_gauge_chart4"));
  var chart5 = new google.visualization.Gauge(document.getElementById("google_gauge_chart5"));
  var chart6 = new google.visualization.Gauge(document.getElementById("google_gauge_chart6"));
  var chart7 = new google.visualization.Gauge(document.getElementById("google_gauge_chart7"));
  var chart8 = new google.visualization.Gauge(document.getElementById("google_gauge_chart8"));

  chart1.draw(data1, options1);
  chart2.draw(data2, options2);
  chart3.draw(data3, options3);
  chart4.draw(data4, options4);
  chart5.draw(data5, options5);
  chart6.draw(data6, options6);
  chart7.draw(data7, options7);
  chart8.draw(data8, options8);
}