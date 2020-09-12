function htmlToPdf() {

  const arrayWithUsedChartsNumbers = "arrayWithUsedChartsNumbers" + getNumberOfUsedCharts();

  //console.log("fce htmlToPdf");
  /*
  var pdf = new jsPDF("p", "pt", "letter");
  source = $("#HTMLtoPDF")[0];
  specialElementHandlers = {
    "#bypassme": function(element, renderer) {
      return true;
    }
  };
  margins = {
    top: 50,
    left: 60,
    width: 545
  };
  pdf.fromHTML(
    source, // HTML string or DOM elem ref.
    margins.left, // x coord
    margins.top, // y coord
    {
      width: margins.width, // max width of content on PDF
      elementHandlers: specialElementHandlers
    },
    function(dispose) {
      // dispose: object with X, Y of the last line add to the PDF
      //          this allow the insertion of new lines after html
      pdf.save("html2pdf.pdf");
      //console.log("fce htmlToPdf 1");
    }
  );*/

  



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

  const docHeader = `Obcevkruhu.cz - Analýza Odpadového hospodářství obce ${townName} | ${dateTime}`;

  const usedChartsNumbers = getNumberOfUsedCharts();
  const arrayOfPairs = splitArrayIntoArrayOfPairs(usedChartsNumbers);

  document.getElementById("results-content-body").classList.remove("mobileWidth");






  /*
  const titulek_nazevTypovehoReseni = document.getElementById(
    "projectDetailDesc--nazevTypovehoReseni"
  ).innerText;
  const text_nazevTypovehoReseni = document.getElementById(
    "projectDetail--titul"
  ).innerText;

  const titulek_kategorie = document.getElementById(
    "projectDetailDesc--kategorie"
  ).innerText;
  const text_kategorie = document.getElementById("projectDetail--kategorie")
    .innerText;

  const titulek_plny_popis = document.getElementById(
    "projectDetailDesc--plny_popis"
  ).innerText;
  const text_plny_popis = document.getElementById("projectDetail--plny_popis")
    .innerText;

  const titulek_podminky_vyuziti = document.getElementById(
    "projectDetailDesc--podminky_vyuziti"
  ).innerText;
  const text_podminky_vyuziti = document.getElementById(
    "projectDetail--podminky_vyuziti"
  ).innerText;

  const titulek_vyuzitelne_produkty = document.getElementById(
    "projectDetailDesc--vyuzitelne_produkty"
  ).innerText;
  const text_vyuzitelne_produkty = document.getElementById(
    "projectDetail--vyuzitelne_produkty"
  ).innerText;

  const titulek_SWOT_analyza = document.getElementById(
    "projectDetailDesc--SWOT_analyza"
  ).innerText;
  const text_SWOT_analyza = document.getElementById(
    "projectDetail--SWOT_analyza"
  ).innerText;

  const titulek_cilova_skupina = document.getElementById(
    "projectDetailDesc--cilova_skupina"
  ).innerText;
  const text_cilova_skupina = document.getElementById(
    "projectDetail--cilova_skupina"
  ).innerText;

  //some sections skipped 

  const titulek_priklad_praxe = document.getElementById(
    "projectDetailDesc--priklad_praxe"
  ).innerText;
  const text_priklad_praxe = document.getElementById(
    "projectDetail--priklad_praxe"
  ).innerText;
  */
  




  //import { jsPDF } from "jspdf";


  let doc = new jsPDF();
  //set regular font style
  doc.setFontType("regular");

  doc.setFontSize(9);
  doc.setFont("FreeSerif");
  doc.text(20, 12, docHeader);

  html2canvas(document.querySelector("#results-content-body"), {
    background: "#ffffff",
    onrendered: function(canvas) {
      var myImage = canvas.toDataURL("image/jpeg,1.0");
      // Adjust width and height
      var imgWidth = (canvas.width * 20) / 120;
      var imgHeight = (canvas.height * 20) / 120; 
      // jspdf changes
      doc.addImage(myImage, 'JPEG', 25, 12, imgWidth, imgHeight);
    }
  });
  
  /* //test
  doc.setFontSize(18);
  doc.setFont("FreeSerif");
  doc.text(20, 20, arrayWithUsedChartsNumbers);
  */  //test





  /*
  doc.setFontSize(18);
  doc.setFont("FreeSerif");
  doc.text(20, 20, titulek_nazevTypovehoReseni);

  doc.setFontSize(13);
  doc.setFont("FreeSerif");
  doc.setTextColor(0, 255, 0); //green color
  doc.text(20, 30, text_nazevTypovehoReseni);

  doc.setFontSize(18);
  doc.setFont("FreeSerif");
  doc.setTextColor(0, 0, 0); //black
  doc.text(20, 40, titulek_kategorie);

  doc.setFontSize(13);
  doc.setFont("FreeSerif");
  doc.setTextColor(0, 0, 255); //blue color
  doc.text(20, 50, text_kategorie);

  doc.setFontSize(18);
  doc.setFont("FreeSerif");
  doc.setTextColor(0, 0, 0); //black
  doc.text(20, 60, titulek_plny_popis);

  doc.setFontSize(13);
  doc.setFont("FreeSerif");
  doc.text(20, 70, text_plny_popis);

  doc.setFontSize(18);
  doc.setFont("FreeSerif");
  doc.text(20, 100, titulek_podminky_vyuziti);

  doc.setFontSize(13);
  doc.setFont("FreeSerif");
  doc.text(20, 110, text_podminky_vyuziti);

  doc.setFontSize(18);
  doc.setFont("FreeSerif");
  doc.text(20, 150, titulek_vyuzitelne_produkty);

  doc.setFontSize(13);
  doc.setFont("FreeSerif");
  doc.text(20, 160, text_vyuzitelne_produkty);

  doc.setFontSize(18);
  doc.setFont("FreeSerif");
  doc.text(20, 200, titulek_SWOT_analyza);

  doc.setFontSize(13);
  doc.setFont("FreeSerif");
  doc.text(20, 210, text_SWOT_analyza);

  doc.setFontSize(18);
  doc.setFont("FreeSerif");
  doc.text(20, 240, titulek_cilova_skupina);

  doc.setFontSize(13);
  doc.setFont("FreeSerif");
  doc.text(20, 250, text_cilova_skupina);

  // some sections skipped

  //go to next page
  doc.addPage("a4", "portrait");

  doc.setFontSize(18);
  doc.setFont("FreeSerif");
  doc.text(20, 20, titulek_priklad_praxe);

  doc.setFontSize(13);
  doc.setFont("FreeSerif");
  doc.text(20, 30, text_priklad_praxe);
  */

  const fileName = "AnalyzaOH_" + document.getElementById("townName").innerText + ".pdf";
  doc.save(fileName);

  document.getElementById("results-content-body").classList.add("mobileWidth");
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