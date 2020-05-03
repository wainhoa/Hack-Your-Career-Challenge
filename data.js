var movies = [
  {
    title: "Moon",
    year: 2009,
    director: "Duncan Jones",
    duration: "97",
    rate: 7.9,
  },
  {
    title: "2001: A Space Odyssey",
    year: 1968,
    director: "Stanley Kubrick",
    duration: "149",
    rate: 8.3,
  },
  {
    title: "Star Trek",
    year: 2009,
    director: "J.J. Abrams",
    duration: "127",
    rate: 7.9,
  },
  {
    title: "Guardians of the Galaxy",
    year: 2014,
    director: "James Gunn",
    duration: "121",
    rate: 8.0,
  },
  {
    title: "The Right Stuff",
    year: 1983,
    director: "Philip Kaufman",
    duration: "193",
    rate: 7.8,
  },
  {
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    duration: "169",
    rate: 8.6,
  },
  {
    title: "Solaris",
    year: 1972,
    director: "Andrei Tarkovsky",
    duration: "147",
    rate: 8.1,
  },
  {
    title: "Apollo 13",
    year: 1995,
    director: "Ron Howard",
    duration: "140",
    rate: 7.6,
  },
  {
    title: "Alien",
    year: 1979,
    director: "Ridley Scott",
    duration: "117",
    rate: 8.4,
  },
  {
    title: "The Martian",
    year: 2015,
    director: "Ridley Scott",
    duration: "144",
    rate: 8.0,
  },
  {
    title: "Gravity",
    year: 2013,
    director: "Alfonso Cuarón",
    duration: "91",
    rate: 7.8,
  },
  {
    title: "Star Wars: Episode VII - The Force Awakens",
    year: 2015,
    director: "J.J. Abrams",
    duration: "138",
    rate: 7.9,
  },
];

// Let's print the movies with a rate of at least 8.0 and print the "title" and "rate" in the console. //

movies.forEach(movie => {
  if (movie.rate >= 8.0) {
    console.log(movie.title + ': ' + movie.rate);
  };
})

// Add the movies with a rate greater or equal than 8.0 in an array called "bestMovies" and print this array to the console. 

let bestMovies = []

movies.forEach(movie => {
  if (movie.rate >= 8.0) {
    bestMovies.push(movie);
  }
});
console.log(bestMovies);
/*
let bestMovies = movies.filter(movie => movie.rate >= 8.0);
console.log(bestMovies);
*/

// Print to the console the movies that are from Ridley Scott. // 

movies.forEach(movie => {
  if (movie.director === 'Ridley Scott') {
    console.log('Movies that are from Ridley Scott: ' + movie.title);
  };
})

// Based on the "duration" property (which is in minutes), can you print the shortest movie to the console?

let sortedMovies = movies.sort((a,b) => parseInt(a.duration) - parseInt(b.duration));
let shortestMovie = sortedMovies[0];
console.log(shortestMovie);

// Sort the movies in descending order (from newest to oldest) by using the year. 

let DescendingOrder = movies.sort((a,b) => b.year - a.year);
console.log(DescendingOrder);

//  => Bonus (not mandatory to complete the challenge): **_if two movies have the same release year, 
// order them in alphabetical order by their title_

let AlphabeticalsortedMovies = movies.sort(function(a, b) {
  if (b.year === a.year) {
    if (b.title > a.title) {
      return -1;
    } else  if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  } else {
    return b.year - a.year;
  }
});

console.log(AlphabeticalsortedMovies);
