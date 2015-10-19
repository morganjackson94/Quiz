$( document ).ready(function() {
    console.log( "ready!" );

    //Global variables
    var questions = [{
        question: "Which of the following was Kanye West's best selling album?",
        choices: ["The College Dropout", "My Dark Twisted Fantasy", "Yeezus", "808s and Heartbreak"],
        questNum: 1,
        correct: 1
    },

    {
        question: "Before going solo, what group was Gwen Stefani the lead singer of?",
        choices: ["Destiny's Child", "Blaxy Girls", "Dixie Chicks", "No Doubt"],
        questNum: 2,
        correct: 3
    },

    {
        question: "Who was the first British boy band to become popular in the U.S.?",
        choices: ["One Direction", "The Beatles", "NSYNC", "Backstreet Boys"],
        questNum: 3,
        correct: 1
    },

    {
        question: "Kiss released their Creatures of the night album in what year?",
        choices: ["2000", "1991", "1974", "1982"],
        questNum: 4,
        correct: 3
    },

    {
        question: "Which of the following is Lorde's first hit single??",
        choices: ["Royals", "Team", "The Love Club", "Glory and Gore"],
        questNum: 5,
        correct: 0
    }];

    var numCorrect = 0;
    var number = 0;

    //event handlers
    //when user clicks submit the answer given is checked to see if correct
    //and the next question is shown
    $("#submit").on("click", function () {
    	checkAnswer();
        nextQuestion();
    });

    // when the retry button is clicked the program restarts 
    //1st question is shown
    $("#retry").on("click", function () {
    	restart();
    	nextQuestion();
    });

    //Checks if the answer is correct. If so, increments numCorrect.
    function checkAnswer() {
        var answer = $('input[type="radio"]:checked').val();
        console.log(answer);
        if(answer == questions[number].correct)
        {
        	numCorrect++;
        	console.log(numCorrect);
        }
    }

    //if at the end of the quiz (questions array)
    //shows review screen with correct answers
    //else removes current question and shows next question
    function nextQuestion() {
    	if(number >= questions.length-1)
    	{
            $('div p').remove();
        	$('div input:radio').remove();
        	$('#submit').hide();
        	$('div span').remove();
	        $('div br').remove();
	        $('div').append('<h1>Review</h1>');
	        review();		
    	}
        else{
            $('div p').remove();
        	$('div input:radio').remove();
        	$('div span').remove();
	        $('div br').remove();
	        number++;
    	    console.log(number);
    	    console.log(questions.length-1);
        	var newQuestion = '<div class="questions"><p> ' + questions[number].questNum + '. ' + questions[number].question + '<b>(Question ' + questions[number].questNum + ' of 5)</b></p><input type = "radio" name = "0" value = "0"><span>' + questions[number].choices[0] + '</span><br><input type = "radio" name = "0" value = "1"><span>' + questions[number].choices[1] + '</span><br><input type = "radio" name = "0" value = "2"><span>' + questions[number].choices[2] + '</span><br><input type = "radio" name = "0" value = "3"><span>' + questions[number].choices[3] + '</span><br>';
        	$('div').prepend(newQuestion);
        	
    	}	
    }

    //removes questions and shows review screen with correct answers
    //as well as shows retry button
    function review() {
    	$('div').append('<h2>You got '+numCorrect+' answers right!</h2>')
    	for(var j in questions){
	       	$('div').append('<p class="question"> ' + questions[j].questNum + '. ' + questions[j].question + '</p><span class="review">The correct answer is <b>' +questions[j].choices[questions[j].correct]+ '</b></span>');
	    } 
	    $('#retry').show();
    }

    //clears whats in the div and starts from the first question
    function restart(){
        $('div p').remove();
        $('div input:radio').remove();
       	$('div span').remove();
	    $('div br').remove();
        $('h1, h2').remove();
        $('#submit').show();
        $('#retry').hide();
    	number = -1;
    	numCorrect = 0;
    }
});