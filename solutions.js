/*### Add the movies with a rate greater or equal than 8.0 in an array called "bestMovies" and print this array to the console. 
  
Aquí tendrías que crearte un array (`bestMovies`) e ir añadiendo las pelis que pasan la condición que te indican. La condición es la misma que en el apartado anterior, así que tanto el bucle como la condición te valen perfectamente.

<details>
  <summary>Spoiler</summary>
  
```js

const bestMovies = [];

movies.forEach(movie => {
  if (movie.rate >= 8.0) {
    bestMovies.push(movie);
  }
});
console.log(bestMovies);
```

</details>

Hay una forma más compacta y avanzada para hacer esto que es usando `filter`:

<details>
  <summary>Spoiler</summary>
  
```js
const bestMovies = movies.filter(movie => movie.rate >= 8.0);
console.log(bestMovies);
```

</details>

### Based on the "duration" property (which is in minutes), can you print the shortest movie to the console?
  
Esta se puede resolver de varias formas. Por ejemplo, podrías pillar la primera película de todas, sea cual sea, y asignarla a una variable (`shortestMovie`). Luego vas recorriéndolas todas una a una con un bucle y te vas preguntando, ¿es `shortestMovie` más corta que esta peli? Si lo es, la peli es la nueva `shortestMovie`, y si no, pasas de todo y sigues con tu bucle.

 <details>
  <summary>Spoiler</summary>
  
```js
let shortestMovie = movies[0]; // nos guardamos la primera peli

movies.forEach(movie => {
  if (movie.duration < shortestMovie.duration) { // comparamos cada peli con la peli más corta del momento
    shortestMovie = movie; // si resulta que movie es más corta que shortestMovie, guardamos esa peli en shortestMovie
  }
});

console.log(shortestMovie);
  ```
  
</details>

  
Peeero ojo, si ejecutas ese código verás que la peli más corta es Alien y sin embargo mirando la lista obviamente esto no es cierto. Aquí me parece que os han querido añadir una dificultad extra, y es que la duración está expresada como una cadena de texto y no un número, así que para hacer la comparación tendrías que convertir ambas duraciones en un entero.
 
 <details>
  <summary>Spoiler</summary>
  
 ```js

```

</details>
  
Vale, hay otra forma de solucionar el problema y es la siguiente: si ordenaras el array por la duración (de menor a mayor, por ejemplo), tendrías la peli más corta en la posición `movies[0]`… y además el siguiente ejercicio estaría medio resuelto porque va de lo mismo.
  
 <details>
  <summary>Spoiler</summary>
  
```js
let sortedMovies = movies.sort((a,b) => parseInt(a.duration) - parseInt(b.duration));
let shortestMovie = sortedMovies[0];
console.log(shortestMovie);
```

</details>

### Sort the movies in descending order (from newest to oldest) by using the year. 

Aquí solo tienes que usar la solución anterior, ajustando un par de cosas.

 <details>
  <summary>Spoiler</summary>
  
```js
let sortedMovies = movies.sort((a,b) => b.year - a.year);
console.log(sortedMovies);
```

</details>
  
  
/* ### Bonus: If two movies have the same release year, order them in alphabetical order by their title

Si no me equivoco con la solución anterior el array ya está ordenado alfabéticamente como piden (por si acaso échale un vistazo).

Vale, aquí la solución pasa por entender bien cómo funciona `.sort` para comparar tanto números como cadenas de texto. Esta solución es la menos compacta, pero es más fácil de seguir. Mi consejo es que antes de mirarla practiques ordenando el array primero de forma alfabética y luego de forma numérica.


 <details>
  <summary>Spoiler</summary>
  
```js
let sortedMovies = movies.sort(function(a, b) {
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

console.log(sortedMovies);
```

</details>*/
