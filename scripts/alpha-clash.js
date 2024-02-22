function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    
    if(playerPressed == 'Escaped'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    if(playerPressed == expectedAlphabet){
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;

        setTextElementValueById('current-score', newScore);



        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        setTextElementValueById('current-life', newLife);



        // console.log('you missed');
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife-1;
        // currentLifeElement.innerText = newLife;

        if(newLife == 0){
            gameOver();
            
        }

    }
}

document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet.toUpperCase();

    setBackgroundColorId(alphabet)
}

function play(){
    hideElementById('home-screen');
    hideElementById('score');
    showElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('score');

    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('final-score', lastScore);

    const lastAlphabet = getElementTextById('current-alphabet');
    console.log(lastAlphabet);
    removeBackgroundColorById(lastAlphabet.toLowerCase());
}

