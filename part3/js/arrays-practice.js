//STEP 1
var favMovies = ["HeraPheri", "Bagban", "DragonBall", "SquidGame", "Dark"];
window.console.log(favMovies[1]);

//STEP 2
var movies = new Array(5);
movies[0] = "HeraPheri";
movies[1] = "Bagban";
movies[2] = "DragonBall";
movies[3] = "SquidGame";
movies[4] = "Dark";
window.console.log(movies[0]);

//STEP 3
var movies2 = new Array(5);
movies2[0] = "HeraPheri";
movies2[1] = "Bagban";
movies2[2] = "DragonBall";
movies2[3] = "SquidGame";
movies2[4] = "Dark";

movies2.splice(2, 0, "Maids");
window.console.log(movies2.length);

//STEP 4
var favMovies2 = [];
favMovies2[0] = "HeraPheri";
favMovies2[1] = "Bagban";
favMovies2[2] = "DragonBall";
favMovies2[3] = "SquidGame";
favMovies2[4] = "Dark";

delete favMovies2[0];
window.console.log(favMovies2);

//STEP 5
var favMovies3 = [];
favMovies3[0] = "HeraPheri";
favMovies3[1] = "Bagban";
favMovies3[2] = "DragonBall";
favMovies3[3] = "SquidGame";
favMovies3[4] = "Dark";
favMovies3[5] = "Super Man";
favMovies3[6] = "River";

for (let index = 0; index < favMovies3.length; index++) {
    window.console.log(favMovies3[index]);
}

//STEP 6
var favMovies4 = [];
favMovies4[0] = "HeraPheri";
favMovies4[1] = "Bagban";
favMovies4[2] = "DragonBall";
favMovies4[3] = "SquidGame";
favMovies4[4] = "Dark";
favMovies4[5] = "Super Man";
favMovies4[6] = "River";

for (index in favMovies4) {
    if (favMovies4.hasOwnProperty(index)) {
        window.console.log(favMovies4[index]);
    }
}

//STEP 7
var favMovies5 = [];
favMovies5[0] = "HeraPheri";
favMovies5[1] = "Bagban";
favMovies5[2] = "DragonBall";
favMovies5[3] = "SquidGame";
favMovies5[4] = "Dark";
favMovies5[5] = "Super Man";
favMovies5[6] = "River";

favMovies5.sort();
for (index in favMovies5) {
    if (favMovies5.hasOwnProperty(index)) {
        window.console.log(favMovies5[index]);
    }
}

//STEP 8
var favMovies6 = [];
favMovies6[0] = "HeraPheri";
favMovies6[1] = "Bagban";
favMovies6[2] = "DragonBall";
favMovies6[3] = "SquidGame";
favMovies6[4] = "Dark";
favMovies6[5] = "Super Man";
favMovies6[6] = "River";

var leastFavMovies = [];
leastFavMovies[0] = "Expendables";
leastFavMovies[1] = "Benjamin Button";
leastFavMovies[2] = "Flash";

window.console.log("Movies I like:\n\n");
for (let index = 0; index < favMovies6.length; index++) {
    window.console.log(favMovies6[index]);
}
window.console.log("\n");

window.console.log("Movies I regret watching:\n\n");
for (let index = 0; index < leastFavMovies.length; index++) {
    window.console.log(leastFavMovies[index]);
}
window.console.log("\n");

//STEP 9
var movies = favMovies6.concat(leastFavMovies);
movies.reverse();
for (let index = 0; index < movies.length; index++) {
    window.console.log(movies[index]);
}
window.console.log("\n");

//STEP 10
var movies2 = favMovies6.concat(leastFavMovies);
window.console.log(movies.pop());