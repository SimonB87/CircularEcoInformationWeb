//google.charts.load('current', { 'packages': ['gauge'] });
//google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  //test
  console.log("drawChart function");
  //test
  let gaugeData1 = {
    labelName: document.querySelector(".result1 .gauge .result_title").innerText,
    gaugeMainValue: Number(document.getElementById("wasteResultNotice01").innerText)
  };
  let gaugeData2 = {
    labelName: document.querySelector(".result2 .gauge .result_title").innerText,
    gaugeMainValue: Number(document.getElementById("wasteResultNotice02").innerText)
  };

  var data1 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData1.labelName, gaugeData1.gaugeMainValue],
  ]);
  var data2 = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    [gaugeData2.labelName, gaugeData2.gaugeMainValue],
  ]);

  var options1 = {
    width: 300,
    height: 300,
    redFrom: 90,
    redTo: 100,
    yellowFrom: 75,
    yellowTo: 90,
    minorTicks: 5
  };
  var options2 = {
    width: 300,
    height: 300,
    redFrom: 90,
    redTo: 100,
    yellowFrom: 75,
    yellowTo: 90,
    minorTicks: 5
  };

  var chart1 = new google.visualization.Gauge(document.getElementById("google_gauge_chart1"));
  var chart2 = new google.visualization.Gauge(document.getElementById("google_gauge_chart2"));

  chart1.draw(data1, options1);
  chart2.draw(data2, options2);
}  