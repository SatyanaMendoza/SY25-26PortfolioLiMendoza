let currentRating = 0;

function setRating(val) {
    currentRating = val;
    const stars = document.querySelectorAll('.star-container .star');
    stars.forEach(star => {
        star.classList.toggle('selected', star.getAttribute('data-value') <= val);
    });
}

function saveMovie(event) {
    event.preventDefault();

    if (currentRating === 0) {
        alert("Please select a rating!");
        return;
    }

    const titleInput = document.getElementById('movie-title').value.trim();
    const yearInput = document.getElementById('movie-year').value;
    const genreInput = document.getElementById('movie-genre').value;

    let movies = JSON.parse(localStorage.getItem('movies')) || [];

    const existingIndex = movies.findIndex(m => m.title.toLowerCase() === titleInput.toLowerCase());
    
    if (existingIndex !== -1) {
        let oldRating = parseFloat(movies[existingIndex].rating);
        let newAverage = (oldRating + currentRating) / 2;

        movies[existingIndex].year = yearInput;
        movies[existingIndex].genre = genreInput;
        movies[existingIndex].rating = newAverage.toFixed(1);
    } 
    else {
        const movieObj = {
            title: titleInput,
            year: yearInput,
            genre: genreInput,
            rating: currentRating.toString()
        };

        movies.push(movieObj);
    }

    localStorage.setItem('movies', JSON.stringify(movies));

    document.getElementById('movieForm').reset();
    setRating(0); 
    displayMovies();
}

function deleteMovie(index) {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    const movieTitle = movies[index].title;

    if (confirm(`Are you sure you want to delete "${movieTitle}"?`)) {
        movies.splice(index, 1);
        localStorage.setItem('movies', JSON.stringify(movies));
        displayMovies();
    }
}

function displayMovies() {
    const displayArea = document.getElementById('movieDisplay');
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    
    displayArea.innerHTML = "";

    movies.forEach((movie, index) => {
        let starIcons = "★".repeat(Math.round(parseFloat(movie.rating)));
        
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <div class="movie-info">
                <strong>${movie.title} (${movie.year})</strong> - ${movie.genre}<br>
                Rating: <span class="list-stars">${starIcons}</span> (${movie.rating})
            </div>
            <button class="delete-btn" onclick="deleteMovie(${index})">Delete</button>
        `;
        displayArea.appendChild(card);
    });
}

window.onload = displayMovies;