const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.get ElementById('submit');

const myQuestions = [
    {
        question #1: "During which period of the Mesozoic Era did the Tyrannosaurus-Rex live?",
        answers: {
            a: "Cretaceous"
            b: "Jurassic"
            c: "Triassic"
            d: "None of the Above"
        },
        correctAnswer: "a"
    },
    {
        question #2: "More than a hundred years ago, a paleontologist from the American Museum of Natural History discovered the first fossils of <em>Tyrannosaurus Rex<em>. Who found the fossil and where?",
            answers: {
                a: "Luke McMurtrie in Richmond, Virginia"
                b: "Barnum Brown in Hell Creek, Montana, U.S.A."
                c: "Dr. Ian Malcolm along the coast of the Osa Peninsula, Costa Rica"
                d: "Dr. John Hammond in the Gobi Desert, Northern China"
            },
            correctAnswer: "b" 
    },
    {
        question #3: "T.Rex grew much bigger and much faster than humans. How many pounds (kilograms) do scientists maintain they gained per DAY?",
            answers: {
                a: "1 pound (0.5 kilograms)"
                b: "4.6 pounds (2.1 kilograms"
                c: "2 pounds (1 kilogram)"
                d: "13 pounds (5.9 kilograms)"
            },
            correctAnswer: "b"
    },
    {
        question #4: "What color do paleontologists, scientists and scholars believe the Tyrannosaurus-Rex was?",
            answers: {
                a: "We don't know"
                b: "Greyish-Blue"
                c: "Blood-Red"
                d: "Brown"
            },
            correctAnswer: "a"
    },
    {
        question #5: "At a goliath 40 feet long and 13 feet tall at the hip, Sue, the largest Tyrannosarus rex specimen ever discovered, is currently on display at which museum?"
            answers: {
                a: "Black Hills Institue of Geological Research"
                b: "California Museum of Natural History"
                c: "The Vatican Museum"
                d: "Field Museum of Natural History in Chicago"
            },
            correctAnswer: "d"
    }


]

function buildQuiz() {}

function showResults() {}

buildQuiz;

submitButton.addEventListener('click', showResults);