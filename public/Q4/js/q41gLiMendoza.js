function checkEmpty(event) {
    if (event.target.value.trim() === "") {
        event.target.classList.add("missing");
    } else {
        event.target.classList.remove("missing");
    }
}

function toggleRating(el) {
    const id = el.dataset.id;
    const isActive = el.classList.toggle('active');
}