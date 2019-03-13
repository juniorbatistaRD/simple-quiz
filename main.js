var output = document.querySelector('#output');
var answers = document.querySelector('#answer');
var btnnext = document.querySelector('#btnnext');
var bar = document.querySelector('#bar');
var counter = 0;
var questions = [
    {
        'Q': "What's His name?",
        'option1':'jr',
        'option2':'jj',
        'option3':'jl',
        'option4':'junior',
    },
    {
        'Q': "What's His age?",
        'option1':'11',
        'option2':'23',
        'option3':'18',
        'option4':'20',
    },
    {
        'Q':"Where was he born?",
        'option1':'SD',
        'option2':'juan dolio',
        'option3':'usa',
        'option4':'Jarabacoa',
    }
];
var userAnswers = [];
var score = 0;

function showQuestion(){
    updatePercentage()
    Shuffle(questions);

    var answersOptions = [];

    answersOptions.push("<input type='radio' name='answer' value='"+questions[counter].option1+"'>"+ questions[counter].option1+"</input>");
    answersOptions.push("<input type='radio' name='answer' value='"+questions[counter].option2+"'>"+ questions[counter].option2+"</input>");
    answersOptions.push("<input type='radio' name='answer' value='"+questions[counter].option3+"'>"+ questions[counter].option3+"</input>");
    answersOptions.push("<input type='radio' name='answer' value='"+questions[counter].option4+"'>"+ questions[counter].option4+"</input>");

    Shuffle(answersOptions);
    answersOptions.forEach(element => {
        answers.innerHTML += element;
    });
   
    output.innerHTML = questions[counter].Q ;
    counter += 1;
    
}

function nextQuestion(){
    updatePercentage()
    var selected = document.querySelector('input[name="answer"]:checked').value;
    userAnswers.push([counter, selected]);
    answers.innerHTML = "";
    var answersOptions = [];

    
    if(counter >= questions.length){
        gameOver();
        return;
    }

    if(counter >= questions.length-1){
        btnnext.innerHTML = "Finish"

    }

    answersOptions.push("<input type='radio' name='answer' value='"+questions[counter].option1+"'>"+ questions[counter].option1+"</input>");
    answersOptions.push("<input type='radio' name='answer' value='"+questions[counter].option2+"'>"+ questions[counter].option2+"</input>");
    answersOptions.push("<input type='radio' name='answer' value='"+questions[counter].option3+"'>"+ questions[counter].option3+"</input>");
    answersOptions.push("<input type='radio' name='answer' value='"+questions[counter].option4+"'>"+ questions[counter].option4+"</input>");

    Shuffle(answersOptions);
    answersOptions.forEach(element => {
        answers.innerHTML += element;
    });
   
    output.innerHTML = questions[counter].Q ;
    counter += 1;
}

function gameOver(){
    for(i = 0; i < userAnswers.length; i++){
        if(userAnswers[i][1] == questions[i].option4 ){
            score+= 1;
        }
    }
    alert( "GameOver, your score was: "+score + " points");
    btnnext.innerHTML = "End"
}

function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function updatePercentage(){
    var tempNum = counter +1;
    var num = (tempNum * 100)/questions.length;
    bar.style.width = num+'%';

}

showQuestion();
