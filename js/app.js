//global variables
var randomNumber = 0,
    guessNum = 0,
    userGuess = $('#userGuess');

//random number generator

function newRandomNumber(){ 
    randomNumber = Math.floor((Math.random()*100)+1);        }

//compare user generated number

function compareNumber(){
    
    var numberDistance = Math.abs(randomNumber - userGuess);
    
    if(numberDistance > 100){
        
        $('#feedback').html('Please enter a number from 1-100');
        
    } else if (numberDistance >= 75 && numberDistance <= 100) {
        $('#feedback').html('Extremely Cold');
        
    } else if ( numberDistance >= 50 && numberDistance <= 74) {
        $('#feedback').html('Very Cold');
        
    } else if (numberDistance >= 25 && numberDistance <= 49) {
        $('#feedback').html('Cold');
        
    } else if (numberDistance >= 15 && numberDistance <= 24){
        $('#feedback').html('Warm');
        
    } else if (numberDistance >= 10 && numberDistance <= 14){
        $('#feedback').html('Hot');
    
    } else if (numberDistance >= 5 && numberDistance <= 9) {
        
        $('#feedback').html('Extremely Hot');
        
    } else if (numberDistance == 0 ) {
        
        $('#feedback').html('You Got It!');
        
    }
    
}

//Count Increase

function guessIncrease(){
    
    guessNum++;
    $('#count').html(guessNum);
}

//Guess increase reset

function guessIncreaseReset(){
    guessNum = 0;
}

//Add to guess list

function addGuess(){
    
    $('#guessList').append('<li>'+userGuess+'</li>');
}

//User val reset

function userNumReset(){
    
    $('#userGuess').val('').focus();
}

//Number of guesses reset

function guessReset(){
    $('#count').html('0');   
}

//Guess list reset

function guessListReset(){
    $('#guessList').html('');
}

//Reset feedback

function feedbackReset(){
    $('#feedback').html('Make your Guess!');   
}

$(document).ready(function(){
    //Call random number function
        newRandomNumber();
    
    //user generated number and guess click
       
	$('#guessButton').on('click', function(){
         event.preventDefault();
         userGuess = parseInt($('#userGuess').val());
         console.log(userGuess);   
         compareNumber();
         guessIncrease();
         addGuess();
         userNumReset();
    });
    
    //new game setup
    $('.new').on('click',function(){
       event.preventDefault();
        newRandomNumber();
        userNumReset();
        guessReset();
        guessIncreaseReset();
        guessListReset();
        feedbackReset();
    });
        
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


