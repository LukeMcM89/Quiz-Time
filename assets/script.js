var timer = 0;
var score = 0;
var timerCount;
var isWin = false;
var quizContainer = document.querySelector(".quiz-container");
var wordBlank = document.querySelector("#lose");
quizContainer.style.display= "none";

var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector("#startbutton");


function startGame(){
console.log("test")
  quizContainer.style.display="block";
  startButton.style.display="none";
  isWin = false;
  timerCount = 150;
  startTimer()
}

function winGame() {
  wordBlank.textContent = "You win!";
  winCounter++
  startButton.disabled = false;
  setWins()
}

function loseGame() {
  wordBlank.textContent = "GAME OVER!";
  loseCounter++
  startButton.disabled = false;
  setLosses()
}

function init() {
  getWins();
  getlosses();
}

//init();


function startTimer(){
console.log("timer") 

  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    
    if (timerCount <= 0) {
    console.log("timeout") 
     
      if (isWin && timerCount > 0) {
      
        clearInterval(timer);
        winGame();
      }
    }
 
    if (timerCount === 0) {
   
      clearInterval(timer);
      loseGame();
    }
  
  }, 1000);
}

(function(){
 console.log("test");
  function createQuiz(){

    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    myQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if(userAnswer === currentQuestion.correctAnswer){

        numCorrect++;

  
        answerContainers[questionNumber].style.color = "green";
      }
    
      else{
    
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "During which period of the Mesozoic Era did the Tyrannosaurus rex live?",
      answers: {
        a: "Cretaceous",
        b: "Jurassic",
        c: "Triassic",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "More than a 100 years ago, a paleontologist from the American Museum of Natural History discovered the first fossils of Tyrannosaurus rex. Who found them and where?",
      answers: {
        a: "Luke McMurtrie in Richmond, Virginia",
        b: "Barnum Brown in Hell Creek, Montana, U.S.A",
        c: "Dr. Ian Malcolm along the coast of the Osa Peninsula, Costa Rica",
        d: "Dr. John Hammond in the Gobi Desert, Northern China"
      },
      correctAnswer: "b"
    },
    {
      question: "T.Rex grew much bigger and faster than humans. How many pounds (kilograms) do scientists maintain they gained per DAY?",
      answers: {
        a: "1 pound (0.5 kilograms)",
        b: "4.6 pounds (2.1 kilograms)",
        c: "2 pounds (1 kilogram)",
        d: "13 pounds (5.9 kilograms)"
      },
      correctAnswer: "b"
    },
    {
      question: "What color do paleontologists, scientists and scholars believe the Tyrannosaurus was?",
      answers: {
        a: "We don't know",
        b: "Greyish-Blue",
        c: "Blood-Red",
        d: "Brown"
      },
      correctAnswer: "a"
    },
    {
      question: "At a goliath 40 feet long and 13 feet tall at the hip, Sue, the largest Tyrannosaurus rex specimen ever discovered, is currently on display at which museum?",
      answers: {
        a: "Black Hills Institute of Geological Research",
        b: "California Museum of Natural History",
        c: "The Vatican Museum",
        d: "Field Museum of Natural History in Chicago"
      },
      correctAnswer: "d"
    },
    {
      question: "Tyrannosaurus rex, derived from Latin and Greek means what?",
      answers: {
        a: "Big-Boi",
        b: "Sharp-toothed reptile",
        c: "Tyrant lizard",
        d: "Two-clawed terror"
      },
      correctAnswer: "c"
    },
    {
      question: "BONUS: In the movie Jurassic Park, Dr. Ian Malcolm says the famous line: Life ____?",
      answers: {
        a: "Is stupid and contagious",
        b: "Generally sucks",
        c: "Is the persistent illusion of time within a quantum paradox",
        d: "Uh...finds a way"
      },
      correctAnswer: "d"
    }
  ];

  createQuiz();


  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(currentSlide);

  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
  startButton.addEventListener("click", startGame);

})();

