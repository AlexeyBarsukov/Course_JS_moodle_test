let question;

function start() {
    question = +prompt('Ск фильмов глянул, лучший человек?')
    while (question == '' || question == null || isNaN(question)) {
        question = +prompt('Ск фильмов глянул, лучший человек?')
    }
    console.log(personalMovieDB);
}

// start();

const personalMovieDB = {
    count: question,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}



function rememberMyFilms() {
    for (i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' & a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done')
        } else {
            console.log('error')
            i--;
        }
    }
    // rememberMyFilms()




    function detectPersonalLevel() {
        if (personalMovieDB.count <= 10) {
            console.log("Ты мало посмотрел")
        } else if (personalMovieDB.count <= 10 && personalMovieDB.count < 30) {
            console.log('Classic viewer')
        } else if (personalMovieDB.count > 30) {
            console.log(' дружок, ты киноман')
        }

    }
}
// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    } else {
        console.log('Privat is true')
    }

    // showMyDB(personalMovieDB.privat);

    function writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номер ${i}`)
        }
    }

    writeYourGenres()