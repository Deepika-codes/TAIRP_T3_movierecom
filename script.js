document.addEventListener("DOMContentLoaded", async () => {
    const movieContainer = document.querySelector(".movie-container");

    try {
        const response = await fetch("movies.json");
        const movies = await response.json();
        
        movies.forEach(movie => {
            const movieElement = createMovieElement(movie);
            movieContainer.appendChild(movieElement);
        });
    } catch (error) {
        console.error("Error fetching movie data:", error);
    }
});

function createMovieElement(movie) {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    
    const imageElement = document.createElement("img");
    imageElement.src = movie.image;
    imageElement.alt = movie.title;
    
    const titleElement = document.createElement("h3");
    titleElement.textContent = movie.title;
    
    const genreElement = document.createElement("p");
    genreElement.textContent = movie.genre;
    
    movieElement.appendChild(imageElement);
    movieElement.appendChild(titleElement);
    movieElement.appendChild(genreElement);
    
    return movieElement;
}
document.addEventListener("DOMContentLoaded", async () => {
    const movieContainer = document.querySelector(".movie-container");

    try {
        const response = await fetch("movies.json");
        const movies = await response.json();

        // Loop through the movies and do something with the data
        movies.forEach(movie => {
            // Create elements and update content here
        });
    } catch (error) {
        console.error("Error fetching movie data:", error);
    }
});
movies.forEach(movie => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    
    const titleElement = document.createElement("h2");
    titleElement.textContent = movie.title;
    
    const genreElement = document.createElement("p");
    genreElement.textContent = movie.genre;
    
    movieElement.appendChild(titleElement);
    movieElement.appendChild(genreElement);
    
    movieContainer.appendChild(movieElement);
});