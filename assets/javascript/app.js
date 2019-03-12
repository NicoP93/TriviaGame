setTimeout(twentyseconds,  1000 * 20);
setTimeout(fortyseconds, 1000 * 40);
setTimeout(timeUp, 1000 * 60);

//  Step 3:
//  Fill in the blanks to these functions.
function twentyseconds() {
  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
  $("#time-left").append("<h2>About 40 Seconds Left!</h2>");
  console.log("40 seconds left");
}

function fortyseconds() {
  // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  $("time-left").clear();
  $("#time-left").append("<h2>About 20 seconds left!</h2>");
  console.log("5 seconds left");
}

function timeUp() {
  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  $("time-left").clear();
  $("#time-left").append("<h2>Time's Up!</h2>");
  alert("You're out of time!")
  console.log("time is up");
};

var seconds_left = 60;
var interval = setInterval(function() {
    document.getElementById("timer_div").innerHTML = --seconds_left;
    

    if (seconds_left <= 0)
    { check()
        //When it gets to 0 second, I want to show 'You are Ready!' text message.
     }
}, 1000);

debugger;


function check() {
    var question1 = document.quizz.question1.value;
    var question2 = document.quizz.question2.value;
    var question3 = document.quizz.question3.value;
    var question4 = document.quizz.question4.value;
    var correct = 0;

    if (question1 === "All of the above") {
        correct ++;
    }
    if (question2 === "Blue") {
        correct ++;
    }   
    if (question3 === "Pink") {
        correct ++;
    }
    if (question4 === "Orange") {
        correct ++;
    }



    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML ="You got " + correct + " correct.";
};

    