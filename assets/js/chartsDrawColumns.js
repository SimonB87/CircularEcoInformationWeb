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
                text: gaugeData1.x01_labelName(),
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
              text: gaugeData2.x01_labelName(),
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
              text: gaugeData3.x01_labelName(),
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

              //test
              console.log(`fce: displayChartType < chartToHide:  ${chartToHide} > < chartToShow> ${chartToShow} >` );
              //tets

  //hide Charts
  if ( chartToHide = "gauges" ){

    for (let index = 1; index < 16; index++){
      let gaugeNumber = "gaugeData" + index;
      let selector = "#google_gauge_chart" + index;
      
      if ( !(window[gaugeNumber]["x02_gaugeMainValue"] == 0) ) {
        document.querySelector(selector).classList.add("displayNone");

                    //test
                    console.log("Add display none to gauges");
                    console.log(gaugeNumber);
                    console.log(selector);
                    //tets
      }
    }

    document.getElementById("chartsToglerActions__gauge").classList.add("disabled");
    document.getElementById("chartsToglerActions__chart").classList.remove("disabled");

  } else if ( chartToHide = "bars" ) {

    for (var index = 1; index < 16; index++){
      let gaugeNumber = "gaugeData" + index;
      let selector = ".charts.myChart" + index;

      if ( !(window[gaugeNumber]["x02_gaugeMainValue"] == 0 )) {
        document.querySelector(selector).classList.add("displayNone");

                    //test
                    console.log("Add display none to bars");
                    console.log(gaugeNumber);
                    console.log(selector);
                    //tets
      }
    }

    document.getElementById("chartsToglerActions__gauge").classList.remove("disabled");
    document.getElementById("chartsToglerActions__chart").classList.add("disabled");

  }

  //show charts
  if ( chartToShow = "gauges" ){

    for (let index = 1; index < 16; index++){
      let gaugeNumber = "gaugeData" + index;
      let selector = "#google_gauge_chart" + index;
      
      if ( !(window[gaugeNumber]["x02_gaugeMainValue"] == 0 )) {
        document.querySelector(selector).classList.remove("displayNone");

                            //test
                            console.log("remove display none to gauges");
                            console.log(gaugeNumber);
                            console.log(selector);
                            //tets
      }
    }

  } else if ( chartToShow = "bars" ) {

    for (var index = 1; index < 16; index++){
      let gaugeNumber = "gaugeData" + index;
      let selector = ".charts.myChart" + index;

      if ( !(window[gaugeNumber]["x02_gaugeMainValue"] == 0 )) {
        document.querySelector(selector).classList.remove("displayNone");

                            //test
                            console.log("remove display none to bars");
                            console.log(gaugeNumber);
                            console.log(selector);
                            //tets
      }
    }
    
  }

}