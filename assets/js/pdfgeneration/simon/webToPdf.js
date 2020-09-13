function getPDFFileButton() {
  prepareWebForConversion();

  let currentDate = new Date();
  let dateTime =
    "Datum: " +
    currentDate.getDate() +
    "." +
    (currentDate.getMonth() + 1) +
    "." +
    currentDate.getFullYear() +
    " Čas: " +
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
  
  const townName = document.getElementById("townName").innerHTML

  const docHeader = `Obcevkruhu.cz - Analýza Odpadového hospodářství pro obec: ${townName}`;
  const displayDateTime = dateTime;

  const fileName = "AnalyzaOH_" + document.getElementById("townName").innerText + ".pdf";

  const usedChartsNumbers = getNumberOfUsedCharts();
  const arrayOfPairs = splitArrayIntoArrayOfPairs(usedChartsNumbers);
  //test
  console.log(usedChartsNumbers);//test
  console.log(arrayOfPairs);//test

  // here printing div with content ".content-body"
  // using html canvas to save as required pdf to image to preserve css
  return html2canvas(document.querySelector("#results-content-body"), {
        background: "#ffffff",
        onrendered: function(canvas) {
          var myImage = canvas.toDataURL("image/jpeg,1.0");
          // Adjust width and height
          var imgWidth = (canvas.width * 22) / 120;
          var imgHeight = (canvas.height * 22) / 120; 

          // jspdf changes
          var pdf = new jsPDF('p', 'mm', 'a4');
          pdf.setFont("FreeSerif");
          pdf.setFontSize(14);
          pdf.text(docHeader, 15, 25);
          pdf.text(displayDateTime, 15, 35);
          pdf.addImage(myImage, 'JPEG', 15, 45, imgWidth, imgHeight); // 2: 19

          pdf.save(fileName);
        }
    });

  /* Support functions */
  function prepareWebForConversion() {

    drawChartColumns("pdfPrint");
    displayChartType("gauges","bars"); 
    document.querySelector("#results-content-body").classList.add("pdfPrint");
    document.querySelector("#results-content-body").classList.remove("mobileWidth");
    document.getElementById("resetViewfterPdfConversion").classList.remove("displayNone");
    document.getElementById("resetViewfterPdfConversion").classList.add("visible");

  }

  function getNumberOfUsedCharts(){

    let outputArray = [];
    for ( var i = 1; i < 16; i++ ) {
  
      let selector = "gaugeData" + i;
  
      if (! (window[selector]["x02_gaugeMainValue"] == 0)) {
        outputArray.push(i);
      }
  
    }
    return outputArray;
  }
  
  function splitArrayIntoArrayOfPairs(inputArray) {

    let outputArray = [];
  
    for(var i = 0; i< inputArray.length; i = i + 2){
      let row = [];
      let firstItem;
      let secondItem;
      let pairArray = [];
      if ( i < inputArray.length - 2 ) {
        firstItem = inputArray[i];
        secondItem = inputArray[(i + 1)];
        pairArray = [firstItem, secondItem]
      } else {
        firstItem = inputArray[i];
        pairArray = [firstItem]
      }
      
      row.push(pairArray);
      outputArray.push(row);
    }

    return outputArray;
  }
}

$("#btnPrint").on("click", function () {
  getPDFFileButton();
  cleanAfterPdfConversion();

});

function cleanAfterPdfConversion() {
  document.querySelector("#results-content-body").classList.remove("pdfPrint");
  document.querySelector("#results-content-body").classList.add("mobileWidth");
  document.getElementById("resetViewfterPdfConversion").classList.add("displayNone");
  document.getElementById("resetViewfterPdfConversion").classList.remove("visible");
  drawChartColumns("webView");
}
