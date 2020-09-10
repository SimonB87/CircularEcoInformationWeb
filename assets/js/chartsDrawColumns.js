function drawChartColumns() {
  Chart.defaults.global.defaultFontColor = 'white';

  //custom setting svalues
  var myCustom_backgroundColor = ['rgba(229, 184, 150, 0.8)', 'rgba(150, 229, 184, 0.8)','rgba(184, 150, 229, 0.8)'];
  var myCustom_borderColor = ['rgba(137, 110, 90, 1)','rgba(90, 137, 110, 1)','rgba(110, 90, 137, 1)'];
  var myCustom_scales = { yAxes: [{ ticks: { beginAtZero: true, fontSize: 14 } }] }
  var myCustom_labels = ['Vaše hodnota', 'Krajská hodnota', 'Celostátní hodnota'];
  
  var ctx1 = document.getElementById('myChart1').getContext('2d');
  ctx1.height = 500;
  var myChart = new Chart(ctx1, {
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
          scales: myCustom_scales,
          responsive: true,
          maintainAspectRatio: false
      }
  });
  
  var ctx2 = document.getElementById('myChart2').getContext('2d');
  ctx2.height = 500;  
  var myChart = new Chart(ctx2, {
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

  function getComparisonValues(id, group){
    let selector = "valueComparioson";
    if (group == "country") {
      selector = selector + "Region";
    } else if (group == "region") {
      selector = selector + "Country";
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