// import functions and grab DOM elements
import { renderGame } from './render-utils.js';
import { renderTeam } from './render-utils.js';
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

// create an array to hold on to the state of past games
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
  // reset the form values
    teamOneLabel.textContent = teamOneName;
  teamTwoLabel.textContent = teamTwoName;
  
    name1 = teamOneInput.value;
    name2 = teamTwoInput.value;
  const thisGame = renderGame(name1, name2, score1, score2);
  currentGameEl.append(thisGame);
    teamOneInput.value = '';
    teamTwoInput.value = '';

  // refresh the current game element with new data by calling the appropriate function
});





teamOneAddButton.addEventListener('click', () => {

    currentGameEl.textContent = '';
    score1++;
    const theGame = renderGame(name1, name2, score1, score2);
    currentGameEl.append(theGame);

});

teamTwoAddButton.addEventListener('click', () => {
    currentGameEl.textContent = '';
    score2++;
    const theGame = renderGame(name1, name2, score1, score2);
    currentGameEl.append(theGame);
});


teamOneSubtractButton.addEventListener('click', () => {
    currentGameEl.textContent = '';
    score1--;
    const team1Div = renderGame(name1, name2, score1, score2);
    currentGameEl.append(team1Div);
});

teamTwoSubtractButton.addEventListener('click', () => {
    currentGameEl.textContent = '';
    score2--;
    const team2Div = renderGame(name1, name2, score1, score2);
    currentGameEl.append(team2Div);
});




finishGameButton.addEventListener('click', () => {
  // add the current game to an array of games in state
  // it will be helpful to keep track of these games as objects with 4 properties, one for each piece of state we're tracking
  // for example, make an object like this: { name1: 'ducks', name2: 'bears' ,score1: 1, score2: 2 }
    const currentGameData = {
        name1: name1,
        name2: name2,
        score1: score1,
        score2: score2,
    };
  // then push it to your array in state
  // (be sure to make a new object. do not declare the object in global scope and mutate it for reuse. This would cause difficult bugs)
    pastGames.push(currentGameData);
    pastGamesEl.textContent = '';

    for (let game of pastGames) {
        const gameEl = renderGame(game.name1, game.name2, game.score1, game.score2);
        pastGamesEl.append(gameEl);
    }

    displayAllGames();

  // reset the state to zero and empty strings
  // refresh the current game element with new data by calling the appropriate function
});

function refreshCurrentGameEl() {
    currentGameEl.textContent = '';

    teamOneLabel.textContent = name1;
    teamTwoLabel.textContent = name2;

  // const gameEl = . . .
  // make a new gameEl here by calling renderGame with the appropriate arguments.
  // Check the renderGame function declaration in render-utils.js to figure out the correct arguments to pass to this function
  // In render-utils.js as yourself: How many arguments does the function take? What order does it take them in?

    gameEl.classList.add('current');

    currentGameEl.append(gameEl);
}

function displayAllGames() {
  // clear out the past games list in the DOM
  // loop through the past games in state
  // use the renderGame function to render and append a past game for each past game in state
  // again, review the renderGame function in render-utils.js. How many arguments does it take? What order does it take them in?
}

