(function($) {
  setTimeout(function() {
    $("#vyberTemata .fieldsForm input[type='checkbox']:checked").prop(
      "checked",
      false
    );
  }, 200);

  let counterCheckbox = 0;
  $(".checkbox_target").click(function() {
    let value = $(this).attr("data-value");
    let selectionHistory = $("#submitresults").attr("data-selected");
    let isValueNew = selectionHistory.indexOf(value);
    let editedSelectionHistory;
    let selectedTopicString;

    if ($("#submitresults").attr("data-selected") == "") {
      counterCheckbox = 0;
    }

    if ($(this).attr("status-checked") == "false") {
      $(this).attr("status-checked", "true");
    } else {
      $(this).attr("status-checked", "false");

      if (isValueNew == selectionHistory.length - 2) {
        value = "," + value;
      } else if (isValueNew >= 0) {
        value = value + ",";
      }
      editedSelectionHistory = selectionHistory.replace(value, "");

      $("#submitresults").attr("data-selected", editedSelectionHistory);

      if ($(".checkbox_target[status-checked=true]").length == 0) {
        $("#submitresults").attr("data-selected", "");
      }
    }

    if (isValueNew == -1) {
      if ($(this).attr("status-checked") == "true") {
        if (counterCheckbox > 0) {
          $("#submitresults").attr(
            "data-selected",
            selectionHistory + "," + value
          );
        } else {
          $("#submitresults").attr("data-selected", selectionHistory + value);
        }
        counterCheckbox++;
      }
    }

    selectedTopicString = $("#submitresults").attr("data-selected");
    selectedTopicString =
      "sollution/index.php?searchstring=[" + selectedTopicString + "]";
    $("#submitresults").attr("href", selectedTopicString);

    if ($(".checkbox_target[status-checked=true]").length == 0) {
      $("#submitresults").attr("href", "vyvoj_index.php#vyberTemata");
    }
  });

  $("#resetSelection").click(function() {
    $(".checkbox_target[status-checked=true]")
      .click()
      .attr("status-checked", "false");
    $("#submitresults").attr("data-selected", "");
  });

  //
})(jQuery);
