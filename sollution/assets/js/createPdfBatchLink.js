function addTypeIDtoLink(indexValue){
  const element = document.getElementById(`type_${indexValue}`);
  const valueCheck = element.checked;

  const link = document.getElementById("pdfBatchDownload");
  const solutionsString = link.getAttribute("solutions");

  const checkString = solutionsString.includes(indexValue);

  //add item to link
  if (valueCheck == true) {
    let newSolutionsString = "";

    if ( checkString == false ) {
      if (solutionsString.length < 3) {
        newSolutionsString = indexValue;
      } else {
        newSolutionsString = solutionsString + "," + indexValue;
      }

      link.setAttribute(`solutions`, newSolutionsString);
      const newLinkHref = `solutionmpdfbatch.php?types=[${newSolutionsString}]`;
      link.setAttribute(`href`, newLinkHref); 
    }
  
  //remove item to link 
  } else {

    const indexOfSolution = solutionsString.indexOf(indexValue);
    const newSolutionsString = solutionsString;

    if (checkString) {
      const stringLength = solutionsString.length;
      let newString = "";

      if (indexOfSolution == 0) {
        newString = newSolutionsString.substring(4, stringLength);
      } else if (indexOfSolution > 0) {

        let solutionsArray = newSolutionsString.split(",");
        const toStringIndexValue = indexValue + "";
        const indexOfItemToRemove = solutionsArray.indexOf(toStringIndexValue);

        if (indexOfItemToRemove > -1) {
          solutionsArray.splice(indexOfItemToRemove, 1);
        }
        newString = solutionsArray.join();
      }

      if (newString[0] == ",") {
        const newStringLength = newString.length;
        newString = newString.substring(1, newStringLength);
      }

      if (newString[(newString.length - 1)] == ",") {
        newString = newString.substring(0, (newString.length - 2));
      }

      link.setAttribute(`solutions`, newString); 
      link.setAttribute(`href`, `solutionmpdfbatch.php?types=[${newString}]`);

    }

  }
} 