/*function Athletes(first, last, age, height, points, championships) {
    this.firstName = first,
    this.lastName = last,
    this.age = age,
    this.height = height,
    this.points = points,
    this.championships = championships
}

//create object
var sportsdraft = new Athletes("Lebron", "James",35, 80, 36000, 4);
//write to screen
document.write(sportsdraft.firstName + " " + sportsdraft.lastNmae)*/

function videoGame(name, developer, genre, release, rating, numGames, multiplayer, consoles, ageRating, price) {
    this.gameName = name,
    this.developers = developer,
    this.genre = genre,
    this.releaseDate = release,
    this.rating = rating,
    this.numOfGames = numGames,
    this.multiplayer = multiplayer,
    this.consoles = consoles,
    this.ageRating = ageRating,
    this.price = price
}

var game = new videoGame("Overcooked", "GhostTown games", "arcade", 2017, 4.5, 2, "yes", "all game consoles", "E for everyone", "$13.99");


document.write("The game of the day is " + game.name);
document.write("<br>");
document.write("It was released in " + game.releaseDate + " and made by " + game.developers);
document.write("<br>");
document.write("The game is rated " + game.ageRating + " and has a rating of " + game.rating + " stars.");
document.write("<br>");
document.write(game.multiplayer + " to multiplayer and is available on " + game.consoles);
document.write("<br>");
document.write("It cost " + game.price);
document.write("<br>");
document.write("<br>");
document.write('<img src="overcooked.jpg" height="350" width="350"></img>');
