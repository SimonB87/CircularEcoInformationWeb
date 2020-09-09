//https://developers.google.com/chart/interactive/docs/gallery/columnchart
google.charts.load("current", {
  packages: ['corechart']
});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
      ["Element", "Kč", {
          role: "style"
      }],
      ["Vaše hodnota", 10.49, "color: #96e5b8;"],
      ["Krajská hodnota", 19.30, "color: #b896e5;"],
      ["Celostátní hodnota", 41.45, "color: #e5b896;"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
      {
          calc: "stringify",
          sourceColumn: 1,
          type: "string",
          role: "annotation"
      },
      2
  ]);

  var options = {
      title: "Náklady na Odpadové hospodářství (OH)",
      width: 600,
      height: 400,
      bar: {
          groupWidth: "95%"
      },
      legend: {
          position: "none"
      },
      backgroundColor: "#2d3537",
      opacity: 0.1,
      titleTextStyle: {
          color: '#fff'
      },
      hAxis: {
          textStyle: {
              color: '#fff'
          },
          titleTextStyle: {
              color: '#fff'
          }
      },
      vAxis: {
          textStyle: {
              color: '#fff'
          },
          titleTextStyle: {
              color: '#fff'
          }
      },
      legend: {
          textStyle: {
              color: '#fff'
          }
      },
      baselineColor: {
          color: '#FFF'
      },
      legend: {
          position: 'none'
      }
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
  chart.draw(view, options);
}