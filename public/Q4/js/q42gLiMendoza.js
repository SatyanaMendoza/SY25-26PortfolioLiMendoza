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

    const movieObj = {
        title: document.getElementById('movie-title').value,
        year: document.getElementById('movie-year').value,
        genre: document.getElementById('movie-genre').value,
        rating: currentRating.toString()
    };

    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    
    movies.push(movieObj);

    localStorage.setItem('movies', JSON.stringify(movies));

    document.getElementById('movieForm').reset();
    setRating(0); 
    displayMovies();
}

function displayMovies() {
    const displayArea = document.getElementById('movieDisplay');
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    
    displayArea.innerHTML = "";

    movies.forEach(movie => {
        let starIcons = "★".repeat(parseInt(movie.rating));
        
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.innerHTML = `
            <strong>${movie.title} (${movie.year})</strong> - ${movie.genre}, 
            Rating: <span class="list-stars">${starIcons}</span>
        `;
        displayArea.appendChild(card);
    });
}

window.onload = displayMovies;