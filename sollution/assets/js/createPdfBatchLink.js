function addTypeIDtoLink(indexValue){
  const element = document.getElementById(`type_${indexValue}`);
  const valueCheck = element.checked;
  if (valueCheck == true) {
    
    const link = document.getElementById("pdfBatchDownload");
    const solutionsString = link.getAttribute("solutions");

    const checkString = solutionsString.includes(indexValue);
    let newSolutionsString = "";

    if ( checkString == false ) {
      if (solutionsString.length < 3) {
        newSolutionsString = indexValue;
      } else {
        newSolutionsString = solutionsString + "," + indexValue;
      }


      link.setAttribute("solutions", newSolutionsString)
    }

    link.setAttribute("href", "solutionmpdfbatch.php?types=[" + newSolutionsString +"]"); 
  }
}