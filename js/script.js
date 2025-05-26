const figures = {
    "coração inteiro": "❤️",
    "coração partido": "💔",
    "gato": "🐱"
};
const positions = ["top", "middle", "bottom"];
let currentFigure = "";
let correctPosition = "";
let attemptsLeft = 0;
let maxAttempts = 0;

// Referências aos elementos de áudio
const winSound = document.getElementById("win-sound");
const loseSound = document.getElementById("lose-sound");
const errorSound = document.getElementById("error-sound");

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startGame(level) {
    document.getElementById("level-selection").style.display = "none";
    document.getElementById("game").style.display = "block";
    
    maxAttempts = level === "easy" ? 2 : 1;
    attemptsLeft = maxAttempts;
    
    // Reseta as cartas
    positions.forEach(pos => {
        const card = document.getElementById(pos);
        card.classList.remove("revealed");
        card.querySelector(".back").textContent = "";
    });
    
    document.getElementById("status").textContent = "Embaralhando...";
    document.getElementById("question").textContent = "";
    document.getElementById("attempts").textContent = `Tentativas restantes: ${attemptsLeft}`;
    
    setTimeout(() => {
        const figureKeys = Object.keys(figures);
        currentFigure = figureKeys[Math.floor(Math.random() * figureKeys.length)];
        const shuffledPositions = shuffle([...positions]);
        correctPosition = shuffledPositions[0];

        document.getElementById("status").textContent = "";
        document.getElementById("question").textContent = `Onde está o ${currentFigure}?`;
    }, 1000);
}

function checkAnswer(selectedPosition) {
    if (!currentFigure || attemptsLeft <= 0) return;

    attemptsLeft--;
    document.getElementById("attempts").textContent = `Tentativas restantes: ${attemptsLeft}`;

    if (selectedPosition === correctPosition) {
        document.getElementById("status").textContent = "Você acertou!";
        revealCard();
        winSound.play(); // Toca o som de vitória
        attemptsLeft = 0; // Finaliza a rodada
    } else {
        if (attemptsLeft > 0) {
            document.getElementById("status").textContent = "Tente novamente!";
            errorSound.play(); // Toca o som de erro
        } else {
            document.getElementById("status").textContent = "Você errou! Tentativas esgotadas.";
            revealCard();
            loseSound.play(); // Toca o som de derrota
        }
    }

    if (attemptsLeft === 0) {
        setTimeout(resetGame, 2000); // Volta à seleção de nível após 2 segundos
    }
}

function revealCard() {
    const correctCard = document.getElementById(correctPosition);
    correctCard.classList.add("revealed");
    correctCard.querySelector(".back").textContent = figures[currentFigure];
}

function resetGame() {
    document.getElementById("game").style.display = "none";
    document.getElementById("level-selection").style.display = "block";
    currentFigure = "";
    correctPosition = "";
    attemptsLeft = 0;
}
