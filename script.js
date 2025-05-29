// Configuration du Quiz - Modifiez ces valeurs selon vos besoins
const nombreQuestionsSouhaitees = 5; // Nombre de questions à jouer par session. Mettre 0 ou null pour jouer toutes les questions.
const modeSansTirageAuSort = false;  // Mettre à true pour prendre les X premières questions dans l'ordre (pour les plus jeunes). false pour tirer X questions au sort.

// Variables globales du quiz
let currentQuestionIndex = 0;
let score = 0;
let selectedLanguage = 'fr'; // Langue par défaut si non spécifiée
let allQuestionsForLang = [];
let currentSessionQuestions = [];

// Éléments du DOM (ceux présents dans quiz_page.html)
const quizHeader = document.querySelector('.quiz-header'); // Peut être null si pas sur quiz_page
const languageSelectionContainer = document.getElementById('language-selection');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');

const questionNumberSpan = document.getElementById('question-number');
const questionImage = document.getElementById('question-image');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const feedbackSection = document.getElementById('feedback-section');
const feedbackIcon = document.getElementById('feedback-icon');
const feedbackTextExplanation = document.getElementById('feedback-text-explanation');
const nextQuestionButton = document.getElementById('next-question-button');
if(nextQuestionButton) nextQuestionButton.onclick = () => nextQuestion();

const scoreSpan = document.getElementById('score');
const totalQuestionsInSessionSpan = document.getElementById('total-questions-in-session');
const resultMessage = document.getElementById('result-message');
const resultScoreImage = document.getElementById('result-score-image');

const coverFr = document.getElementById('cover-fr');
const coverAr = document.getElementById('cover-ar');

// Audio elements - S'assurer que les chemins sont corrects depuis quiz_page.html
const soundCorrect = new Audio('./sounds/Sound_feedbackPrefix_Correct.mp3');
const soundIncorrect = new Audio('./sounds/Sound_feedbackPrefix_Incorrect.mp3');
const soundResultPerfect = new Audio('./sounds/resultSound_Excellent.mp3');
const soundResultGood = new Audio('./sounds/resultSound_Good.mp3');
const soundResultAverage = new Audio('./sounds/resultSound_average.mp3');
const soundResultPoor = new Audio('./sounds/resultSound_Poor.mp3');
const soundQuestionStart = new Audio('./sounds/SoundBeginningQuestion.mp3');

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function selectQuestionsForSession() {
    let questionsToSelectFrom = [...allQuestionsForLang];
    let numToPlay = nombreQuestionsSouhaitees;

    if (nombreQuestionsSouhaitees === null || nombreQuestionsSouhaitees === 0 || nombreQuestionsSouhaitees >= questionsToSelectFrom.length) {
        numToPlay = questionsToSelectFrom.length;
    }

    if (modeSansTirageAuSort) {
        currentSessionQuestions = questionsToSelectFrom.slice(0, numToPlay);
    } else {
        currentSessionQuestions = shuffleArray(questionsToSelectFrom).slice(0, numToPlay);
    }
}

function startQuiz(lang) {
    selectedLanguage = lang;
    allQuestionsForLang = quizData[selectedLanguage].questions;
    currentQuestionIndex = 0;
    score = 0;

    selectQuestionsForSession();

    if (document.body && quizContainer) { // S'assurer que les éléments existent (on est sur quiz_page.html)
        if (selectedLanguage === 'ar') {
            document.body.dir = 'rtl';
            if(coverAr) coverAr.style.display = 'block';
            if(coverFr) coverFr.style.display = 'none';
        } else {
            document.body.dir = 'ltr';
            if(coverAr) coverAr.style.display = 'none';
            if (selectedLanguage === 'fr' && coverFr) {
                coverFr.style.display = 'block';
            } else if (coverFr) {
                coverFr.style.display = 'none';
            }
        }

        if(languageSelectionContainer) languageSelectionContainer.style.display = 'none'; // Masquer la sélection de langue initiale si présente
        if(resultsContainer) resultsContainer.style.display = 'none';
        if(feedbackSection) feedbackSection.style.display = 'none';
        quizContainer.style.display = 'block';
        if(quizHeader) quizHeader.style.display = 'block'; // Afficher le header du quiz

        loadQuestion();
    } else {
        // Peut-être rediriger vers index.html si la langue n'est pas définie et qu'on n'est pas sur la page de sélection
        console.log("Quiz container not found, ensure you are on quiz_page.html with a lang parameter.");
    }
}

function loadQuestion() {
    if (!quizContainer || !currentSessionQuestions) return; // Ne rien faire si pas sur la page du quiz
    if(feedbackSection) feedbackSection.style.display = 'none';
    
    if (currentSessionQuestions.length === 0) {
        if(questionText) questionText.textContent = selectedLanguage === 'ar' ? 'لا توجد أسئلة متاحة.' : (selectedLanguage === 'en' ? 'No questions available.' : 'Aucune question disponible.');
        if(optionsContainer) optionsContainer.innerHTML = '';
        if(questionNumberSpan) questionNumberSpan.textContent = '';
        return;
    }
    
    soundQuestionStart.play().catch(e => console.log("Erreur lecture son début question:", e));
    const question = currentSessionQuestions[currentQuestionIndex];

    if(questionNumberSpan) questionNumberSpan.textContent = `${selectedLanguage === 'ar' ? 'السؤال' : (selectedLanguage === 'en' ? 'Question' : 'Question')} ${currentQuestionIndex + 1} / ${currentSessionQuestions.length}`;

    const imageContainer = document.querySelector('.question-image-container');
    if (question.image && !question.image.includes('placeholder') && questionImage && imageContainer) {
        imageContainer.style.display = 'flex';
        questionImage.src = question.image;
        questionImage.alt = question.image_alt || (selectedLanguage === 'ar' ? 'صورة توضيحية للسؤال' : (selectedLanguage === 'en' ? 'Question illustration' : 'Illustration de la question'));
    } else if (imageContainer) {
        imageContainer.style.display = 'none';
    }
    if(questionText) questionText.textContent = question.question;

    if(optionsContainer) optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectAnswer(index, button);
        if(optionsContainer) optionsContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex, button) {
    if (!currentSessionQuestions) return;
    const question = currentSessionQuestions[currentQuestionIndex];
    const correctAnswerIndex = question.answer;

    const buttons = optionsContainer.getElementsByTagName('button');
    for (let btn of buttons) {
        btn.disabled = true;
    }

    if (selectedIndex === correctAnswerIndex) {
        button.classList.add('<b>correct</b>');
        score++;
        if(feedbackIcon) feedbackIcon.src = './images/feedback/ok1.svg';
        if(feedbackIcon) feedbackIcon.alt = selectedLanguage === 'ar' ? 'صحيح' : (selectedLanguage === 'en' ? 'Correct' : 'Correct');
        soundCorrect.play().catch(e => console.log("Erreur lecture son correct:", e));
    } else {
        button.classList.add('incorrect');
        if (buttons[correctAnswerIndex]) {
            buttons[correctAnswerIndex].classList.add('correct');
        }
        if(feedbackIcon) feedbackIcon.src = './images/feedback/error1.svg';
        if(feedbackIcon) feedbackIcon.alt = selectedLanguage === 'ar' ? 'خطأ' : (selectedLanguage === 'en' ? 'Incorrect' : 'Incorrect');
        soundIncorrect.play().catch(e => console.log("Erreur lecture son incorrect:", e));
    }
    if(feedbackTextExplanation) feedbackTextExplanation.textContent = question.explanation;

    if (currentQuestionIndex < currentSessionQuestions.length - 1) {
        if(nextQuestionButton) nextQuestionButton.textContent = selectedLanguage === 'ar' ? "السؤال التالي" : (selectedLanguage === 'en' ? "Next Question" : "Question suivante");
    } else {
        if(nextQuestionButton) nextQuestionButton.textContent = selectedLanguage === 'ar' ? "عرض النتائج" : (selectedLanguage === 'en' ? "Show Results" : "Voir les résultats");
    }

    if(feedbackSection) feedbackSection.style.display = 'block';
    if(feedbackSection) feedbackSection.scrollIntoView({ behavior: "smooth", block: "center" });
}

function nextQuestion() {
    if(feedbackSection) feedbackSection.style.display = 'none';
    currentQuestionIndex++;
    if (currentQuestionIndex < currentSessionQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    if(quizContainer) quizContainer.style.display = 'none';
    if(resultsContainer) resultsContainer.style.display = 'block';

    const messages = quizData[selectedLanguage].resultMessages;
    const percentage = currentSessionQuestions.length > 0 ? (score / currentSessionQuestions.length) * 100 : 0;
    let resultMsgText = "";
    let resultScoreImgSrc = "";
    let soundToPlay = null;

    if (percentage === 100) {
        resultMsgText = messages.perfect || "Excellent ! Vous connaissez très bien les droits de l'enfant !";
        resultScoreImgSrc = './images/feedback/scores_Perfect.svg';
        soundToPlay = soundResultPerfect;
    } else if (percentage >= 70) {
        resultMsgText = messages.good || "Bravo ! Vous avez de bonnes connaissances sur les droits de l'enfant";
        resultScoreImgSrc = './images/feedback/scores_Good.svg';
        soundToPlay = soundResultGood;
    } else if (percentage >= 50) {
        resultMsgText = messages.average || "Pas mal ! Continuez à apprendre sur les droits de l'enfant.";
        resultScoreImgSrc = './images/feedback/scores_Average.svg';
        soundToPlay = soundResultAverage;
    } else {
        resultMsgText = messages.poor || "Améliorer vos connaissances. N'hésitez pas à explorer la Convention !";
        resultScoreImgSrc = './images/feedback/scores_Poor.svg';
        soundToPlay = soundResultPoor;
    }
    if(resultMessage) resultMessage.textContent = resultMsgText;
    
    if (resultScoreImgSrc && resultScoreImage) {
        resultScoreImage.src = resultScoreImgSrc;
        resultScoreImage.alt = resultMsgText; 
        resultScoreImage.style.display = 'block';
    } else if (resultScoreImage) {
        resultScoreImage.style.display = 'none';
    }

    if(soundToPlay) soundToPlay.play().catch(e => console.log("Erreur lecture son résultat:", e));

    if(resultsContainer){
        const resultsButtons = resultsContainer.getElementsByTagName('button');
        if(resultsButtons[0]) resultsButtons[0].textContent = selectedLanguage === 'ar' ? "إعادة الاختبار" : (selectedLanguage === 'en' ? "Replay" : "Rejouer");
        if(resultsButtons[1]) resultsButtons[1].textContent = selectedLanguage === 'ar' ? "تغيير اللغة" : (selectedLanguage === 'en' ? "Change Language" : "Changer de langue");
        const h2 = resultsContainer.querySelector('h2');
        if(h2) h2.textContent = selectedLanguage === 'ar' ? "نتائج الاختبار" : (selectedLanguage === 'en' ? "Quiz Results" : "Résultats du Quiz");
    }
    
    if(scoreSpan) scoreSpan.textContent = score;
    if(totalQuestionsInSessionSpan) totalQuestionsInSessionSpan.textContent = currentSessionQuestions.length;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    
    if(languageSelectionContainer) languageSelectionContainer.style.display = 'none';
    if(resultsContainer) resultsContainer.style.display = 'none';
    if(feedbackSection) feedbackSection.style.display = 'none';
    if(quizContainer) quizContainer.style.display = 'block';

    loadQuestion();
}

function changeLanguage() {
    // Redirige vers la nouvelle page de sélection de langue (index.html)
    window.location.href = 'index.html'; 
}

// Initialisation au chargement de la page quiz_page.html
window.onload = () => {
    // Vérifier si on est sur la page du quiz (quiz_page.html)
    // et si les éléments nécessaires sont présents.
    if (document.getElementById('quiz-container')) { 
        const langFromURL = getQueryParam('lang');
        if (langFromURL && ['fr', 'en', 'ar'].includes(langFromURL)) {
            startQuiz(langFromURL);
        } else {
            // Si pas de langue ou langue invalide, et qu'on est sur quiz_page.html,
            // on pourrait rediriger vers la sélection de langue (index.html)
            // ou afficher un message d'erreur.
            // Pour l'instant, on laisse la langue par défaut (fr) ou on ne démarre pas.
            // Idéalement, la page quiz_page.html ne devrait être accessible qu'avec un param lang.
            console.log("Langue non spécifiée ou invalide dans l'URL, redirection vers la sélection de langue suggérée.");
            // Optionnel: rediriger vers la page de sélection si aucune langue n'est fournie
            // window.location.href = 'index.html'; 
            // Ou démarrer avec une langue par défaut si on veut quand même afficher quelque chose
             startQuiz(selectedLanguage); // Démarre avec la langue par défaut 'fr'
        }
    } 
    // Si on n'est pas sur quiz_page.html (par ex. sur index1.html ou index.html), ce script ne fera rien de spécifique au quiz.
};

