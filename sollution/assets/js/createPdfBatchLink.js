var solutionCheckboxes;

document.addEventListener("DOMContentLoaded", function(event) { 
  var solutionCheckboxes = document.querySelectorAll(".table input.includeSolutionToPdf");
  for(var i = 0; i < solutionCheckboxes.length; i++) {
    solutionCheckboxes[i].addEventListener("click", displayValue);
    let output = solutionCheckboxes[i].getAttribute("solutionId");

    function displayValue() {
      let outputValue = "X";
      //let outputValue = solutionCheckboxes[i].getAttribute("solutionId");
      console.log(output);
      if ( solutionCheckboxes[i].checked ) {
        console.log(`is checked: ${outputValue}`);
      } else {
        console.log(`not checked: ${outputValue}`);
      }
    }
  }
});
