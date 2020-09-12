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

  const docHeader = `Obcevkruhu.cz - Analýza Odpadového hospodářství obce ${townName}`;
  const displayDateTime = dateTime;

  const fileName = "AnalyzaOH_" + document.getElementById("townName").innerText + ".pdf";

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
          pdf.text(docHeader, 20, 25);
          pdf.text(displayDateTime, 20, 35);
          pdf.addImage(myImage, 'JPEG', 15, 45, imgWidth, imgHeight); // 2: 19

          pdf.save(fileName);
        }
    });

  function prepareWebForConversion() {
    drawChartColumns("pdfPrint");
    displayChartType("gauges","bars"); 
    document.querySelector("#results-content-body").classList.add("pdfPrint");
    document.querySelector("#results-content-body").classList.remove("mobileWidth");
    document.getElementById("resetViewfterPdfConversion").classList.remove("displayNone");
    document.getElementById("resetViewfterPdfConversion").classList.add("visible");
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

setInterval(
  function(){ 
    let resetViewButton_classes = document.getElementById("resetViewfterPdfConversion").classList;
    //test
    console.log(resetViewButton_classes.value);
    //test
    let isResetViewVisible = resetViewButton_classes.value.search("visible");
    if (isResetViewVisible > 0) {
      cleanAfterPdfConversion();
    }
  }, 2000);