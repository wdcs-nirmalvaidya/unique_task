document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addBookForm');
    const error = document.getElementById('error');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

           const title = document.getElementById('title').value.trim();
        const author = document.getElementById('author').value.trim();
        const genre = document.getElementById('genre').value.trim();
           const price = Number(document.getElementById('price').value);
        const rating = Number(document.getElementById('rating').value);

        error.textContent = '';

    
        if (!title || !isNaN(title)) {
            error.textContent = "Title cannot be empty or a number!";
            return;
        }
        if (isNaN(price) || price < 0) {
            error.textContent = "Price cannot be negative!";
            return;
        }
        if (isNaN(rating) || rating < 1 || rating > 5) {
            error.textContent = "Rating must be between 1 and 5!";
            return;
        }

        const newBook = { title, author, genre, price, rating };

        
        const bookString = encodeURIComponent(JSON.stringify(newBook));
        window.location.href = `index.html?newBook=${bookString}`;
    });
});
