/* =========================================================
   WORD ESCAPE
   Main Game JavaScript
========================================================= */


/* =========================================================
   LARGE WORD BANK
   Add as many words as you want here.
========================================================= */

const wordBank = [

    {
        word: "LAB",
        category: "SCIENCE",
        clue: "A place where scientists perform experiments."
    },



    {
        word: "MICROSCOPE",
        category: "SCIENCE",
        clue: "An instrument used to see extremely small objects."
    },

    {
        word: "CHEMISTRY",
        category: "SCIENCE",
        clue: "The study of substances and how they react."
    },

    {
        word: "ATOM",
        category: "SCIENCE",
        clue: "The smallest unit of an element."
    },

    {
        word: "ENERGY",
        category: "SCIENCE",
        clue: "The ability to do work."
    },

    {
        word: "BATTERY",
        category: "OBJECT",
        clue: "A device that stores electrical energy."
    },

    {
        word: "MOTOR",
        category: "OBJECT",
        clue: "A machine that converts electrical energy into movement."
    },

    {
        word: "CAMERA",
        category: "TECHNOLOGY",
        clue: "A device used to take photographs or record videos."
    },

    {
        word: "ROBOT",
        category: "TECHNOLOGY",
        clue: "A machine that can be programmed to perform tasks."
    },

    {
        word: "PASSWORD",
        category: "TECHNOLOGY",
        clue: "A secret word used to access an account or system."
    },

    {
        word: "COMPUTER",
        category: "TECHNOLOGY",
        clue: "An electronic machine that processes information."
    },

    {
        word: "KEYBOARD",
        category: "TECHNOLOGY",
        clue: "A device used to type letters and numbers."
    },

    {
        word: "INTERNET",
        category: "TECHNOLOGY",
        clue: "A worldwide network connecting computers."
    },

    {
        word: "SERVER",
        category: "TECHNOLOGY",
        clue: "A computer that provides services or data to other computers."
    },

    {
        word: "MOON",
        category: "SPACE",
        clue: "Earth's natural satellite."
    },

    {
        word: "PLANET",
        category: "SPACE",
        clue: "A large celestial body that orbits a star."
    },

    {
        word: "GALAXY",
        category: "SPACE",
        clue: "A huge collection of stars, gas and dust."
    },

    {
        word: "ROCKET",
        category: "SPACE",
        clue: "A vehicle designed to travel into space."
    },

    {
        word: "ASTRONAUT",
        category: "SPACE",
        clue: "A person trained to travel into space."
    },

    {
        word: "STAR",
        category: "SPACE",
        clue: "A huge ball of hot glowing gas in space."
    },

    {
        word: "OCEAN",
        category: "NATURE",
        clue: "A very large body of salt water."
    },

    {
        word: "FOREST",
        category: "NATURE",
        clue: "A large area covered mainly with trees."
    },

    {
        word: "MOUNTAIN",
        category: "NATURE",
        clue: "A very high natural elevation of the Earth's surface."
    },

    {
        word: "RIVER",
        category: "NATURE",
        clue: "A natural stream of flowing water."
    },

    {
        word: "DESERT",
        category: "NATURE",
        clue: "A very dry area that receives little rainfall."
    },

    {
        word: "VOLCANO",
        category: "NATURE",
        clue: "An opening in Earth's crust from which lava can emerge."
    },

    {
        word: "ELEPHANT",
        category: "ANIMAL",
        clue: "The largest land animal."
    },

    {
        word: "TIGER",
        category: "ANIMAL",
        clue: "A large striped wild cat."
    },

    {
        word: "DOLPHIN",
        category: "ANIMAL",
        clue: "A highly intelligent marine mammal."
    },

    {
        word: "EAGLE",
        category: "ANIMAL",
        clue: "A powerful bird known for excellent eyesight."
    },

    {
        word: "BUTTERFLY",
        category: "ANIMAL",
        clue: "An insect with colorful wings."
    },

    {
        word: "PENGUIN",
        category: "ANIMAL",
        clue: "A flightless bird commonly associated with Antarctica."
    },

    {
        word: "LIBRARY",
        category: "PLACE",
        clue: "A place where books can be borrowed."
    },

    {
        word: "HOSPITAL",
        category: "PLACE",
        clue: "A place where sick or injured people receive treatment."
    },

    {
        word: "SCHOOL",
        category: "PLACE",
        clue: "A place where students go to learn."
    },

    {
        word: "AIRPORT",
        category: "PLACE",
        clue: "A place where airplanes take off and land."
    },

    {
        word: "CASTLE",
        category: "PLACE",
        clue: "A large fortified building where kings or nobles once lived."
    },

    {
        word: "MUSEUM",
        category: "PLACE",
        clue: "A place where historical or artistic objects are displayed."
    },

    {
        word: "MUSIC",
        category: "ART",
        clue: "The art of organizing sounds into an expressive form."
    },

    {
        word: "PAINTING",
        category: "ART",
        clue: "An artwork created using paint."
    },

    {
        word: "DRAWING",
        category: "ART",
        clue: "A picture created using lines and marks."
    },

    {
        word: "GUITAR",
        category: "MUSIC",
        clue: "A stringed musical instrument."
    },

    {
        word: "PIANO",
        category: "MUSIC",
        clue: "A musical instrument with black and white keys."
    },

    {
        word: "MOVIE",
        category: "ENTERTAINMENT",
        clue: "A recorded visual story watched on a screen."
    },

    {
        word: "PUZZLE",
        category: "GAME",
        clue: "A problem or game designed to test your thinking."
    },

    {
        word: "ESCAPE",
        category: "ACTION",
        clue: "To get away from a place or situation."
    },

    {
        word: "SUCCESS",
        category: "ACTION",
        clue: "The achievement of a desired goal."
    },

    {
        word: "MYSTERY",
        category: "GAME",
        clue: "Something difficult to understand or explain."
    },

    {
        word: "SECRET",
        category: "GENERAL",
        clue: "Something that is kept hidden from others."
    },

    {
        word: "CLUE",
        category: "GAME",
        clue: "A piece of information that helps solve a mystery."
    },

    {
        word: "TREASURE",
        category: "ADVENTURE",
        clue: "A valuable collection of gold, jewels or other objects."
    },

    {
        word: "ADVENTURE",
        category: "ADVENTURE",
        clue: "An exciting or unusual experience."
    },

    {
        word: "DOOR",
        category: "OBJECT",
        clue: "A movable barrier used to enter or leave a room."
    },

    {
        word: "WINDOW",
        category: "OBJECT",
        clue: "An opening in a wall that lets in light."
    },

    {
        word: "CLOCK",
        category: "OBJECT",
        clue: "An instrument used to measure and display time."
    },

    {
        word: "MAGNET",
        category: "SCIENCE",
        clue: "An object that attracts certain metals."
    },

    {
        word: "CRYSTAL",
        category: "SCIENCE",
        clue: "A solid material whose atoms are arranged in a regular pattern."
    },

    {
        word: "LASER",
        category: "TECHNOLOGY",
        clue: "A device that produces a concentrated beam of light."
    },

    {
        word: "SIGNAL",
        category: "TECHNOLOGY",
        clue: "A message or indication used to communicate information."
    },

    {
        word: "CIRCUIT",
        category: "ELECTRONICS",
        clue: "A path through which electric current can flow."
    },

    {
        word: "VOLTAGE",
        category: "ELECTRONICS",
        clue: "The electrical potential difference between two points."
    },

    {
        word: "CURRENT",
        category: "ELECTRONICS",
        clue: "The flow of electric charge."
    },

    {
        word: "SOLAR",
        category: "SCIENCE",
        clue: "Related to energy or light from the Sun."
    },

    {
        word: "WATER",
        category: "NATURE",
        clue: "A clear liquid essential for life."
    },

    {
        word: "FIRE",
        category: "NATURE",
        clue: "A process that produces heat and light through burning."
    },

    {
        word: "WIND",
        category: "NATURE",
        clue: "Moving air."
    },

    {
        word: "THUNDER",
        category: "NATURE",
        clue: "The loud sound produced by lightning."
    },

    {
        word: "RAINBOW",
        category: "NATURE",
        clue: "A colorful arc that can appear after rain."
    },

    {
        word: "PENCIL",
        category: "OBJECT",
        clue: "A writing tool containing graphite."
    },

    {
        word: "BOOK",
        category: "OBJECT",
        clue: "A collection of written or printed pages."
    },

    {
        word: "BOTTLE",
        category: "OBJECT",
        clue: "A container commonly used to hold liquids."
    },

    {
        word: "BACKPACK",
        category: "OBJECT",
        clue: "A bag carried on your back."
    },

    {
        word: "CHEMICAL",
        category: "SCIENCE",
        clue: "A substance with a particular chemical composition."
    },

    {
        word: "GRAVITY",
        category: "SCIENCE",
        clue: "The force that attracts objects toward each other."
    },

    {
        word: "DNA",
        category: "SCIENCE",
        clue: "The molecule that carries genetic information in living organisms."
    },

    {
        word: "FOSSIL",
        category: "SCIENCE",
        clue: "The preserved remains or traces of an ancient organism."
    },

    {
        word: "ECOSYSTEM",
        category: "NATURE",
        clue: "A community of living organisms interacting with their environment."
    },

    {
        word: "GLACIER",
        category: "NATURE",
        clue: "A large mass of ice that moves slowly over land."
    },

    {
        word: "ISLAND",
        category: "NATURE",
        clue: "A piece of land completely surrounded by water."
    },

    {
        word: "WATERFALL",
        category: "NATURE",
        clue: "Water flowing over a steep edge or cliff."
    },

    {
        word: "TORNADO",
        category: "NATURE",
        clue: "A rapidly rotating column of air extending from a storm."
    },

    {
        word: "ZEBRA",
        category: "ANIMAL",
        clue: "An African animal known for its distinctive black and white stripes."
    },

    {
        word: "GIRAFFE",
        category: "ANIMAL",
        clue: "The tallest living land animal with a very long neck."
    },

    {
        word: "KANGAROO",
        category: "ANIMAL",
        clue: "An Australian animal that moves by jumping and carries its young in a pouch."
    },

    {
        word: "OCTOPUS",
        category: "ANIMAL",
        clue: "A sea animal with eight arms."
    },

    {
        word: "PANDA",
        category: "ANIMAL",
        clue: "A black and white bear that mainly eats bamboo."
    },

    {
        word: "STADIUM",
        category: "PLACE",
        clue: "A large venue where sports and other events take place."
    },

    {
        word: "RESTAURANT",
        category: "PLACE",
        clue: "A place where people go to eat prepared food."
    },

    {
        word: "THEATER",
        category: "PLACE",
        clue: "A place where plays, movies or performances are presented."
    },

    {
        word: "GALLERY",
        category: "PLACE",
        clue: "A place where artworks are displayed."
    },

    {
        word: "SCULPTURE",
        category: "ART",
        clue: "A three-dimensional artwork made by shaping or carving material."
    },

    {
        word: "DANCE",
        category: "ART",
        clue: "The movement of the body to rhythm or music."
    },

    {
        word: "SMARTPHONE",
        category: "TECHNOLOGY",
        clue: "A mobile device that combines communication, computing and internet features."
    },

    {
        word: "SATELLITE",
        category: "SPACE",
        clue: "An object that moves around a planet or another celestial body."
    },

    {
        word: "COMET",
        category: "SPACE",
        clue: "A space object made of ice and dust that can develop a glowing tail."
    },

    {
        word: "KEY",
        category: "OBJECT",
        clue: "A small object used to open or lock something."
    },

    {
        word: "FLASHLIGHT",
        category: "OBJECT",
        clue: "A portable device that produces a beam of light."
    }

];


/* =========================================================
   GAME SETTINGS
========================================================= */

const TOTAL_PUZZLES = 12;

const STARTING_LIVES = 5;

const STARTING_TIME = 300;

const HINT_COST = 50;

const SKIP_COST = 100;


/* =========================================================
   GAME STATE
========================================================= */

let game = {

    puzzles: [],

    currentPuzzle: 0,

    score: 0,

    lives: STARTING_LIVES,

    time: STARTING_TIME,

    timer: null,

    revealedLetters: [],

    gameRunning: false

};


/* =========================================================
   GET HTML ELEMENT
========================================================= */

function get(id) {

    return document.getElementById(id);

}


/* =========================================================
   SHOW SCREEN
========================================================= */

function showScreen(screenId) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });


    get(screenId).classList.add("active");

}


/* =========================================================
   RANDOMIZE ARRAY
   Fisher-Yates shuffle
========================================================= */

function shuffle(array) {

    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));

        [copy[i], copy[j]] =
            [copy[j], copy[i]];

    }

    return copy;
}


/* =========================================================
   CREATE RANDOM GAME
========================================================= */

function createRandomGame() {

    /*
       Shuffle the entire word bank.

       Then take only 12 words.

       Because the array is shuffled every time,
       the player gets a different selection.
    */

    game.puzzles =
        shuffle(wordBank)
            .slice(0, TOTAL_PUZZLES);

}


/* =========================================================
   START GAME
========================================================= */

function startGame() {

    clearInterval(game.timer);


    createRandomGame();


    game.currentPuzzle = 0;

    game.score = 0;

    game.lives = STARTING_LIVES;

    game.time = STARTING_TIME;

    game.revealedLetters = [];

    game.gameRunning = true;


    showScreen("gameScreen");


    createRoomList();

    showPuzzle();

    startTimer();


    setTimeout(() => {

        get("answerInput").focus();

    }, 200);

}


/* =========================================================
   TIMER
========================================================= */

function startTimer() {

    game.timer =
        setInterval(() => {

            if (!game.gameRunning) {

                return;

            }


            game.time--;

            updateStatistics();


            if (game.time <= 0) {

                game.time = 0;

                updateStatistics();

                gameOver(
                    false,
                    "Time ran out before you could escape."
                );

            }

        }, 1000);

}


/* =========================================================
   ROOM LIST
========================================================= */

function createRoomList() {

    const roomList =
        get("roomList");


    roomList.innerHTML = "";


    game.puzzles.forEach(
        (puzzle, index) => {

            const room =
                document.createElement("div");


            room.className = "room";


            if (index === game.currentPuzzle) {

                room.classList.add("active");

            }


            if (index < game.currentPuzzle) {

                room.classList.add("done");

            }


            const number =
                document.createElement("div");


            number.className =
                "room-number";


            number.textContent =
                index < game.currentPuzzle
                    ? "✓"
                    : index + 1;


            const name =
                document.createElement("span");


            name.textContent =
                puzzle.category;


            room.appendChild(number);

            room.appendChild(name);

            roomList.appendChild(room);

        }
    );

}


/* =========================================================
   SHOW CURRENT PUZZLE
========================================================= */

function showPuzzle() {

    const puzzle =
        game.puzzles[game.currentPuzzle];


    if (!puzzle) {

        gameOver(
            true,
            "Amazing! You solved every puzzle and escaped the laboratory!"
        );

        return;

    }


    game.revealedLetters = [];


    get("roomName").textContent =
        puzzle.category;


    get("questionNumber").textContent =
        `${game.currentPuzzle + 1} / ${TOTAL_PUZZLES}`;


    get("category").textContent =
        puzzle.category;


    get("clue").textContent =
        puzzle.clue;


    get("answerInput").value = "";


    get("feedback").textContent =
        "Enter your answer below.";


    get("feedback").className =
        "feedback";


    createLetterBoxes();


    updateProgress();

    updateStatistics();


    createRoomList();

}


/* =========================================================
   CREATE LETTER BOXES
========================================================= */

function createLetterBoxes() {

    const container =
        get("letterBoxes");


    container.innerHTML = "";


    const puzzle =
        game.puzzles[game.currentPuzzle];


    for (
        let i = 0;
        i < puzzle.word.length;
        i++
    ) {

        const box =
            document.createElement("div");


        box.className =
            "letter-box";


        box.id =
            `letter-${i}`;


        box.textContent = "_";


        container.appendChild(box);

    }

}


/* =========================================================
   UPDATE PROGRESS
========================================================= */

function updateProgress() {

    const completed =
        game.currentPuzzle;


    const percentage =
        (completed / TOTAL_PUZZLES) * 100;


    get("progress").style.width =
        `${percentage}%`;

}


/* =========================================================
   UPDATE SCORE / LIVES / TIME
========================================================= */

function updateStatistics() {

    get("lives").textContent =
        game.lives;


    get("score").textContent =
        game.score;


    get("timer").textContent =
        game.time;

}


/* =========================================================
   SUBMIT ANSWER
========================================================= */

function submitAnswer(event) {

    event.preventDefault();


    if (!game.gameRunning) {

        return;

    }


    const input =
        get("answerInput");


    const answer =
        input.value
            .trim()
            .toUpperCase();


    if (!answer) {

        showToast(
            "Please enter an answer."
        );

        return;

    }


    const puzzle =
        game.puzzles[game.currentPuzzle];


    /* CORRECT ANSWER */

    if (answer === puzzle.word) {

        /*
           Base points = 100

           Extra points are awarded
           for solving quickly.
        */

        const speedBonus =
            Math.min(game.time, 60);


        game.score +=
            100 + speedBonus;


        get("feedback").textContent =
            "✓ Correct! The door is unlocked.";


        get("feedback").className =
            "feedback good";


        updateStatistics();


        game.currentPuzzle++;


        updateProgress();


        /*
           Wait a little before
           showing the next puzzle.
        */

        setTimeout(() => {

            if (
                game.currentPuzzle >=
                TOTAL_PUZZLES
            ) {

                gameOver(
                    true,
                    "You solved all the puzzles and successfully escaped the laboratory!"
                );

                return;

            }


            showPuzzle();


        }, 600);


    }


    /* WRONG ANSWER */

    else {

        game.lives--;

        game.score =
            Math.max(
                0,
                game.score - 25
            );


        get("feedback").textContent =
            "✕ Incorrect. Try again.";


        get("feedback").className =
            "feedback bad";


        updateStatistics();


        if (game.lives <= 0) {

            setTimeout(() => {

                gameOver(
                    false,
                    "You ran out of lives. The laboratory remains locked."
                );

            }, 500);

        }

    }

}


/* =========================================================
   HINT SYSTEM
========================================================= */

function useHint() {

    if (!game.gameRunning) {

        return;

    }


    if (game.score < HINT_COST) {

        showToast(
            "You need 50 points to use a hint."
        );

        return;

    }


    const puzzle =
        game.puzzles[game.currentPuzzle];


    const availableIndexes = [];


    for (
        let i = 0;
        i < puzzle.word.length;
        i++
    ) {

        if (
            !game.revealedLetters.includes(i)
        ) {

            availableIndexes.push(i);

        }

    }


    if (availableIndexes.length === 0) {

        showToast(
            "All letters are already revealed."
        );

        return;

    }


    const randomIndex =
        availableIndexes[
            Math.floor(
                Math.random() *
                availableIndexes.length
            )
        ];


    game.revealedLetters.push(
        randomIndex
    );


    game.score -= HINT_COST;


    const box =
        get(
            `letter-${randomIndex}`
        );


    box.textContent =
        puzzle.word[randomIndex];


    box.classList.add(
        "revealed"
    );


    updateStatistics();


    showToast(
        "One letter revealed! -50 points."
    );

}


/* =========================================================
   SKIP PUZZLE
========================================================= */

function skipPuzzle() {

    if (!game.gameRunning) {

        return;

    }


    game.score =
        Math.max(
            0,
            game.score - SKIP_COST
        );


    game.lives--;


    updateStatistics();


    if (game.lives <= 0) {

        gameOver(
            false,
            "You used your last life by skipping a puzzle."
        );

        return;

    }


    game.currentPuzzle++;


    if (
        game.currentPuzzle >=
        TOTAL_PUZZLES
    ) {

        gameOver(
            true,
            "You reached the exit, but skipped some puzzles."
        );

        return;

    }


    showPuzzle();


    showToast(
        "Puzzle skipped. -100 points."
    );

}


/* =========================================================
   GAME OVER / WIN
========================================================= */

function gameOver(
    won,
    message
) {

    clearInterval(game.timer);


    game.gameRunning = false;


    const bestScore =
        Math.max(
            game.score,
            Number(
                localStorage.getItem(
                    "wordEscapeBest"
                ) || 0
            )
        );


    localStorage.setItem(
        "wordEscapeBest",
        bestScore
    );


    get("resultEmoji").textContent =
        won ? "🎉" : "🔒";


    get("resultTitle").textContent =
        won
            ? "You Escaped!"
            : "Game Over";


    get("resultMessage").textContent =
        message;


    get("finalScore").textContent =
        game.score;


    get("finalSolved").textContent =
        `${Math.min(
            game.currentPuzzle,
            TOTAL_PUZZLES
        )}/${TOTAL_PUZZLES}`;


    get("bestScore").textContent =
        bestScore;


    showScreen(
        "resultScreen"
    );

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    const toast =
        get("toast");


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(() => {

        toast.classList.remove(
            "show"
        );

    }, 1800);

}


/* =========================================================
   BUTTON EVENTS
========================================================= */

get("startButton")
    .addEventListener(
        "click",
        startGame
    );


get("guideStartButton")
    .addEventListener(
        "click",
        startGame
    );


get("howButton")
    .addEventListener(
        "click",
        () => {

            showScreen(
                "howScreen"
            );

        }
    );


get("backButton")
    .addEventListener(
        "click",
        () => {

            showScreen(
                "homeScreen"
            );

        }
    );


get("answerForm")
    .addEventListener(
        "submit",
        submitAnswer
    );


get("hintButton")
    .addEventListener(
        "click",
        useHint
    );


get("skipButton")
    .addEventListener(
        "click",
        skipPuzzle
    );


get("quitButton")
    .addEventListener(
        "click",
        () => {

            clearInterval(
                game.timer
            );

            game.gameRunning =
                false;

            showScreen(
                "homeScreen"
            );

        }
    );


get("playAgainButton")
    .addEventListener(
        "click",
        startGame
    );


get("homeButton")
    .addEventListener(
        "click",
        () => {

            showScreen(
                "homeScreen"
            );

        }
    );


/* =========================================================
   KEYBOARD SHORTCUT
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            game.gameRunning
        ) {

            get("quitButton").click();

        }

    }
);
