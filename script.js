  
  const defaultBooks = [
    { 
      title: "Atomic Habits", 
      author: "James Clear", 
      genre: "Self-help", 
      price: 350,
      publisher: {
        name: "Penguin Random House",
        address: { country: "USA", city: "New York" },
        contact_Info: { email: "contact@prh.com", mo_number: "123-456-7890" }
      },
      reviews: [
        { username: "Reader_A", comment: "Life-changing!", review_number: 5 },
        { username: "BookFan123", comment: "A must-read.", review_number: 5 }
      ]
    },
    { 
      title: "The Alchemist", 
      author: "Paulo Coelho", 
      genre: "Fiction", 
      price: 200,
      publisher: {
        name: "HarperCollins",
        address: { country: "USA", city: "New York" },
        contact_Info: { email: "info@harpercollins.com", mo_number: "987-654-3210" }
      },
      reviews: [
        { username: "TravelerX", comment: "Inspirational story.", review_number: 2 }
      ]
    },
    { 
      title: "Clean Code", 
      author: "Robert C. Martin", 
      genre: "Programming", 
      price: 500,
      publisher: {
        name: "Prentice Hall",
        address: { country: "USA", city: "Boston" },
        contact_Info: { email: "support@prenhall.com", mo_number: "555-123-4567" }
      },
      reviews: [
        { username: "DevMaster", comment: "Every programmer should own this.", review_number: 5 },
        { username: "CodeNewbie", comment: "A bit dense, but essential.", review_number: 2 },
        { username: "TechLead", comment: "Solid principles.", review_number: 3 }
        
      ]
    }
  ];


  let books = [...defaultBooks];
  const params = new URLSearchParams(window.location.search);


  const editedBookData = params.get('editedBook');
  const bookIndexToUpdate = params.get('index');
  if (editedBookData && bookIndexToUpdate !== null) {
      try {
          const updatedBook = JSON.parse(decodeURIComponent(editedBookData));
          books[bookIndexToUpdate] = updatedBook;
      } catch (error) {
          console.error("Error parsing edited book data:", error);
      }
  }

  const newBookData = params.get('newBook');
  if (newBookData) {
      try {
          const newBook = JSON.parse(decodeURIComponent(newBookData));
        
          if (!newBook.reviews) newBook.reviews = [];
          books.unshift(newBook);
      } catch (error) {
          console.error("Error parsing new book data from URL:", error);
      }
  }

  let currentSort = { column: 'title', direction: 'asc' };


         function calculateAverageRating(book) {
    if (!book.reviews || book.reviews.length === 0) return 0;
              const total = book.reviews.reduce((sum, review) => sum + review.review_number, 0);
    return total / book.reviews.length;
  }


  function displayBooks(list = books) {
    const tableBody = document.getElementById("bookList");
        tableBody.innerHTML = list.map((book, index) => {
          const publisherName = book.publisher?.name ?? 'Unknown';
      const avgRatingNum = calculateAverageRating(book);
        const averageRating = avgRatingNum === 0 ? 'N/A' : avgRatingNum.toFixed(1) + ' ★';
      const bookDataString = encodeURIComponent(JSON.stringify(book));

      return `
        <tr>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.genre}</td>
          <td>${publisherName}</td>
          <td>₹${book.price}</td>
          <td>${averageRating}</td>
          <td>
            <a href="edit-book.html?bookData=${bookDataString}&index=${index}" class="button button-edit">Edit</a>
              <button class="button delete-btn" onclick="deleteBook(${index})">Delete</button>
          </td>
        </tr>
      `;
    }).join('');

    updateSortIndicators();
  }

  function deleteBook(index) {
    if (confirm("Are you sure you want to delete this book?")) {
        books.splice(index, 1);
      displayBooks();
    }
  }


  function filterBooks() {
    const title = document.getElementById("searchTitle").value.toLowerCase();
      const range = document.getElementById("priceRange").value;
    let min = 0, max = Infinity;

    if (range !== "all") {
      const [rangeMin, rangeMax] = range.split('-').map(Number);
      min = rangeMin;
      max = rangeMax || Infinity;
    }

    const filtered = books.filter(book =>
        book.title.toLowerCase().includes(title) &&
          book.price >= min &&
      book.price <= max
    );

    displayBooks(filtered);
  }


  function sortTableBy(column) {
    if (currentSort.column === column) {
      currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      currentSort.column = column;
      currentSort.direction = 'asc';
    }

    books.sort((a, b) => {
      let valA, valB;
      if (column === 'rating') {
        valA = calculateAverageRating(a);
          valB = calculateAverageRating(b);
      } else {
        valA = a[column];
        valB = b[column];
      }

      const comparison = typeof valA === 'number' ? valA - valB : String(valA).localeCompare(String(valB));
      return currentSort.direction === 'asc' ? comparison : -comparison;
    });

    displayBooks();
  }

  function updateSortIndicators() {
    document.querySelectorAll("th[data-column]").forEach(th => {
      let icon = th.querySelector("i.fa-solid");
      if (!icon) {
        icon = document.createElement("i");
        icon.classList.add("fa-solid");
        th.appendChild(icon);
      }
      icon.classList.remove('icon-visible', 'fa-arrow-up', 'fa-arrow-down', 'fa-sort');

      if (th.dataset.column === currentSort.column) {
        icon.classList.add(currentSort.direction === 'asc' ? 'fa-arrow-up' : 'fa-arrow-down', 'icon-visible');
      } else {
        icon.classList.add('fa-sort');
      }
    });
  }


  displayBooks();
