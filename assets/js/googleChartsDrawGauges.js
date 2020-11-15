var selectedRegion;

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
    x00_fullLabelName() {
      return gaugeAction_getFullLabelNameTitle(this.gaugeNumber);
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

function gaugeAction_getFullLabelNameTitle(selectedLabelNumber) {
  let myQuerySelectorName = ".result" + selectedLabelNumber + " .gauge .result_title";
  let myQuerySelectorUnit = ".result" + selectedLabelNumber + " .gauge .result_unit";
  let labelName = document.querySelector(myQuerySelectorName).innerText;
  let labelUnit = document.querySelector(myQuerySelectorUnit).innerText;
  let fullLabelNameForGauge = labelName + " " + labelUnit;
  return fullLabelNameForGauge;
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
    [gaugeData1.x01_labelName(), gaugeData1.x07_gaugeMinimum],
  ]);
  var data2 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData2.x01_labelName(), gaugeData2.x07_gaugeMinimum],
  ]);
  var data3 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData3.x01_labelName(), gaugeData3.x07_gaugeMinimum],
  ]);
  var data4 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData4.x01_labelName(), gaugeData4.x07_gaugeMinimum],
  ]);
  var data5 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData5.x01_labelName(), gaugeData5.x07_gaugeMinimum],
  ]);
  var data6 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData6.x01_labelName(), gaugeData6.x07_gaugeMinimum],
  ]);
  var data7 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData7.x01_labelName(), gaugeData7.x07_gaugeMinimum],
  ]);
  var data8 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData8.x01_labelName(), gaugeData8.x07_gaugeMinimum],
  ]);
  var data9 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData9.x01_labelName(), gaugeData9.x07_gaugeMinimum],
  ]);
  var data10 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ["PRODUKCE KOMUNÁLNÍCH ODPADŮ", gaugeData10.x07_gaugeMinimum],
  ]);
  var data11 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData11.x01_labelName(), gaugeData11.x07_gaugeMinimum],
  ]);
  var data12 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData12.x01_labelName(), gaugeData12.x07_gaugeMinimum],
  ]);
  var data13 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData13.x01_labelName(), gaugeData13.x07_gaugeMinimum],
  ]);
  var data14 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData14.x01_labelName(), gaugeData14.x07_gaugeMinimum],
  ]);
  var data15 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData15.x01_labelName(), gaugeData15.x07_gaugeMinimum],
  ]);
  //TODO refactor declaring new objects with class

  class OptionObject {
    constructor(indexValue, minimum, maximum, sizeWidth, sizeHeight, colorRedStart, colorRedEnd, colorYellowStart, colorYellowEnd, colorGreenStart, colorGreenEnd) {
      this.optionsNumber  = indexValue;
      this.min = minimum;
      this.max = maximum;
      this.width = sizeWidth;
      this.height = sizeHeight;
      this.redFrom = colorRedStart;
      this.redTo = colorRedEnd;
      this.yellowFrom  = colorYellowStart;
      this.yellowTo  = colorYellowEnd;
      this.greenFrom  = colorGreenStart;
      this.greenTo  = colorGreenEnd;
    }
  }

  var options1 = new OptionObject(1, gaugeData1.x07_gaugeMinimum, gaugeData1.x08_gaugeMaximum, 280, 280, gaugeData1.x13_gaugeRedFrom, gaugeData1.x14_gaugeRedTo, gaugeData1.x11_gaugeYellowFrom, gaugeData1.x12_gaugeYellowTo, gaugeData1.x09_gaugeGreenFrom, gaugeData1.x10_gaugeGreenTo);
  var options2 = new OptionObject(2, gaugeData2.x07_gaugeMinimum, gaugeData2.x08_gaugeMaximum, 280, 280, gaugeData2.x07_gaugeMinimum, (gaugeData2.x07_gaugeMinimum + gaugeData2.x14_gaugeRedTo - gaugeData2.x13_gaugeRedFrom), (gaugeData2.x07_gaugeMinimum + gaugeData2.x14_gaugeRedTo - gaugeData2.x13_gaugeRedFrom), gaugeData2.x09_gaugeGreenFrom, gaugeData2.x09_gaugeGreenFrom, gaugeData2.x10_gaugeGreenTo);
  var options3 = new OptionObject(3, gaugeData3.x07_gaugeMinimum, gaugeData3.x08_gaugeMaximum, 280, 280, gaugeData3.x13_gaugeRedFrom, gaugeData3.x14_gaugeRedTo, gaugeData3.x11_gaugeYellowFrom, gaugeData3.x12_gaugeYellowTo, gaugeData3.x09_gaugeGreenFrom, gaugeData3.x10_gaugeGreenTo);
  var options4 = new OptionObject(4, gaugeData4.x07_gaugeMinimum, gaugeData4.x08_gaugeMaximum, 280, 280, gaugeData4.x13_gaugeRedFrom, gaugeData4.x14_gaugeRedTo, gaugeData4.x11_gaugeYellowFrom, gaugeData4.x12_gaugeYellowTo, gaugeData4.x09_gaugeGreenFrom, gaugeData4.x10_gaugeGreenTo);
  var options5 = new OptionObject(5, gaugeData5.x07_gaugeMinimum, gaugeData5.x08_gaugeMaximum, 280, 280, gaugeData5.x13_gaugeRedFrom, gaugeData5.x14_gaugeRedTo, gaugeData5.x11_gaugeYellowFrom, gaugeData5.x12_gaugeYellowTo, gaugeData5.x09_gaugeGreenFrom, gaugeData5.x10_gaugeGreenTo);
  var options6 = new OptionObject(6, gaugeData6.x07_gaugeMinimum, gaugeData6.x08_gaugeMaximum, 280, 280, gaugeData6.x13_gaugeRedFrom, gaugeData6.x14_gaugeRedTo, gaugeData6.x11_gaugeYellowFrom, gaugeData6.x12_gaugeYellowTo, gaugeData6.x09_gaugeGreenFrom, gaugeData6.x10_gaugeGreenTo);
  var options7 = new OptionObject(7, gaugeData7.x07_gaugeMinimum, gaugeData7.x08_gaugeMaximum, 280, 280, gaugeData7.x13_gaugeRedFrom, gaugeData7.x14_gaugeRedTo, gaugeData7.x11_gaugeYellowFrom, gaugeData7.x12_gaugeYellowTo, gaugeData7.x09_gaugeGreenFrom, gaugeData7.x10_gaugeGreenTo);
  var options8 = new OptionObject(8, gaugeData8.x07_gaugeMinimum, gaugeData8.x08_gaugeMaximum, 280, 280, gaugeData8.x13_gaugeRedFrom, gaugeData8.x14_gaugeRedTo, gaugeData8.x11_gaugeYellowFrom, gaugeData8.x12_gaugeYellowTo, gaugeData8.x09_gaugeGreenFrom, gaugeData8.x10_gaugeGreenTo);
  var options9 = new OptionObject(9, gaugeData9.x07_gaugeMinimum, gaugeData9.x08_gaugeMaximum, 280, 280, gaugeData9.x13_gaugeRedFrom, gaugeData9.x14_gaugeRedTo, gaugeData9.x11_gaugeYellowFrom, gaugeData9.x12_gaugeYellowTo, gaugeData9.x09_gaugeGreenFrom, gaugeData9.x10_gaugeGreenTo);
  var options10 = new OptionObject(10, gaugeData10.x07_gaugeMinimum, gaugeData10.x08_gaugeMaximum, 280, 280, gaugeData10.x13_gaugeRedFrom, gaugeData10.x14_gaugeRedTo, gaugeData10.x11_gaugeYellowFrom, gaugeData10.x12_gaugeYellowTo, gaugeData10.x09_gaugeGreenFrom, gaugeData10.x10_gaugeGreenTo);
  var options11 = new OptionObject(11, gaugeData11.x07_gaugeMinimum, gaugeData11.x08_gaugeMaximum, 280, 280, gaugeData11.x13_gaugeRedFrom, gaugeData11.x14_gaugeRedTo, gaugeData11.x11_gaugeYellowFrom, gaugeData11.x12_gaugeYellowTo, gaugeData11.x09_gaugeGreenFrom, gaugeData11.x10_gaugeGreenTo);
  var options12 = new OptionObject(12, gaugeData12.x07_gaugeMinimum, gaugeData12.x08_gaugeMaximum, 280, 280, gaugeData12.x13_gaugeRedFrom, gaugeData12.x14_gaugeRedTo, gaugeData12.x11_gaugeYellowFrom, gaugeData12.x12_gaugeYellowTo, gaugeData12.x09_gaugeGreenFrom, gaugeData12.x10_gaugeGreenTo);
  var options13 = new OptionObject(13, gaugeData13.x07_gaugeMinimum, gaugeData13.x08_gaugeMaximum, 280, 280, gaugeData13.x13_gaugeRedFrom, gaugeData13.x14_gaugeRedTo, gaugeData13.x11_gaugeYellowFrom, gaugeData13.x12_gaugeYellowTo, gaugeData13.x09_gaugeGreenFrom, gaugeData13.x10_gaugeGreenTo);
  var options14 = new OptionObject(14, 10, 27, 280, 280, 24, 27, 21, 24, 15, 21);
  var options15 = new OptionObject(15, 0, 12, 280, 280, 9, 12, 7.5, 9, gaugeData15.x09_gaugeGreenFrom,gaugeData15.x10_gaugeGreenTo);


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

  //draw gauges only their input value is set
  for (let i = 1; i < 16; i++){
    document.querySelector(".results.formTogler_panel3 .fields .field.half.result" + i).classList.remove("displayNone");
  }

  if (! (gaugeData1.x02_gaugeMainValue == 0)) {
    chart1.draw(data1, options1);
  } else {
    document.querySelector(".results.formTogler_panel3 .fields .field.half.result1").classList.add("displayNone");
  }

  if (! (gaugeData2.x02_gaugeMainValue == 0)) {
    chart2.draw(data2, options2);
  } else {
    document.querySelector(".results.formTogler_panel3 .fields .field.half.result2").classList.add("displayNone");
  }

  if (! (gaugeData3.x02_gaugeMainValue == 0)) {
    chart3.draw(data3, options3);
  } else {
    document.querySelector(".results.formTogler_panel3 .fields .field.half.result3").classList.add("displayNone");
  }

  if (! (gaugeData4.x02_gaugeMainValue == 0)) {
    chart4.draw(data4, options4);
  } else {
    document.querySelector(".results.formTogler_panel3 .fields .field.half.result4").classList.add("displayNone");
  }

  if (! (gaugeData5.x02_gaugeMainValue == 0)) {
    chart5.draw(data5, options5);
  } else {
    document.querySelector(".results.formTogler_panel3 .fields .field.half.result5").classList.add("displayNone");
  }

  if (! (gaugeData6.x02_gaugeMainValue == 0)) {
    chart6.draw(data6, options6);
  } else {
    document.querySelector(".results.formTogler_panel3 .fields .field.half.result6").classList.add("displayNone");
  }

  if (! (gaugeData7.x02_gaugeMainValue == 0)) {
    chart7.draw(data7, options7);
  } else {
    document.querySelector(".results.formTogler_panel3 .fields .field.half.result7").classList.add("displayNone");
  }

  if (! (gaugeData8.x02_gaugeMainValue == 0)) {
    chart8.draw(data8, options8);
  } else {
    document.querySelector(".results.formTogler_panel3 .fields .field.half.result8").classList.add("displayNone");
  }

  if (! (gaugeData9.x02_gaugeMainValue == 0)) {
    chart9.draw(data9, options9);
  } else {
    document.querySelector(".results.formTogler_panel3 .fields .field.half.result9").classList.add("displayNone");
  }

  if (! (gaugeData10.x02_gaugeMainValue == 0)) {
    chart10.draw(data10, options10);
  } else {
    document.querySelector(".results.formTogler_panel3 .fields .field.half.result10").classList.add("displayNone");
  }

  if (! (gaugeData11.x02_gaugeMainValue == 0)) {
    chart11.draw(data11, options11);
  } else {
    document.querySelector(".results.formTogler_panel3 .fields .field.half.result11").classList.add("displayNone");
  }

  if (! (gaugeData12.x02_gaugeMainValue == 0)) {
    chart12.draw(data12, options12);
  } else {
    document.querySelector(".results.formTogler_panel3 .fields .field.half.result12").classList.add("displayNone");
  }

  if (! (gaugeData13.x02_gaugeMainValue == 0)) {
    chart13.draw(data13, options13);
  } else {
    document.querySelector(".results.formTogler_panel3 .fields .field.half.result13").classList.add("displayNone");
  }

  if (! (gaugeData14.x02_gaugeMainValue == 0)) {
    chart14.draw(data14, options14);
  } else {
    document.querySelector(".results.formTogler_panel3 .fields .field.half.result14").classList.add("displayNone");
  }

  if (! (gaugeData15.x02_gaugeMainValue == 0)) {
    chart15.draw(data15, options15);
  } else {
    document.querySelector(".results.formTogler_panel3 .fields .field.half.result15").classList.add("displayNone");
  }



  var data1ed = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData1.x01_labelName(), gaugeData1.x02_gaugeMainValue],
  ]);
  var data2ed = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData2.x01_labelName(), gaugeData2.x02_gaugeMainValue],
  ]);
  var data3ed = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData3.x01_labelName(), gaugeData3.x02_gaugeMainValue],
  ]);
  var data4ed = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData4.x01_labelName(), gaugeData4.x02_gaugeMainValue],
  ]);
  var data5ed = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData5.x01_labelName(), gaugeData5.x02_gaugeMainValue],
  ]);
  var data6ed = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData6.x01_labelName(), gaugeData6.x02_gaugeMainValue],
  ]);
  var data7ed = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData7.x01_labelName(), gaugeData7.x02_gaugeMainValue],
  ]);
  var data8ed = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData8.x01_labelName(), gaugeData8.x02_gaugeMainValue],
  ]);
  var data9ed = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData9.x01_labelName(), gaugeData9.x02_gaugeMainValue],
  ]);
  var data10ed = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ["PRODUKCE KOMUNÁLNÍCH ODPADŮ", gaugeData10.x02_gaugeMainValue],
  ]);
  var data11ed = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData11.x01_labelName(), gaugeData11.x02_gaugeMainValue],
  ]);
  var data12ed = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData12.x01_labelName(), gaugeData12.x02_gaugeMainValue],
  ]);
  var data13ed = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData13.x01_labelName(), gaugeData13.x02_gaugeMainValue],
  ]);
  var data14ed = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData14.x01_labelName(), gaugeData14.x02_gaugeMainValue],
  ]);
  var data15ed = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData15.x01_labelName(), gaugeData15.x02_gaugeMainValue],
  ]);
  //var chart1 = new google.visualization.Gauge(document.getElementById("google_gauge_chart1"));

  //draw gauges only their input value is set
  let timeDelay = 700;
  if (! (gaugeData1.x02_gaugeMainValue == 0))  {
    setTimeout(function(){ 
      chart1.draw(data1ed, options1); 
      timeDelay = timeDelay + 500;}, 
      timeDelay);
  }
  
  if (! (gaugeData2.x02_gaugeMainValue == 0))  {
    setTimeout(function(){ 
      chart2.draw(data2ed, options2); 
      timeDelay = timeDelay + 500;}, 
      timeDelay);
  }
  
  if (! (gaugeData3.x02_gaugeMainValue == 0))  {
  setTimeout(function(){ 
    chart3.draw(data3ed, options3); 
    timeDelay = timeDelay + 500;}, 
    timeDelay);
  }

  if (! (gaugeData4.x02_gaugeMainValue == 0))  {
  setTimeout(function(){ 
    chart4.draw(data4ed, options4); 
    timeDelay = timeDelay + 500;}, 
    timeDelay);
  }

  if (! (gaugeData5.x02_gaugeMainValue == 0))  {
  setTimeout(function(){ 
    chart5.draw(data5ed, options5); 
    timeDelay = timeDelay + 500;}, 
    timeDelay);
  }

  if (! (gaugeData6.x02_gaugeMainValue == 0))  {
  setTimeout(function(){ 
    chart6.draw(data6ed, options6); 
    timeDelay = timeDelay + 500;}, timeDelay);
  }

  if (! (gaugeData7.x02_gaugeMainValue == 0))  {
  setTimeout(function(){ 
    chart7.draw(data7ed, options7); 
    timeDelay = timeDelay + 500;}, timeDelay);
  }

  if (! (gaugeData8.x02_gaugeMainValue == 0))  {
  setTimeout(function(){ 
    chart8.draw(data8ed, options8); 
    timeDelay = timeDelay + 500;}, timeDelay);
  }

  if (! (gaugeData9.x02_gaugeMainValue == 0))  {
  setTimeout(function(){ 
    chart9.draw(data9ed, options9); 
    timeDelay = timeDelay + 500;}, timeDelay);
  }

  if (! (gaugeData10.x02_gaugeMainValue == 0))  {
  setTimeout(function(){ 
    chart10.draw(data10ed, options10); 
    timeDelay = timeDelay + 500;}, timeDelay);
  }

  if (! (gaugeData11.x02_gaugeMainValue == 0))  {
  setTimeout(function(){ 
    chart11.draw(data11ed, options11); 
    timeDelay = timeDelay + 500;}, timeDelay);
  }

  if (! (gaugeData12.x02_gaugeMainValue == 0))  {
  setTimeout(function(){ 
    chart12.draw(data12ed, options12); 
    timeDelay = timeDelay + 500;}, timeDelay);
  }

  if (! (gaugeData13.x02_gaugeMainValue == 0))  {
  setTimeout(function(){ 
    chart13.draw(data13ed, options13); 
    timeDelay = timeDelay + 500;}, timeDelay);
  }

  if (! (gaugeData14.x02_gaugeMainValue == 0))  {
  setTimeout(function(){ 
    chart14.draw(data14ed, options14); 
    timeDelay = timeDelay + 500;}, timeDelay);
  }

  if (! (gaugeData15.x02_gaugeMainValue == 0))  {
  setTimeout(function(){ 
    chart15.draw(data15ed, options15); 
    timeDelay = timeDelay + 500;}, timeDelay);
  }

}
