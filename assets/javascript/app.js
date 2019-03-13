$(document).ready(function() {
// object that holds question/answers in various arrays 
var triviaQuestions = [
    { 
      questions: "What is the slang term for original WoW?",
      options: ["OG", "Boring", "Vanilla", "WoaW"],
      answer: "Vanilla"
    }, 
    { 
      questions: "Which expansion added new territory as well as effecting all of Azeroth?",
      options: ["Cataclysm", "Wrath of the Lich King", "Legion", "Burning Crusade"],
      answer: "Cataclysm"
    }, 
    { 
      questions: "Name the iconic town in the human starting zone",
      options: ["Stormwind", "Durotar", "Badlands", "Goldshire"],
      answer: "Goldshire"
    }, 
    { 
      questions: "Who are you not prepared to fight?",
      options: ["Illidan Stormrage", "Ragnaros", "Hubububu- Chewer of Gum", "Anyone in the Scarlet Monastery"],
      answer: "Illidan Stormrage"
    }, 
    { 
      questions: "Which expansion added Goblins as a playable race?",
      options: ["Burning Crusade", "Wrath of the Lich King", "Cataclysm", "Runescape"],
      answer: "Cataclysm"
    }, 
     
];
//Hide everything so we can "start" the game by revealing it
$('#quiz').hide();
$('#submit').hide();
$('#reset').hide();
$('#timer').hide();

// Make everything visible and call another function
$('#start').on('click', function(){
    generateQuiz();
    $('#reset').show();
    $('#submit').show();
    $('#quiz').show();
    $('#timer').show();

    var sec = 60;
    var time = setInterval(myTimer, 1000);

    function myTimer() {
        document.getElementById('timer').innerHTML = sec + " sec left";
        sec--;
        if (sec == -1) {
            clearInterval(time);
            alert("Time out!! :(");
            alert(totalScore);
        }
    }
})


function generateQuiz(){
    $('#start').hide();
    $('#quiz').show();
    $('#quiz').html(
        '<h3>' + triviaQuestions[0].questions + '</h3>' +
        '<input type="radio" name="question0" value="' + triviaQuestions[0].options[0] + '">' + triviaQuestions[0].options[0] + '</input>' +    
        '<input type="radio" name="question0" value="' + triviaQuestions[0].options[1] + '">' + triviaQuestions[0].options[1] + '</input>' +    
        '<input type="radio" name="question0" value="' + triviaQuestions[0].options[2] + '">' + triviaQuestions[0].options[2] + '</input>' +    
        '<input type="radio" name="question0" value="' + triviaQuestions[0].options[3] + '">' + triviaQuestions[0].options[3] + '</input>' +
        '<h3>' + triviaQuestions[1].questions + '</h3>' +
        '<input type="radio" name="question1" value="' + triviaQuestions[1].options[0] + '">' + triviaQuestions[1].options[0] + '</input>' +
        '<input type="radio" name="question1" value="' + triviaQuestions[1].options[1] + '">' + triviaQuestions[1].options[1] + '</input>' +
        '<input type="radio" name="question1" value="' + triviaQuestions[1].options[2] + '">' + triviaQuestions[1].options[2] + '</input>' +
        '<input type="radio" name="question1" value="' + triviaQuestions[1].options[3] + '">' + triviaQuestions[1].options[3] + '</input>' +
        '<h3>' + triviaQuestions[2].questions + '</h3>' +
        '<input type="radio" name="question2" value="' + triviaQuestions[2].options[0] + '">' + triviaQuestions[2].options[0] + '</input>' +
        '<input type="radio" name="question2" value="' + triviaQuestions[2].options[1] + '">' + triviaQuestions[2].options[1] + '</input>' +
        '<input type="radio" name="question2" value="' + triviaQuestions[2].options[2] + '">' + triviaQuestions[2].options[2] + '</input>' +
        '<input type="radio" name="question2" value="' + triviaQuestions[2].options[3] + '">' + triviaQuestions[2].options[3] + '</input>' +
        '<h3>' + triviaQuestions[3].questions + '</h3>' +
        '<input type="radio" name="question3" value="' + triviaQuestions[3].options[0] + '">' + triviaQuestions[3].options[0] + '</input>' +
        '<input type="radio" name="question3" value="' + triviaQuestions[3].options[1] + '">' + triviaQuestions[3].options[1] + '</input>' +
        '<input type="radio" name="question3" value="' + triviaQuestions[3].options[2] + '">' + triviaQuestions[3].options[2] + '</input>' +
        '<input type="radio" name="question3" value="' + triviaQuestions[3].options[3] + '">' + triviaQuestions[3].options[3] + '</input>' +
        '<h3>' + triviaQuestions[4].questions + '</h3>' +
        '<input type="radio" name="question4" value="' + triviaQuestions[4].options[0] + '">' + triviaQuestions[4].options[0] + '</input>' +
        '<input type="radio" name="question4" value="' + triviaQuestions[4].options[1] + '">' + triviaQuestions[4].options[1] + '</input>' +
        '<input type="radio" name="question4" value="' + triviaQuestions[4].options[2] + '">' + triviaQuestions[4].options[2] + '</input>' +
        '<input type="radio" name="question4" value="' + triviaQuestions[4].options[3] + '">' + triviaQuestions[4].options[3] + '</input>'
    );

    $('#submit').on('click', function() {
        $("#submit").hide();
        var totalScore = 0;
        if($('input:radio[name=question0]:checked').val() === triviaQuestions[0].answer) {
            totalScore++;
        } else {
            
        }
        
        if ($('input:radio[name=question1]:checked').val() === triviaQuestions[1].answer) {
            totalScore++;
        } else {
            
        }

        if ($('input:radio[name=question2]:checked').val() === triviaQuestions[2].answer) {
            totalScore++;
        } else {

        }

        if ($('input:radio[name=question3]:checked').val() === triviaQuestions[3].answer) {
            totalScore++;
        } else {

        }

        if ($('input:radio[name=question4]:checked').val() === triviaQuestions[4].answer) {
            totalScore++;
        } else {
            // incorrect++
        }

        
        $('#quiz').hide();
        $('#results').html("You've gotten " + totalScore + " of 5 Correct!");
    });
};

// start me over
$('#reset').on('click', function () {
    totalScore = 0;
    generateQuiz();
    $('#results').hide();
})


});
