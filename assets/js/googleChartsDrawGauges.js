var selectedRegion = document.getElementById("region_cr").value;
var gaugeData1 = {
  gaugeNumber: 1,
  x01_labelName: function () {
    return gaugeAction_getLabelNameTitle(this.gaugeNumber);
  },
  x02_gaugeMainValue: function () {
    return gaugeAction_getMainGaugeValue(this.gaugeNumber);
  },
  x03_wasteCategory: function () {
    return gaugeAction_getWasteCategory(this.gaugeNumber);
  },
  x04_difference: function () {
    return gaugeAction_getDifferenceValue(this.x03_wasteCategory(), selectedRegion, this.gaugeNumber);
  },
  x05_lowerComparisonValue: function () {
    return gaugeAction_getValueFromWasteData("lower", this.x03_wasteCategory(), selectedRegion, this.gaugeNumber);
  },
  x06_upperComparisonValue: function () {
    return gaugeAction_getValueFromWasteData("upper", this.x03_wasteCategory(), selectedRegion, this.gaugeNumber);
  },
  x07_gaugeMinimum: function () {
    return this.lowerComparisonValue - 2 * this.x04_difference();
  },
  x08_gaugeMaximum: function () {
    return this.upperComparisonValue + 2 * this.x04_difference();
  },
  x09_gaugeGreenFrom: function () {
    return this.x05_lowerComparisonValue();
  },
  x10_gaugeGreenTo: function () {
    return this.x06_upperComparisonValue();
  },
  x11_gaugeYellowFrom: function () {
    return this.x10_gaugeGreenTo();
  },
  x12_gaugeYellowTo: function () {
    return this.x11_gaugeYellowFrom();
  },
  x13_gaugeRedFrom: function () {
    return this.x12_gaugeYellowTo();
  },
  x14_gaugeRedTo: function () {
    return this.x8_gaugeMaximum();
  },
  x15_gaugeMinorTicks: function () {
    return parseInt(Number(this.x04_difference()) / 4);
  }
};
var gaugeData2 = {
  gaugeNumber: 2,
  x01_labelName: function () {
    return gaugeAction_getLabelNameTitle(this.gaugeNumber);
  },
  x02_gaugeMainValue: function () {
    return gaugeAction_getMainGaugeValue(this.gaugeNumber);
  },
  x03_wasteCategory: function () {
    return gaugeAction_getWasteCategory(this.gaugeNumber);
  },
  x04_difference: function () {
    return gaugeAction_getDifferenceValue(this.x03_wasteCategory(), selectedRegion, this.gaugeNumber);
  },
  x05_lowerComparisonValue: function () {
    return gaugeAction_getValueFromWasteData("lower", this.x03_wasteCategory(), selectedRegion, this.gaugeNumber);
  },
  x06_upperComparisonValue: function () {
    return gaugeAction_getValueFromWasteData("upper", this.x03_wasteCategory(), selectedRegion, this.gaugeNumber);
  },
  x07_gaugeMinimum: function () {
    return this.lowerComparisonValue - 2 * this.x04_difference();
  },
  x08_gaugeMaximum: function () {
    return this.upperComparisonValue + 2 * this.x04_difference();
  },
  x09_gaugeGreenFrom: function () {
    return this.x05_lowerComparisonValue();
  },
  x10_gaugeGreenTo: function () {
    return this.x06_upperComparisonValue();
  },
  x11_gaugeYellowFrom: function () {
    return this.x10_gaugeGreenTo();
  },
  x12_gaugeYellowTo: function () {
    return this.x11_gaugeYellowFrom();
  },
  x13_gaugeRedFrom: function () {
    return this.x12_gaugeYellowTo();
  },
  x14_gaugeRedTo: function () {
    return this.x8_gaugeMaximum();
  },
  x15_gaugeMinorTicks: function () {
    return parseInt(Number(this.x04_difference()) / 4);
  }
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

/** 
 * Old function for drawing
 */
function drawChart() {

  var data1 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData1.labelName, gaugeData1.gaugeMainValue],
  ]);
  var data2 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData2.labelName, gaugeData2.gaugeMainValue],
  ]);

  var options1 = {
    optionsNumber: 1,
    min: gaugeData1.x07_gaugeMinimum(),
    max: gaugeData1.x08_gaugeMaximum(),
    width: 300,
    height: 300,
    redFrom: gaugeData1.x13_gaugeRedFrom(),
    redTo: gaugeData1.x14_gaugeRedTo(),
    yellowFrom: gaugeData1.x12_gaugeYellowFrom(),
    yellowTo: gaugeData1.x12_gaugeYellowTo(),
    greenFrom: gaugeData1.x09_gaugeGreenFrom(),
    greenTo: gaugeData1.x10_gaugeGreenTo(),
    minorTicks: gaugeData1.x15_gaugeMinorTicks()
  };
  var options2 = {
    optionsNumber: 2,
    min: gaugeData2.x07_gaugeMinimum(),
    max: gaugeData2.x08_gaugeMaximum(),
    width: 300,
    height: 300,
    redFrom: gaugeData2.x13_gaugeRedFrom(),
    redTo: gaugeData2.x14_gaugeRedTo(),
    yellowFrom: gaugeData2.x12_gaugeYellowFrom(),
    yellowTo: gaugeData2.x12_gaugeYellowTo(),
    greenFrom: gaugeData2.x09_gaugeGreenFrom(),
    greenTo: gaugeData2.x10_gaugeGreenTo(),
    minorTicks: gaugeData2.x15_gaugeMinorTicks()
  };

  var chart1 = new google.visualization.Gauge(document.getElementById("google_gauge_chart1"));
  var chart2 = new google.visualization.Gauge(document.getElementById("google_gauge_chart2"));

  chart1.draw(data1, options1);
  chart2.draw(data2, options2);
}