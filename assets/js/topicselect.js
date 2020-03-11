(function($) {
  let counterCheckbox = 0;
  $(".checkbox_target").click(function() {
    let value = $(this).attr("data-value");
    let history = $("#submitresults").attr("data-selected");
    let isValueNew;

    // //
    /*
    console.log("value:: " + value);
    console.log("history:: " + history);
    */
    // //

    if ($(this).attr("status-checked") == "false") {
      $(this).attr("status-checked", "true");
      isValueNew = history.indexOf(value);
    } else {
      $(this).attr("status-checked", "false");
    }

    console.log("isValueNew:: " + isValueNew);

    if ((isValueNew = -1)) {
      if ($(this).attr("status-checked") == "true") {
        if (counterCheckbox > 0) {
          $("#submitresults").attr("data-selected", history + "," + value);
        } else {
          $("#submitresults").attr("data-selected", history + value);
        }
        counterCheckbox++;
      }
    }

    // //
    /*
    let stringText = $("#submitresults").attr("data-selected");
    let stringResult = stringText.indexOf("1");
    console.log("stringResult:: " + stringResult);
    
    console.log("finale:: " + history);
    */
    // //
  });

  $("#resetSelection").click(function() {
    $(".checkbox_target[status-checked=true]")
      .click()
      .attr("status-checked", "false");
    $("#submitresults").attr("data-selected", "");
  });

  //
})(jQuery);
