//tvshow object and properties that go with it
var tvshow = {
    name: "Criminal Minds",
    genre: "crime, mystery",
    startYear: 2005,
    endYear: 2020,
    seasons: 15,
    episodes: 324,
    actorOne: "Matthew Grey Gubler",
    actorTwo: "Thomas Gibson",
    actressOne: "A.J Cook",
    actressTwo: "Kirsten Vangsness"
};
// console.log("The movie " + movie.name + " came out in the year " + movie.year)


//write code to the screen
document.write("<br><font size = 10>");
document.write("The TV show for today is " + tvshow.name);
document.write("</br></font size>");
document.write("<br>");

document.write("<font size = 8>");
document.write(tvshow.name + "'s genre is " + tvshow.genre);
document.write("</font size>");
document.write("<br>");

document.write("<font size = 6>");
document.write("Some actors and actresses on the show include " + tvshow.actorOne + " and " + tvshow.actressTwo);
document.write("</font size>");
document.write("<br>");
document.write("<br>");

//image to the screen 
//document.write("Hello world");
document.write('<img src="criminalPic.jpg" height="350" width="350"></img>');








//function
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