const question = +prompt('Сколько фильмов ты посмотрел?', '');


const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '')


const personalMovieDB = {
    count: question,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

personalMovieDB.movies[a] = b

console.log(personalMovieDB)