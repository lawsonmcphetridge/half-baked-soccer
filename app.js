// import functions and grab DOM elements
import { renderGame } from './render-utils.js';
const currentGameEl = document.getElementById('current-game-container');
const pastGamesEl = document.getElementById('past-games-container');

const nameFormButton = document.getElementById('name-form-button');
const teamOneAddButton = document.getElementById('team-one-add-button');
const teamTwoAddButton = document.getElementById('team-two-add-button');
const teamOneSubtractButton = document.getElementById('team-one-subtract-button');
const teamTwoSubtractButton = document.getElementById('team-two-subtract-button');
const finishGameButton = document.getElementById('finish-game-button');
const teamOneLabel = document.getElementById('team-one-name');
const teamTwoLabel = document.getElementById('team-two-name');
const teamOneInput = document.getElementById('team-one-input');
const teamTwoInput = document.getElementById('team-two-input');


let pastGames = [];
let name1 = '';
let name2 = '';
let score1 = 0;
let score2 = 0;

nameFormButton.addEventListener('click', () => {
    const teamOneName = teamOneInput.value;
    teamOneLabel.textContent = teamOneName;

    const teamTwoName = teamTwoInput.value;
    teamTwoLabel.textContent = teamTwoName;

    teamOneLabel.textContent = teamOneName;
    teamTwoLabel.textContent = teamTwoName;
  
    name1 = teamOneInput.value;
    name2 = teamTwoInput.value;
    const thisGame = renderGame(name1, name2, score1, score2);
    currentGameEl.append(thisGame);
    teamOneInput.value = '';
    teamTwoInput.value = '';
    refreshCurrentGameEl();

});





teamOneAddButton.addEventListener('click', () => {

    currentGameEl.textContent = '';
    score1++;
    const theGame = renderGame(name1, name2, score1, score2);
    currentGameEl.append(theGame);
    refreshCurrentGameEl();

});

teamTwoAddButton.addEventListener('click', () => {
    currentGameEl.textContent = '';
    score2++;
    const team2Div = renderGame(name1, name2, score1, score2);
    currentGameEl.append(team2Div);
    refreshCurrentGameEl();
});


teamOneSubtractButton.addEventListener('click', () => {
    currentGameEl.textContent = '';
    score1--;
    const team1Div = renderGame(name1, name2, score1, score2);
    currentGameEl.append(team1Div);
    refreshCurrentGameEl();
});

teamTwoSubtractButton.addEventListener('click', () => {
    currentGameEl.textContent = '';
    score2--;
    const team2Div = renderGame(name1, name2, score1, score2);
    currentGameEl.append(team2Div);
    refreshCurrentGameEl();
});




finishGameButton.addEventListener('click', () => {

    const currentGameData = {
        name1: name1,
        name2: name2,
        score1: score1,
        score2: score2,
    };
    pastGames.push(currentGameData);
    pastGamesEl.textContent = '';

   
    displayAllGames();
    name1 = '';
    name2 = '';
    score1 = 0;
    score2 = 0;
    currentGameEl.textContent = '';
    refreshCurrentGameEl();


});

function refreshCurrentGameEl() {
    currentGameEl.textContent = '';

    teamOneLabel.textContent = name1;
    teamTwoLabel.textContent = name2;
    const gameEl = renderGame(name1, name2, score1, score2);
    gameEl.classList.add('current');

    currentGameEl.append(gameEl);
}

function displayAllGames() {
    pastGamesEl.textContent = '';

    for (let game of pastGames) {
        const gameEl = renderGame(
            game.name1,
            game.name2,
            game.score1,
            game.score2
        );
        pastGamesEl.append(gameEl);
    }
}

