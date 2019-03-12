$("document").ready(function () {

  var userCorrect = 0;



  function check() {

    if ($('input[name=gender1]:checked', '#myForm').val() = "male") {
      userCorrect++
    }
    if ($('input[name=gender2]:checked', '#myForm1').val() = "female") {
      userCorrect++
    }
    if ($('input[name=gender3]:checked', '#myForm2').val() = "other") {
      userCorrect++
    }

    $("#Correct").text(userCorrect);
  }


  $("#submit").click(check());
  
});