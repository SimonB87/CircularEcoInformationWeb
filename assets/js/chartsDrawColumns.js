function drawChartColumns() {
  Chart.defaults.global.defaultFontColor = 'white';
  Chart.defaults.global.defaultFontSize = 16;

  //custom setting svalues
  var myCustom_backgroundColor = ['rgba(229, 184, 150, 0.8)', 'rgba(150, 229, 184, 0.8)','rgba(184, 150, 229, 0.8)'];
  var myCustom_borderColor = ['rgba(137, 110, 90, 1)','rgba(90, 137, 110, 1)','rgba(110, 90, 137, 1)'];
  var myCustom_scales = { yAxes: [{gridLines: { color: "#D3D3D3" },ticks: { beginAtZero: true, fontSize: 15 }}] };
  var myCustom_labels = ['Vaše hodnota', 'Krajská hodnota', 'Celostátní hodnota'];
  
  //Chart 1
  if (! (gaugeData1.x02_gaugeMainValue == 0)) {
    document.querySelector(".results.formTogler_panel3 .field .charts.myChart1").classList.remove("displayNone");
    var ctx1 = document.getElementById('myChart1').getContext('2d');
    var myChart1 = new Chart(ctx1, {
        chartId: 1,
        type: 'bar',
        data: {
            labels: myCustom_labels,
            datasets: [{
                data: [gaugeData1.x02_gaugeMainValue, getComparisonValues(1,"region"), getComparisonValues(1,"country")],
                backgroundColor: myCustom_backgroundColor,
                borderColor: myCustom_borderColor,
                borderWidth: 2
            }]
        },
        options: {
            title: {
                display: true,
                text: gaugeData1.x00_fullLabelName(),
                fontSize: 14
            },
            legend: { display: false },
            tooltip: { enable: true },
            scales: myCustom_scales,
            responsive: true,
            maintainAspectRatio: false
        }
    });

  } else {
     document.querySelector(".results.formTogler_panel3 .field .charts.myChart1").classList.add("displayNone");
  }
  
  //Chart 2
  if (! (gaugeData2.x02_gaugeMainValue == 0)) {
    document.querySelector(".results.formTogler_panel3 .field .charts.myChart2").classList.remove("displayNone");
    var ctx2 = document.getElementById('myChart2').getContext('2d');
    var myChart2 = new Chart(ctx2, {
      chartId: 2,
      type: 'bar',
      data: {
          labels: myCustom_labels,
          datasets: [{
              data: [gaugeData2.x02_gaugeMainValue, getComparisonValues(2,"region"), getComparisonValues(2,"country")],
              backgroundColor: myCustom_backgroundColor,
              borderColor: myCustom_borderColor,
              borderWidth: 2
          }]
      },
      options: {
          title: {
              display: true,
              text: gaugeData2.x00_fullLabelName(),
          },
          legend: { display: false },
          scales: myCustom_scales,
          responsive: true,
          maintainAspectRatio: false
      }
  });

  } else {
    document.querySelector(".results.formTogler_panel3 .field .charts.myChart2").classList.add("displayNone");
  }

  //Chart 3
  if (! (gaugeData3.x02_gaugeMainValue == 0)) {
    document.querySelector(".results.formTogler_panel3 .field .charts.myChart3").classList.remove("displayNone");
    var ctx3 = document.getElementById('myChart3').getContext('2d');
    var myChart3 = new Chart(ctx3, {
      chartId: 3,
      type: 'bar',
      data: {
          labels: myCustom_labels,
          datasets: [{
              data: [gaugeData3.x02_gaugeMainValue, getComparisonValues(3,"region"), getComparisonValues(3,"country")],
              backgroundColor: myCustom_backgroundColor,
              borderColor: myCustom_borderColor,
              borderWidth: 2
          }]
      },
      options: {
          title: {
              display: true,
              text: gaugeData3.x00_fullLabelName(),
          },
          legend: { display: false },
          scales: myCustom_scales,
          responsive: true,
          maintainAspectRatio: false
      }
  });

  } else {
    document.querySelector(".results.formTogler_panel3 .field .charts.myChart3").classList.add("displayNone");
  }

  //Chart 4
  if (! (gaugeData4.x02_gaugeMainValue == 0)) {
    document.querySelector(".results.formTogler_panel3 .field .charts.myChart4").classList.remove("displayNone");
    var ctx4 = document.getElementById('myChart4').getContext('2d');
    var myChart4 = new Chart(ctx4, {
      chartId: 4,
      type: 'bar',
      data: {
          labels: myCustom_labels,
          datasets: [{
              data: [gaugeData4.x02_gaugeMainValue, getComparisonValues(4,"region"), getComparisonValues(4,"country")],
              backgroundColor: myCustom_backgroundColor,
              borderColor: myCustom_borderColor,
              borderWidth: 2
          }]
      },
      options: {
          title: {
              display: true,
              text: gaugeData4.x00_fullLabelName(),
          },
          legend: { display: false },
          scales: myCustom_scales,
          responsive: true,
          maintainAspectRatio: false
      }
  });

  } else {
    document.querySelector(".results.formTogler_panel3 .field .charts.myChart4").classList.add("displayNone");
  }

  //Chart 5
  if (! (gaugeData5.x02_gaugeMainValue == 0)) {
    document.querySelector(".results.formTogler_panel3 .field .charts.myChart5").classList.remove("displayNone");
    var ctx5 = document.getElementById('myChart5').getContext('2d');
    var myChart5 = new Chart(ctx5, {
      chartId: 5,
      type: 'bar',
      data: {
          labels: myCustom_labels,
          datasets: [{
              data: [gaugeData5.x02_gaugeMainValue, getComparisonValues(5,"region"), getComparisonValues(5,"country")],
              backgroundColor: myCustom_backgroundColor,
              borderColor: myCustom_borderColor,
              borderWidth: 2
          }]
      },
      options: {
          title: {
              display: true,
              text: gaugeData5.x00_fullLabelName(),
          },
          legend: { display: false },
          scales: myCustom_scales,
          responsive: true,
          maintainAspectRatio: false
      }
  });

  } else {
    document.querySelector(".results.formTogler_panel3 .field .charts.myChart5").classList.add("displayNone");
  }

  //Chart 6
  if (! (gaugeData6.x02_gaugeMainValue == 0)) {
    document.querySelector(".results.formTogler_panel3 .field .charts.myChart6").classList.remove("displayNone");
    var ctx6 = document.getElementById('myChart6').getContext('2d');
    var myChart6 = new Chart(ctx6, {
      chartId: 6,
      type: 'bar',
      data: {
          labels: myCustom_labels,
          datasets: [{
              data: [gaugeData6.x02_gaugeMainValue, getComparisonValues(6,"region"), getComparisonValues(6,"country")],
              backgroundColor: myCustom_backgroundColor,
              borderColor: myCustom_borderColor,
              borderWidth: 2
          }]
      },
      options: {
          title: {
              display: true,
              text: gaugeData6.x00_fullLabelName(),
          },
          legend: { display: false },
          scales: myCustom_scales,
          responsive: true,
          maintainAspectRatio: false
      }
  });

  } else {
    document.querySelector(".results.formTogler_panel3 .field .charts.myChart6").classList.add("displayNone");
  }

  //Chart 7
  if (! (gaugeData7.x02_gaugeMainValue == 0)) {
    document.querySelector(".results.formTogler_panel3 .field .charts.myChart7").classList.remove("displayNone");
    var ctx7 = document.getElementById('myChart7').getContext('2d');
    var myChart7 = new Chart(ctx7, {
      chartId: 7,
      type: 'bar',
      data: {
          labels: myCustom_labels,
          datasets: [{
              data: [gaugeData7.x02_gaugeMainValue, getComparisonValues(7,"region"), getComparisonValues(7,"country")],
              backgroundColor: myCustom_backgroundColor,
              borderColor: myCustom_borderColor,
              borderWidth: 2
          }]
      },
      options: {
          title: {
              display: true,
              text: gaugeData7.x00_fullLabelName(),
          },
          legend: { display: false },
          scales: myCustom_scales,
          responsive: true,
          maintainAspectRatio: false
      }
  });

  } else {
    document.querySelector(".results.formTogler_panel3 .field .charts.myChart7").classList.add("displayNone");
  }


  //Chart 8
  if (! (gaugeData8.x02_gaugeMainValue == 0)) {
    document.querySelector(".results.formTogler_panel3 .field .charts.myChart8").classList.remove("displayNone");
    var ctx8 = document.getElementById('myChart8').getContext('2d');
    var myChart8 = new Chart(ctx8, {
      chartId: 8,
      type: 'bar',
      data: {
          labels: myCustom_labels,
          datasets: [{
              data: [gaugeData8.x02_gaugeMainValue, getComparisonValues(8,"region"), getComparisonValues(8,"country")],
              backgroundColor: myCustom_backgroundColor,
              borderColor: myCustom_borderColor,
              borderWidth: 2
          }]
      },
      options: {
          title: {
              display: true,
              text: gaugeData8.x00_fullLabelName(),
          },
          legend: { display: false },
          scales: myCustom_scales,
          responsive: true,
          maintainAspectRatio: false
      }
  });

  } else {
    document.querySelector(".results.formTogler_panel3 .field .charts.myChart8").classList.add("displayNone");
  }


  function getComparisonValues(id, group){
    let selector = "valueComparioson";
    if (group == "country") {
      selector = selector + "Country";
    } else if (group == "region") {
      selector = selector + "Region";
    }

    if (id < 10) {
      selector = selector + "0" + id;
    } else if (id < 20) {
      selector = selector + id;
    }

    let result = document.getElementById(selector).innerText;
    result = parseFloat(result);
    return result;
  }
}

function displayChartType(chartToHide, chartToShow){

  //hide Charts
  if ( chartToHide == "gauges" ){

    for (let index = 1; index < 16; index++){
      let gaugeNumber = "gaugeData" + index;
      let selector = "#google_gauge_chart" + index;
      
      if ( !(window[gaugeNumber]["x02_gaugeMainValue"] == 0) ) {
        document.querySelector(selector).classList.add("displayNone");
      }
    }

    document.querySelector("#chartsToglerActions__gauge .button.primary").classList.remove("disabled");
    document.querySelector("#chartsToglerActions__chart .button.primary").classList.add("disabled");

  } else if ( chartToHide == "bars" ) {

    for (var index = 1; index < 16; index++){
      let gaugeNumber = "gaugeData" + index;
      let selector = ".charts.myChart" + index;

      if ( !(window[gaugeNumber]["x02_gaugeMainValue"] == 0 )) {
        document.querySelector(selector).classList.add("displayNone");
      }
    }

    document.querySelector("#chartsToglerActions__gauge .button.primary").classList.add("disabled");
    document.querySelector("#chartsToglerActions__chart .button.primary").classList.remove("disabled");

  }

  //show charts
  if ( chartToShow == "gauges" ){

    for (let index = 1; index < 16; index++){
      let gaugeNumber = "gaugeData" + index;
      let selector = "#google_gauge_chart" + index;
      
      if ( !(window[gaugeNumber]["x02_gaugeMainValue"] == 0 )) {
        document.querySelector(selector).classList.remove("displayNone");
      }
    }

  } else if ( chartToShow == "bars" ) {

    for (var index = 1; index < 16; index++){
      let gaugeNumber = "gaugeData" + index;
      let selector = ".charts.myChart" + index;

      if ( !(window[gaugeNumber]["x02_gaugeMainValue"] == 0 )) {
        document.querySelector(selector).classList.remove("displayNone");
      }
    }
    
  }

}