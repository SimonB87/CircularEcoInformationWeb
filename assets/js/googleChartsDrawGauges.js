function drawChart() {
  var selectedRegion = document.getElementById("region_cr").value;
  var gaugeData1 = {
    gaugeNumber: 1,
    labelName: gaugeAction_getLabelNameTitle(this.gaugeNumber),
    gaugeMainValue: gaugeAction_getMainGaugeValue(this.gaugeNumber),
    wasteCategory: gaugeAction_getWasteCategory(this.gaugeNumber),
    difference: gaugeAction_getDifferenceValue(this.wasteCategory, selectedRegion, this.gaugeNumber),
    lowerComparisonValue: gaugeAction_getValueFromWasteData("lower", this.wasteCategory, selectedRegion, this.gaugeNumber),
    upperComparisonValue: gaugeAction_getValueFromWasteData("upper", this.wasteCategory, selectedRegion, this.gaugeNumber),
    gaugeMinimum: this.lowerComparisonValue - 2 * this.difference,
    gaugeMaximum: this.upperComparisonValue + 2 * this.difference,
    gaugeGreenFrom: this.lowerComparisonValue,
    gaugeGreenTo: this.upperComparisonValue,
    gaugeYellowFrom: this.gaugeGreenTo,
    gaugeYellowTo: this.gaugeYellowFrom,
    gaugeRedFrom: this.gaugeYellowTo,
    gaugeRedTo: this.gaugeMaximum,
    gaugeMinorTicks: parseInt(Number(this.difference) / 4)
  };
  var gaugeData2 = {
    gaugeNumber: 2,
    labelName: gaugeAction_getLabelNameTitle(this.gaugeNumber),
    gaugeMainValue: gaugeAction_getMainGaugeValue(this.gaugeNumber),
    wasteCategory: gaugeAction_getWasteCategory(this.gaugeNumber),
    difference: gaugeAction_getDifferenceValue(this.wasteCategory, selectedRegion, this.gaugeNumber),
    lowerComparisonValue: gaugeAction_getValueFromWasteData("lower", this.wasteCategory, selectedRegion, this.gaugeNumber),
    upperComparisonValue: gaugeAction_getValueFromWasteData("upper", this.wasteCategory, selectedRegion, this.gaugeNumber),
    gaugeMinimum: this.lowerComparisonValue - 2 * this.difference,
    gaugeMaximum: this.upperComparisonValue + 2 * this.difference,
    gaugeGreenFrom: this.lowerComparisonValue,
    gaugeGreenTo: this.upperComparisonValue,
    gaugeYellowFrom: this.gaugeGreenTo,
    gaugeYellowTo: this.gaugeYellowFrom,
    gaugeRedFrom: this.gaugeYellowTo,
    gaugeRedTo: this.gaugeMaximum,
    gaugeMinorTicks: parseInt(Number(this.difference) / 4)
  };

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
    min: gaugeData1.gaugeMinimum,
    max: gaugeData1.gaugeMaximum,
    width: 300,
    height: 300,
    redFrom: gaugeData1.gaugeRedFrom,
    redTo: gaugeData1.gaugeRedTo,
    yellowFrom: gaugeData1.gaugeYellowFrom,
    yellowTo: gaugeData1.gaugeYellowTo,
    greenFrom: gaugeData1.gaugeGreenFrom,
    greenTo: gaugeData1.gaugeGreenTo,
    minorTicks: gaugeData1.gaugeMinorTicks
  };
  var options2 = {
    optionsNumber: 2,
    min: gaugeData1.gaugeMinimum,
    max: gaugeData1.gaugeMaximum,
    width: 300,
    height: 300,
    redFrom: gaugeData1.gaugeRedFrom,
    redTo: gaugeData1.gaugeRedTo,
    yellowFrom: gaugeData1.gaugeYellowFrom,
    yellowTo: gaugeData1.gaugeYellowTo,
    greenFrom: gaugeData1.gaugeGreenFrom,
    greenTo: gaugeData1.gaugeGreenTo,
    minorTicks: gaugeData1.gaugeMinorTicks
  };

  var chart1 = new google.visualization.Gauge(document.getElementById("google_gauge_chart1"));
  var chart2 = new google.visualization.Gauge(document.getElementById("google_gauge_chart2"));

  chart1.draw(data1, options1);
  chart2.draw(data2, options2);

}