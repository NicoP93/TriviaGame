$("document").ready(function () {

  var userCorrect = 0;



  function check() {
    if ($('input[gender1]:checked').val() = Male) {
      userCorrect++
    }
    if ($('input[gender2]:checked').val() = Female) {
      userCorrect++
    }
    if ($('input[gender3]:checked').val() = Other) {
      userCorrect++
    }

    $("#howmanycorrect").text(userCorrect);
  }

  
  $("#submit").click(check());


});