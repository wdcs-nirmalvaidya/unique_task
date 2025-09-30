document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const bookDataString = params.get('bookData');
    const bookIndex = params.get('index');

    if (!bookDataString || bookIndex === null) {
        alert("Could not load book data to edit.");
        window.location.href = 'index.html';
        return;
    }

    const bookToEdit = JSON.parse(decodeURIComponent(bookDataString));

 
    document.getElementById('edit-title').value = bookToEdit.title;
    document.getElementById('edit-author').value = bookToEdit.author;
    document.getElementById('edit-genre').value = bookToEdit.genre;
    document.getElementById('edit-price').value = bookToEdit.price;
    document.getElementById('edit-rating').value = bookToEdit.rating ?? '';

    document.getElementById('edit-publisher-name').value = bookToEdit.publisher?.name ?? '';
    document.getElementById('edit-address-city').value = bookToEdit.publisher?.address?.city ?? '';
    document.getElementById('edit-address-country').value = bookToEdit.publisher?.address?.country ?? '';
    document.getElementById('edit-contact-email').value = bookToEdit.publisher?.contact_Info?.email ?? '';
    document.getElementById('edit-contact-phone').value = bookToEdit.publisher?.contact_Info?.mo_number ?? '';

    const editForm = document.getElementById('edit-book-form');

 
    let error = document.getElementById('error');
    if (!error) {
        error = document.createElement('p');
        error.id = 'error';
        error.style.color = 'red';
        error.style.marginTop = '10px';
        editForm.prepend(error);
    }

   
    const titleInput = document.getElementById('edit-title');
    titleInput.addEventListener('input', () => {
        titleInput.value = titleInput.value.replace(/[0-9]/g, '');
    });


    editForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = titleInput.value.trim();
        const price = Number(document.getElementById('edit-price').value);

        error.textContent = '';

        if (!title) {
            error.textContent = "Title cannot be empty or contain numbers!";
            return;
        }

        if (isNaN(price) || price < 0) {
            error.textContent = "Price cannot be negative!";
            return;
        }

        const updatedBook = {
            ...bookToEdit,
            title,
            author: document.getElementById('edit-author').value,
            genre: document.getElementById('edit-genre').value,
            price,
            rating: bookToEdit.rating,
            publisher: {
                name: document.getElementById('edit-publisher-name').value,
                address: {
                    city: document.getElementById('edit-address-city').value,
                    country: document.getElementById('edit-address-country').value
                },
                contact_Info: {
                    email: document.getElementById('edit-contact-email').value,
                    mo_number: document.getElementById('edit-contact-phone').value
                }
            }
        };

        const updatedDataString = encodeURIComponent(JSON.stringify(updatedBook));
        window.location.href = `index.html?editedBook=${updatedDataString}&index=${bookIndex}`;
    });

   
    function drawBookReviewGraph(book) {
        const canvas = document.getElementById('bookReviewChart');
        const ctx = canvas.getContext('2d');

      
        canvas.height = 5 * 35 + 50; 

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const reviews = Array.isArray(book.reviews) ? book.reviews : [];
        const reviewCounts = [0, 0, 0, 0, 0]; 

        reviews.forEach(r => {
            const star = Number(r.review_number);
            if (star >= 1 && star <= 5) reviewCounts[star - 1]++;
        });

        const maxCount = Math.max(...reviewCounts, 1); 
        const barHeight = 25;
        const gap = 10;
         const leftPadding = 100;
        const rightPadding = 20;
          const chartWidth = canvas.width - leftPadding - rightPadding;

        for (let i = 0; i < 5; i++) {
            const y = i * (barHeight + gap) + 30;
            const x = leftPadding;
            const barLength = (reviewCounts[i] / maxCount) * chartWidth;

         
            const colors = ['#ff4d4d','#ff944d','#ffdb4d','#94ff4d','#4dff88'];
            ctx.fillStyle = colors[i];
            ctx.fillRect(x, y, barLength, barHeight);

            
            ctx.fillStyle = '#000';
            ctx.font = '14px Arial';
            ctx.textAlign = 'left';
            ctx.fillText(reviewCounts[i], x + barLength + 5, y + barHeight / 2 + 5);

            
            ctx.textAlign = 'right';
            ctx.fillText((i + 1) + '★', x - 10, y + barHeight / 2 + 5);
        }

        
        ctx.beginPath();
        ctx.moveTo(leftPadding, 20);
        ctx.lineTo(leftPadding, canvas.height - 10);
        ctx.strokeStyle = '#000';
        ctx.stroke();
    }
//
    drawBookReviewGraph(bookToEdit);
});
