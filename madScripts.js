function getDate() {
	var d = new Date();
  	document.getElementById('demo').innerHTML=Date();
}
function getScore() {
	document.getElementById('userScore').innerHTML=("<h1> Your Score: <br /> " + score + " / " + totalScore + "</h1>");
}
function rightAnswer() {
	score++;
	totalScore++;
	getScore();
	nextQuestion();
}
function wrongAnswer() {
	totalScore++;
	getScore();
	nextQuestion();
}
function nextQuestion() {
	document.getElementById('answer1').innerHTML=("First choice for question " + (totalScore + 1));
	document.getElementById('answer2').innerHTML=("Second choice for question " + (totalScore + 1));
	document.getElementById('answer3').innerHTML=("Third choice for question " + (totalScore + 1));
	document.getElementById('thisTweet').innerHTML=("Tweet number " + (totalScore + 1));
}
function resetValues() {
	document.getElementById('thisTweet').innerHTML=("(JS) Reset test with new quiz");
	score = 0;
	totalScore = 0;
	getScore();	
	document.getElementById('answer1').innerHTML=("NEW first choice for question " + (totalScore + 1));
	document.getElementById('answer2').innerHTML=("NEW second choice for question " + (totalScore + 1));
	document.getElementById('answer3').innerHTML=("NEW third choice for question " + (totalScore + 1));
	document.getElementById('thisTweet').innerHTML=("NEW tweet number " + (totalScore + 1));
}
function politics() {
	quizNo = 0;
	startQuiz(quizNo);
}
function sports(){
	quizNo = 1;
	startQuiz(quizNo);
}
function hollywood() {
	quizNo = 2;
	startQuiz(quizNo);
}
function technology(){
	quizNo = 3;
	startQuiz(quizNo);
}
function random() {
	quizNo = 4;
	startQuiz(quizNo);
}
function startQuiz(quizNo) {
	if(quizNo == 0) {
		score = 0;
		totalScore = 0;
		getScore();
		document.getElementById('answer1').innerHTML=("First choice for POLITICS question " + (totalScore + 1));
		document.getElementById('answer2').innerHTML=("NEW second choice for POLITICS question " + (totalScore + 1));
		document.getElementById('answer3').innerHTML=("NEW third choice for POLITICS question " + (totalScore + 1));
		document.getElementById('thisTweet').innerHTML=("NEW POLITICS tweet number " + (totalScore + 1));
	}
	else if(quizNo == 1) {
		score = 0;
		totalScore = 0;
		getScore();
		document.getElementById('answer1').innerHTML=("First choice for SPORTS question " + (totalScore + 1));
		document.getElementById('answer2').innerHTML=("NEW second choice for SPORTS question " + (totalScore + 1));
		document.getElementById('answer3').innerHTML=("NEW third choice for SPORTS question " + (totalScore + 1));
		document.getElementById('thisTweet').innerHTML=("NEW SPORTS tweet number " + (totalScore + 1));
	}
	else if(quizNo == 2) {
		score = 0;
		totalScore = 0;
		getScore();
		document.getElementById('answer1').innerHTML=("First choice for HOLLYWOOD question " + (totalScore + 1));
		document.getElementById('answer2').innerHTML=("NEW second choice for HOLLYWOOD question " + (totalScore + 1));
		document.getElementById('answer3').innerHTML=("NEW third choice for HOLLYWOOD question " + (totalScore + 1));
		document.getElementById('thisTweet').innerHTML=("NEW HOLLYWOOD tweet number " + (totalScore + 1));
	}
	else if(quizNo == 3) {
		score = 0;
		totalScore = 0;
		getScore();
		document.getElementById('answer1').innerHTML=("First choice for TECHNOLOGY question " + (totalScore + 1));
		document.getElementById('answer2').innerHTML=("NEW second choice for TECHNOLOGY question " + (totalScore + 1));
		document.getElementById('answer3').innerHTML=("NEW third choice for TECHNOLOGY question " + (totalScore + 1));
		document.getElementById('thisTweet').innerHTML=("NEW TECHNOLOGY tweet number " + (totalScore + 1));
	}
	else if(quizNo == 4) {
		score = 0;
		totalScore = 0;
		getScore();
		document.getElementById('answer1').innerHTML=("First choice for RANDOM question " + (totalScore + 1));
		document.getElementById('answer2').innerHTML=("NEW second choice for RANDOM question " + (totalScore + 1));
		document.getElementById('answer3').innerHTML=("NEW third choice for RANDOM question " + (totalScore + 1));
		document.getElementById('thisTweet').innerHTML=("NEW RANDOM tweet number " + (totalScore + 1));
	}
}



