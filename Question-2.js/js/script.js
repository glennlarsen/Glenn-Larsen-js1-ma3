//Question 2

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const gamesContainer = document.querySelector(".games");

async function getGames() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    const games = data.results;

    console.log(games);

    gamesContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
      console.log(games[i].name);
      console.log(games[i].rating);
      console.log(games[i].tags.length);

      const gameName = games[i].name;
      const gameRating = games[i].rating;
      const gameTags = games[i].tags.length;

      if (i === 8) {
        break;
      }

      gamesContainer.innerHTML += `
            <div class="results">${gameName}
            <div>Rating: ${gameRating}</div>
            <div>Number of tags: ${gameTags}</div></div>`;
    }
  } catch (error) {
    gamesContainer.innerHTML = displayError(
      "An error occured when calling the API"
    );
  }
}

getGames();
