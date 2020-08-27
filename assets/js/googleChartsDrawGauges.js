var selectedRegion;
//TODO refactor declaring new objects with class
class Gauge {
  constructor(gaugeIndex) {
    this.gaugeNumber = gaugeIndex;
    this.x02_gaugeMainValue = "";
    this.x03_wasteCategory = "";
    this.x04_difference = "";
    this.x05_lowerComparisonValue = "";
    this.x06_upperComparisonValue = "";
    this.x07_gaugeMinimum = "";
    this.x08_gaugeMaximum = "";
    this.x09_gaugeGreenFrom = "";
    this.x10_gaugeGreenTo = "";
    this.x11_gaugeYellowFrom = "";
    this.x12_gaugeYellowTo = "";
    this.x13_gaugeRedFrom = "";
    this.x14_gaugeRedTo = "";
    this.x15_gaugeMinorTicks = "";
    }
    x01_labelName() {  
      return gaugeAction_getLabelNameTitle(this.gaugeNumber);
    }
}

var gaugeData1 = new Gauge(1);
var gaugeData2 = new Gauge(2);
var gaugeData3 = new Gauge(3);
var gaugeData4 = new Gauge(4);
var gaugeData5 = new Gauge(5);
var gaugeData6 = new Gauge(6);
var gaugeData7 = new Gauge(7);
var gaugeData8 = new Gauge(8);
var gaugeData9 = new Gauge(9);
var gaugeData10 = new Gauge(10);
var gaugeData11 = new Gauge(11);
var gaugeData12 = new Gauge(12);
var gaugeData13 = new Gauge(13);
var gaugeData14 = new Gauge(14);
var gaugeData15 = new Gauge(15);

//TODO refactor by bringing these functions into an support object

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

function gaugeAction_getDifferenceValue(wasteCathegoryName, selectedRegion, gaugeNumber) {
  let regionalValue;
  if (gaugeNumber < 12) {
    regionalValue = wasteData[wasteCathegoryName][selectedRegion];
  } else if (gaugeNumber < 17) {
    regionalValue = wasteData[wasteCathegoryName]["fakeDataPoint"];
  }
  let countryValue = wasteData[wasteCathegoryName]["cr"];
  let differenceValue = regionalValue - countryValue;
  if (differenceValue < 0) {
    differenceValue = (-1) * differenceValue;
  }

  let checkRatioOfDiffToBase = differenceValue / countryValue;
  if (checkRatioOfDiffToBase < 0.2) {
    if (differenceValue < 21) {
      differenceValue = 20;
    }
  } else if (checkRatioOfDiffToBase < 0.4) {
    if (differenceValue < 11) {
      differenceValue = 10;
    }
  }
  return differenceValue;
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
  let inputValue = document.getElementById(selectorMainValue).innerText;
  if ((inputValue == undefined) || (inputValue == undefined)) {
    inputValue = 0;
  }
  let containsComa = inputValue.includes(",");
  if (containsComa) {
    inputValue = inputValue.replace(",", ".");
  }
  let resultValue = Number(inputValue);
  return resultValue;
}

function gaugeAction_getValueFromWasteData(valueKind, wasteCathegoryNaming, selectedRegionName, selectedGaugeNumber) {
  let regionalSelectedValue;
  if (selectedGaugeNumber < 12) {
    regionalSelectedValue = wasteData[wasteCathegoryNaming][selectedRegionName];
  } else if (selectedGaugeNumber < 17) {
    regionalSelectedValue = wasteData[wasteCathegoryNaming]["fakeDataPoint"];
  }
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
  if (calcResult < 0) {
    calcResult = 0
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
  if ( selectedRegion == "default" ) { selectedRegion = "cr" }

  //TODO refactor this by calling objects from the window objects

  for(let g = 1; g < 16; g++) {
    let selectedGaugeNumber = "gaugeData" + g;

    window[selectedGaugeNumber].x02_gaugeMainValue = gaugeAction_getMainGaugeValue(window[selectedGaugeNumber]["gaugeNumber"])
    window[selectedGaugeNumber].x03_wasteCategory = gaugeAction_getWasteCategory(window[selectedGaugeNumber]["gaugeNumber"]);
    window[selectedGaugeNumber].x04_difference = gaugeAction_getDifferenceValue(window[selectedGaugeNumber]["x03_wasteCategory"], selectedRegion, window[selectedGaugeNumber]["gaugeNumber"]);
    window[selectedGaugeNumber].x05_lowerComparisonValue = gaugeAction_getValueFromWasteData("lower", window[selectedGaugeNumber]["x03_wasteCategory"], selectedRegion, window[selectedGaugeNumber]["gaugeNumber"]);
    window[selectedGaugeNumber].x06_upperComparisonValue = gaugeAction_getValueFromWasteData("upper", window[selectedGaugeNumber]["x03_wasteCategory"], selectedRegion, window[selectedGaugeNumber]["gaugeNumber"]);
    window[selectedGaugeNumber].x07_gaugeMinimum = gaugeAction_calculateBorderValue(window[selectedGaugeNumber]["x05_lowerComparisonValue"], window[selectedGaugeNumber]["x04_difference"], "min");
    window[selectedGaugeNumber].x08_gaugeMaximum = gaugeAction_calculateBorderValue(window[selectedGaugeNumber]["x06_upperComparisonValue"], window[selectedGaugeNumber]["x04_difference"], "max");
    window[selectedGaugeNumber].x09_gaugeGreenFrom = window[selectedGaugeNumber]["x05_lowerComparisonValue"];
    window[selectedGaugeNumber].x10_gaugeGreenTo = window[selectedGaugeNumber]["x06_upperComparisonValue"];
    window[selectedGaugeNumber].x11_gaugeYellowFrom = window[selectedGaugeNumber]["x10_gaugeGreenTo"];
    window[selectedGaugeNumber].x12_gaugeYellowTo = ( window[selectedGaugeNumber]["x11_gaugeYellowFrom"] + window[selectedGaugeNumber]["x04_difference"] );
    window[selectedGaugeNumber].x13_gaugeRedFrom = window[selectedGaugeNumber]["x12_gaugeYellowTo"];
    window[selectedGaugeNumber].x14_gaugeRedTo = (window[selectedGaugeNumber]["x13_gaugeRedFrom"] + window[selectedGaugeNumber]["x04_difference"]);
    window[selectedGaugeNumber].x15_gaugeMinorTicks = gaugeAction_calculateMinorTicks(window[selectedGaugeNumber]["x04_difference"]);

 }
}

/** 
 * Old function for drawing
 */
function drawChart() {
  //TODO refactor declaring new objects with class

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
  var data9 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData9.x01_labelName(), gaugeData9.x02_gaugeMainValue],
  ]);
  var data10 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData10.x01_labelName(), gaugeData10.x02_gaugeMainValue],
  ]);
  var data11 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData11.x01_labelName(), gaugeData11.x02_gaugeMainValue],
  ]);
  var data12 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData12.x01_labelName(), gaugeData12.x02_gaugeMainValue],
  ]);
  var data13 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData13.x01_labelName(), gaugeData13.x02_gaugeMainValue],
  ]);
  var data14 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData14.x01_labelName(), gaugeData14.x02_gaugeMainValue],
  ]);
  var data15 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData15.x01_labelName(), gaugeData15.x02_gaugeMainValue],
  ]);
  //TODO refactor declaring new objects with class

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
    greenTo: gaugeData1.x10_gaugeGreenTo
  };
  //this is specific object!
  var options2 = {
    optionsNumber: 2,
    min: gaugeData2.x07_gaugeMinimum,
    max: gaugeData2.x08_gaugeMaximum,
    width: 280,
    height: 280,
    redFrom: gaugeData2.x07_gaugeMinimum,
    redTo: (gaugeData2.x07_gaugeMinimum + gaugeData2.x14_gaugeRedTo - gaugeData2.x13_gaugeRedFrom),
    yellowFrom: (gaugeData2.x07_gaugeMinimum + gaugeData2.x14_gaugeRedTo - gaugeData2.x13_gaugeRedFrom),
    yellowTo: gaugeData2.x09_gaugeGreenFrom,
    greenFrom: gaugeData2.x09_gaugeGreenFrom,
    greenTo: gaugeData2.x10_gaugeGreenTo
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
    greenTo: gaugeData3.x10_gaugeGreenTo
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
    greenTo: gaugeData4.x10_gaugeGreenTo
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
    greenTo: gaugeData5.x10_gaugeGreenTo
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
    greenTo: gaugeData6.x10_gaugeGreenTo
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
    greenTo: gaugeData7.x10_gaugeGreenTo
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
    greenTo: gaugeData8.x10_gaugeGreenTo
  };
  var options9 = {
    optionsNumber: 9,
    min: gaugeData9.x07_gaugeMinimum,
    max: gaugeData9.x08_gaugeMaximum,
    width: 280,
    height: 280,
    redFrom: gaugeData9.x13_gaugeRedFrom,
    redTo: gaugeData9.x14_gaugeRedTo,
    yellowFrom: gaugeData9.x11_gaugeYellowFrom,
    yellowTo: gaugeData9.x12_gaugeYellowTo,
    greenFrom: gaugeData9.x09_gaugeGreenFrom,
    greenTo: gaugeData9.x10_gaugeGreenTo
  };
  var options10 = {
    optionsNumber: 10,
    min: gaugeData10.x07_gaugeMinimum,
    max: gaugeData10.x08_gaugeMaximum,
    width: 280,
    height: 280,
    redFrom: gaugeData10.x13_gaugeRedFrom,
    redTo: gaugeData10.x14_gaugeRedTo,
    yellowFrom: gaugeData10.x11_gaugeYellowFrom,
    yellowTo: gaugeData10.x12_gaugeYellowTo,
    greenFrom: gaugeData10.x09_gaugeGreenFrom,
    greenTo: gaugeData10.x10_gaugeGreenTo
  };
  var options11 = {
    optionsNumber: 11,
    min: gaugeData11.x07_gaugeMinimum,
    max: gaugeData11.x08_gaugeMaximum,
    width: 280,
    height: 280,
    redFrom: gaugeData11.x13_gaugeRedFrom,
    redTo: gaugeData11.x14_gaugeRedTo,
    yellowFrom: gaugeData11.x11_gaugeYellowFrom,
    yellowTo: gaugeData11.x12_gaugeYellowTo,
    greenFrom: gaugeData11.x09_gaugeGreenFrom,
    greenTo: gaugeData11.x10_gaugeGreenTo
  };
  var options12 = {
    optionsNumber: 12,
    min: gaugeData12.x07_gaugeMinimum,
    max: gaugeData12.x08_gaugeMaximum,
    width: 280,
    height: 280,
    redFrom: gaugeData12.x13_gaugeRedFrom,
    redTo: gaugeData12.x14_gaugeRedTo,
    yellowFrom: gaugeData12.x11_gaugeYellowFrom,
    yellowTo: gaugeData12.x12_gaugeYellowTo,
    greenFrom: gaugeData12.x09_gaugeGreenFrom,
    greenTo: gaugeData12.x10_gaugeGreenTo
  };
  var options13 = {
    optionsNumber: 13,
    min: gaugeData13.x07_gaugeMinimum,
    max: gaugeData13.x08_gaugeMaximum,
    width: 280,
    height: 280,
    redFrom: gaugeData13.x13_gaugeRedFrom,
    redTo: gaugeData13.x14_gaugeRedTo,
    yellowFrom: gaugeData13.x11_gaugeYellowFrom,
    yellowTo: gaugeData13.x12_gaugeYellowTo,
    greenFrom: gaugeData13.x09_gaugeGreenFrom,
    greenTo: gaugeData13.x10_gaugeGreenTo
  };
  //this is specific object!
  var options14 = {
    optionsNumber: 14,
    min: 10,
    max: 27,
    width: 280,
    height: 280,
    redFrom: 24,
    redTo: 27,
    yellowFrom: 21,
    yellowTo: 24,
    greenFrom: 15,
    greenTo: 21
  };
  //this is specific object!
  var options15 = {
    optionsNumber: 15,
    min: 0,
    max: 12,
    width: 280,
    height: 280,
    redFrom: 9,
    redTo: 12,
    yellowFrom: 7.5,
    yellowTo: 9,
    greenFrom: gaugeData15.x09_gaugeGreenFrom,
    greenTo: gaugeData15.x10_gaugeGreenTo
  };

  var chart1 = new google.visualization.Gauge(document.getElementById("google_gauge_chart1"));
  var chart2 = new google.visualization.Gauge(document.getElementById("google_gauge_chart2"));
  var chart3 = new google.visualization.Gauge(document.getElementById("google_gauge_chart3"));
  var chart4 = new google.visualization.Gauge(document.getElementById("google_gauge_chart4"));
  var chart5 = new google.visualization.Gauge(document.getElementById("google_gauge_chart5"));
  var chart6 = new google.visualization.Gauge(document.getElementById("google_gauge_chart6"));
  var chart7 = new google.visualization.Gauge(document.getElementById("google_gauge_chart7"));
  var chart8 = new google.visualization.Gauge(document.getElementById("google_gauge_chart8"));
  var chart9 = new google.visualization.Gauge(document.getElementById("google_gauge_chart9"));
  var chart10 = new google.visualization.Gauge(document.getElementById("google_gauge_chart10"));
  var chart11 = new google.visualization.Gauge(document.getElementById("google_gauge_chart11"));
  var chart12 = new google.visualization.Gauge(document.getElementById("google_gauge_chart12"));
  var chart13 = new google.visualization.Gauge(document.getElementById("google_gauge_chart13"));
  var chart14 = new google.visualization.Gauge(document.getElementById("google_gauge_chart14"));
  var chart15 = new google.visualization.Gauge(document.getElementById("google_gauge_chart15"));

  chart1.draw(data1, options1);
  chart2.draw(data2, options2);
  chart3.draw(data3, options3);
  chart4.draw(data4, options4);
  chart5.draw(data5, options5);
  chart6.draw(data6, options6);
  chart7.draw(data7, options7);
  chart8.draw(data8, options8);
  chart9.draw(data9, options9);
  chart10.draw(data10, options10);
  chart11.draw(data11, options11);
  chart12.draw(data12, options12);
  chart13.draw(data13, options13);
  chart14.draw(data14, options14);
  chart15.draw(data15, options15);

}