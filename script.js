// Quiz Application Logic
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let questionStartTime = 0;
let timePerQuestion = [];
let timerInterval = null;
let timeRemaining = 30;
let selectedCategory = 'general';
let selectedDifficulty = 'easy';
let timedOutQuestions = []; // Track questions where timer expired

// DOM Elements
const landingPage = document.getElementById('landingPage');
const quizPage = document.getElementById('quizPage');
const resultsPage = document.getElementById('resultsPage');
const startQuizBtn = document.getElementById('startQuizBtn');
const categorySelect = document.getElementById('categorySelect');
const difficultySelect = document.getElementById('difficultySelect');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const timerText = document.getElementById('timerText');
const timerCircle = document.getElementById('timerCircle');
const questionCounter = document.getElementById('questionCounter');
const categoryDisplay = document.getElementById('categoryDisplay');
const difficultyDisplay = document.getElementById('difficultyDisplay');
const prevBtn = document.getElementById('prevBtn');
const clearBtn = document.getElementById('clearBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const questionNav = document.getElementById('questionNav');
const retakeBtn = document.getElementById('retakeBtn');
const homeBtn = document.getElementById('homeBtn');

// Event Listeners
startQuizBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', previousQuestion);
clearBtn.addEventListener('click', clearCurrentAnswer);
nextBtn.addEventListener('click', nextQuestion);
submitBtn.addEventListener('click', submitQuiz);
retakeBtn.addEventListener('click', resetQuiz);
homeBtn.addEventListener('click', goToHome);

// Start Quiz Function
function startQuiz() {
    selectedCategory = categorySelect.value;
    selectedDifficulty = difficultySelect.value;
    
    // Get questions for selected category and difficulty
    currentQuestions = quizDatabase[selectedCategory][selectedDifficulty];
    
    // Initialize user answers and time tracking
    userAnswers = new Array(currentQuestions.length).fill(null);
    timePerQuestion = new Array(currentQuestions.length).fill(0);
    timedOutQuestions = []; // Reset timed out questions
    currentQuestionIndex = 0;
    
    // Update display
    categoryDisplay.textContent = `Category: ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`;
    difficultyDisplay.textContent = `Difficulty: ${selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}`;
    
    // Create question navigation
    createQuestionNavigation();
    
    // Show quiz page
    landingPage.classList.remove('active');
    quizPage.classList.add('active');
    
    // Load first question
    loadQuestion();
}

// Create Question Navigation
function createQuestionNavigation() {
    questionNav.innerHTML = '';
    for (let i = 0; i < currentQuestions.length; i++) {
        const navBtn = document.createElement('button');
        navBtn.className = 'nav-btn';
        navBtn.textContent = i + 1;
        navBtn.addEventListener('click', () => navigateToQuestion(i));
        questionNav.appendChild(navBtn);
    }
}

// Navigate to Specific Question
function navigateToQuestion(index) {
    // Prevent navigation to questions that timed out
    if (timedOutQuestions.includes(index)) {
        alert("You cannot access this question as its timer has expired.");
        return;
    }
    
    saveCurrentAnswer();
    currentQuestionIndex = index;
    loadQuestion();
}

// Load Question
function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Update question counter
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;
    
    // Update question text
    questionText.textContent = question.question;
    
    // Clear and load options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.innerHTML = `
            <span class="option-label">${String.fromCharCode(65 + index)}.</span>
            <span>${option}</span>
        `;
        
        // Highlight if already answered
        if (userAnswers[currentQuestionIndex] === index) {
            optionBtn.classList.add('selected');
        }
        
        optionBtn.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionBtn);
    });
    
    // Update navigation buttons
    prevBtn.disabled = currentQuestionIndex === 0 || timedOutQuestions.includes(currentQuestionIndex - 1);
    
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
    
    // Update question navigation highlighting
    updateQuestionNavigation();
    
    // Start timer
    startTimer();
}

// Select Option
function selectOption(index) {
    // Remove previous selection
    const allOptions = document.querySelectorAll('.option-btn');
    allOptions.forEach(btn => btn.classList.remove('selected'));
    
    // Add selection to clicked option
    allOptions[index].classList.add('selected');
    
    // Save answer
    userAnswers[currentQuestionIndex] = index;
    
    // Update navigation
    updateQuestionNavigation();
}

// Clear Current Answer
function clearCurrentAnswer() {
    // Clear the answer
    userAnswers[currentQuestionIndex] = null;
    
    // Remove selected class from all options
    const allOptions = document.querySelectorAll('.option-btn');
    allOptions.forEach(btn => btn.classList.remove('selected'));
    
    // Update navigation
    updateQuestionNavigation();
}

// Save Current Answer
function saveCurrentAnswer() {
    // Stop timer and save time
    stopTimer();
    timePerQuestion[currentQuestionIndex] += (30 - timeRemaining);
}

// Start Timer
function startTimer() {
    stopTimer(); // Clear any existing timer
    timeRemaining = 30;
    timerText.textContent = timeRemaining;
    timerCircle.classList.remove('warning');
    questionStartTime = Date.now();
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        timerText.textContent = timeRemaining;
        
        // Add warning class when time is low
        if (timeRemaining <= 10) {
            timerCircle.classList.add('warning');
        }
        
        // Auto submits when time runs out
        if (timeRemaining <= 0) {
            stopTimer();
            // Mark this question as timed out
            timedOutQuestions.push(currentQuestionIndex);
            
            if (currentQuestionIndex < currentQuestions.length - 1) {
                nextQuestion();
            } else {
                submitQuiz();
            }
        }
    }, 1000);
}

// Stop Timer
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Update Question Navigation
function updateQuestionNavigation() {
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach((btn, index) => {
        btn.classList.remove('current', 'answered', 'disabled');
        
        if (index === currentQuestionIndex) {
            btn.classList.add('current');
        }
        
        if (userAnswers[index] !== null) {
            btn.classList.add('answered');
        }
        
        // Disable navigation buttons for timed out questions
        if (timedOutQuestions.includes(index)) {
            btn.classList.add('disabled');
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }
    });
}

// Previous Question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        // Checking if previous question timed out
        if (timedOutQuestions.includes(currentQuestionIndex - 1)) {
            alert("You cannot go back to questions whose timer has expired.");
            return;
        }
        saveCurrentAnswer();
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Next Question
function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        saveCurrentAnswer();
        currentQuestionIndex++;
        loadQuestion();
    }
}

// Submit Quiz
function submitQuiz() {
    saveCurrentAnswer();
    stopTimer();
    
    // Calculate results
    calculateResults();
    
    // Show results page
    quizPage.classList.remove('active');
    resultsPage.classList.add('active');
}

// Calculate Results
function calculateResults() {
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    let unattemptedAnswers = 0;
    let totalTime = 0;
    
    // Calculate scores
    currentQuestions.forEach((question, index) => {
        totalTime += timePerQuestion[index];
        
        if (userAnswers[index] === null) {
            unattemptedAnswers++;
        } else if (userAnswers[index] === question.correct) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }
    });
    
    const percentage = Math.round((correctAnswers / currentQuestions.length) * 100);
    
    // Update score summary
    document.getElementById('finalScore').textContent = `${correctAnswers}/${currentQuestions.length}`;
    document.getElementById('percentageScore').textContent = `${percentage}%`;
    document.getElementById('totalTime').textContent = `${totalTime}s`;
    
    // Create performance chart
    createPerformanceChart(correctAnswers, incorrectAnswers, unattemptedAnswers);
    
    // Create time chart
    createTimeChart();
    
    // Create detailed review
    createDetailedReview();
}

// Create Performance Chart
function createPerformanceChart(correct, incorrect, unattempted) {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    
    // Destroy existing chart if any
    if (window.performanceChart instanceof Chart) {
        window.performanceChart.destroy();
    }
    
    window.performanceChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Correct', 'Incorrect', 'Not Attempted'],
            datasets: [{
                data: [correct, incorrect, unattempted],
                backgroundColor: [
                    '#28a745',
                    '#dc3545',
                    '#ffc107'
                ],
                borderWidth: 2,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const percentage = Math.round((value / currentQuestions.length) * 100);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// Create Time Chart
function createTimeChart() {
    const ctx = document.getElementById('timeChart').getContext('2d');
    
    // Destroy existing chart if any
    if (window.timeChart instanceof Chart) {
        window.timeChart.destroy();
    }
    
    const labels = currentQuestions.map((_, index) => `Q${index + 1}`);
    
    window.timeChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Time Spent (seconds)',
                data: timePerQuestion,
                backgroundColor: 'rgba(102, 126, 234, 0.6)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 2,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 30,
                    ticks: {
                        stepSize: 5
                    },
                    title: {
                        display: true,
                        text: 'Seconds',
                        font: {
                            size: 14
                        }
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Questions',
                        font: {
                            size: 14
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Time: ${context.parsed.y}s`;
                        }
                    }
                }
            }
        }
    });
}

// Create Detailed Review
function createDetailedReview() {
    const reviewContainer = document.getElementById('questionReview');
    reviewContainer.innerHTML = '';
    
    currentQuestions.forEach((question, index) => {
        const detailDiv = document.createElement('div');
        const isUnattempted = userAnswers[index] === null;
        const isCorrect = userAnswers[index] === question.correct;
        
        let statusClass = 'incorrect';
        let statusText = '✗ Incorrect';
        
        if (isUnattempted) {
            statusClass = 'unattempted';
            statusText = '⊘ Not Attempted';
        } else if (isCorrect) {
            statusClass = 'correct';
            statusText = '✓ Correct';
        }
        
        detailDiv.className = `question-detail ${statusClass}`;
        
        let userAnswerText = 'Not Attempted';
        if (userAnswers[index] !== null) {
            userAnswerText = question.options[userAnswers[index]];
        }
        
        detailDiv.innerHTML = `
            <h4>Question ${index + 1}: ${question.question}</h4>
            <p><strong>Your Answer:</strong> ${userAnswerText}</p>
            <p><strong>Correct Answer:</strong> ${question.options[question.correct]}</p>
            <p><strong>Time Spent:</strong> ${timePerQuestion[index]} seconds</p>
            <p class="answer-status ${statusClass}">
                ${statusText}
            </p>
        `;
        
        reviewContainer.appendChild(detailDiv);
    });
}

// Reset Quiz
function resetQuiz() {
    // Reset all variables
    currentQuestionIndex = 0;
    userAnswers = [];
    timePerQuestion = [];
    stopTimer();
    
    // Destroy charts
    if (window.performanceChart instanceof Chart) {
        window.performanceChart.destroy();
    }
    if (window.timeChart instanceof Chart) {
        window.timeChart.destroy();
    }
    
    // Show landing page
    resultsPage.classList.remove('active');
    landingPage.classList.add('active');
}

// Go to Home
function goToHome() {
    // Reset all variables
    currentQuestionIndex = 0;
    userAnswers = [];
    timePerQuestion = [];
    timedOutQuestions = [];
    stopTimer();
    
    // Destroy charts
    if (window.performanceChart instanceof Chart) {
        window.performanceChart.destroy();
    }
    if (window.timeChart instanceof Chart) {
        window.timeChart.destroy();
    }
    
    // Show landing page
    resultsPage.classList.remove('active');
    landingPage.classList.add('active');
}