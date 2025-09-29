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
      { username: "BookFan123", comment: "A must-read.", review_number: 4 },
      { username: "GrowthGuru", comment: "Helped me break bad habits.", review_number: 5 },
      { username: "DailyReader", comment: "Good but repetitive.", review_number: 3 },
      { username: "Disappointed", comment: "Not what I expected.", review_number: 2 },
      { username: "MotivatedOne", comment: "Started applying and seeing results.", review_number: 5 }
    ]
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    price: 250,
    publisher: {
      name: "HarperOne",
      address: { country: "Brazil", city: "Rio de Janeiro" },
      contact_Info: { email: "info@harperone.com", mo_number: "234-567-8901" }
    },
    reviews: [
      { username: "Traveler", comment: "Very inspiring.", review_number: 5 },
      { username: "Dreamer", comment: "Magical journey.", review_number: 5 },
      { username: "Realist", comment: "Too idealistic for me.", review_number: 2 },
      { username: "AdventureFan", comment: "Beautifully written!", review_number: 5 },
      { username: "Critic", comment: "Overrated book.", review_number: 1 }
    ]
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Self-help",
    price: 400,
    publisher: {
      name: "Grand Central Publishing",
      address: { country: "USA", city: "New York" },
      contact_Info: { email: "info@gcp.com", mo_number: "345-678-9012" }
    },
    reviews: [
      { username: "FocusedReader", comment: "Very practical.", review_number: 5 },
      { username: "Concentrator", comment: "Helped me a lot.", review_number: 4 },
      { username: "BusyBee", comment: "Good concepts but a bit long.", review_number: 3 },
      { username: "LazyReader", comment: "Couldn't finish it.", review_number: 2 },
      { username: "Achiever", comment: "Boosted my productivity.", review_number: 4 }
    ]
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "History",
    price: 500,
    publisher: {
      name: "Harper",
      address: { country: "Israel", city: "Jerusalem" },
      contact_Info: { email: "contact@harper.com", mo_number: "456-789-0123" }
    },
    reviews: [
      { username: "HistoryBuff", comment: "Eye-opening.", review_number: 5 },
      { username: "CuriousMind", comment: "Great insights.", review_number: 4 },
      { username: "Scholar", comment: "Highly recommended.", review_number: 5 },
      { username: "AverageJoe", comment: "Interesting but too long.", review_number: 3 },
      { username: "Skeptic", comment: "Didn't agree with many points.", review_number: 2 }
    ]
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    price: 450,
    publisher: {
      name: "Farrar, Straus and Giroux",
      address: { country: "USA", city: "New York" },
      contact_Info: { email: "info@fsg.com", mo_number: "567-890-1234" }
    },
    reviews: [
      { username: "Thinker", comment: "Mind-blowing.", review_number: 5 },
      { username: "Analyst", comment: "Very detailed.", review_number: 4 },
      { username: "CasualReader", comment: "Hard to follow.", review_number: 3 },
      { username: "Critic101", comment: "Too technical.", review_number: 2 },
      { username: "DeepMind", comment: "Tough but worth it.", review_number: 4 }
    ]
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    genre: "Self-help",
    price: 300,
    publisher: {
      name: "Random House",
      address: { country: "USA", city: "New York" },
      contact_Info: { email: "contact@randomhouse.com", mo_number: "678-901-2345" }
    },
    reviews: [
      { username: "HabitMaster", comment: "Very useful.", review_number: 4 },
      { username: "RoutineFan", comment: "Life changing.", review_number: 5 },
      { username: "PracticalGuy", comment: "Easy to understand.", review_number: 4 },
      { username: "LazyReader", comment: "Not engaging.", review_number: 2 },
      { username: "RealUser", comment: "Helped me create a workout habit.", review_number: 5 }
    ]
  },
  {
    title: "Educated",
    author: "Tara Westover",
    genre: "Memoir",
    price: 350,
    publisher: {
      name: "Random House",
      address: { country: "USA", city: "Boston" },
      contact_Info: { email: "info@randomhouse.com", mo_number: "789-012-3456" }
    },
    reviews: [
      { username: "Learner", comment: "Inspiring story.", review_number: 5 },
      { username: "Bookworm", comment: "Amazing memoir.", review_number: 4 },
      { username: "DeepThinker", comment: "Very emotional read.", review_number: 5 },
      { username: "Critic", comment: "Overhyped.", review_number: 2 },
      { username: "Dreamer", comment: "Gave me hope.", review_number: 5 }
    ]
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    price: 250,
    publisher: {
      name: "Secker & Warburg",
      address: { country: "UK", city: "London" },
      contact_Info: { email: "info@secker.com", mo_number: "890-123-4567" }
    },
    reviews: [
      { username: "Reader1", comment: "Classic!", review_number: 5 },
      { username: "Reader2", comment: "Thought-provoking.", review_number: 4 },
      { username: "SciFiFan", comment: "A bit dark for me.", review_number: 3 },
      { username: "Critic2", comment: "Overrated classic.", review_number: 1 },
      { username: "Futurist", comment: "So relevant even today.", review_number: 5 }
    ]
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Fiction",
    price: 270,
    publisher: {
      name: "Chatto & Windus",
      address: { country: "UK", city: "London" },
      contact_Info: { email: "contact@chatto.com", mo_number: "901-234-5678" }
    },
    reviews: [
      { username: "SciFiFan", comment: "Fascinating.", review_number: 5 },
      { username: "Reader3", comment: "Great vision.", review_number: 4 },
      { username: "Futurist", comment: "Interesting ideas.", review_number: 3 },
      { username: "ConfusedReader", comment: "Hard to understand.", review_number: 2 },
      { username: "ThinkerX", comment: "Very creative story.", review_number: 5 }
    ]
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    genre: "Self-help",
    price: 320,
    publisher: {
      name: "HarperOne",
      address: { country: "USA", city: "New York" },
      contact_Info: { email: "info@harperone.com", mo_number: "234-567-8901" }
    },
    reviews: [
      { username: "Realist", comment: "Very honest.", review_number: 4 },
      { username: "FrankReader", comment: "Loved it.", review_number: 5 },
      { username: "SensitiveSoul", comment: "Too harsh for me.", review_number: 2 },
      { username: "StraightTalker", comment: "Eye-opening truths.", review_number: 5 },
      { username: "AverageReader", comment: "Mixed feelings.", review_number: 3 }
    ]
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    genre: "Finance",
    price: 300,
    publisher: {
      name: "Warner Books",
      address: { country: "USA", city: "New York" },
      contact_Info: { email: "info@warnerbooks.com", mo_number: "345-678-9012" }
    },
    reviews: [
      { username: "Investor", comment: "Very informative.", review_number: 5 },
      { username: "FinanceGeek", comment: "Great tips.", review_number: 4 },
      { username: "Skeptical", comment: "Didn't find it useful.", review_number: 2 },
      { username: "MoneyGuru", comment: "Helped me manage finances better.", review_number: 5 },
      { username: "CasualReader", comment: "Good read.", review_number: 4 }
    ]
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    genre: "Business",
    price: 400,
    publisher: {
      name: "Crown Business",
      address: { country: "USA", city: "New York" },
      contact_Info: { email: "info@crown.com", mo_number: "456-789-0123" }
    },
    reviews: [
      { username: "Entrepreneur", comment: "Very practical.", review_number: 5 },
      { username: "StartupFan", comment: "Excellent.", review_number: 4 },
      { username: "Realist", comment: "Good but repetitive.", review_number: 3 },
      { username: "Founder", comment: "Essential for startups.", review_number: 5 },
      { username: "Critic", comment: "Overrated ideas.", review_number: 2 }
    ]
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    genre: "Self-help",
    price: 350,
    publisher: {
      name: "Free Press",
      address: { country: "USA", city: "New York" },
      contact_Info: { email: "info@freepress.com", mo_number: "567-890-1234" }
    },
    reviews: [
      { username: "Leader", comment: "Very motivating.", review_number: 5 },
      { username: "Professional", comment: "Life-changing.", review_number: 5 },
      { username: "Critic", comment: "Too repetitive.", review_number: 2 },
      { username: "InspiredOne", comment: "Truly powerful lessons.", review_number: 5 },
      { username: "AverageReader", comment: "Good but long.", review_number: 4 }
    ]
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    genre: "Self-help",
    price: 280,
    publisher: {
      name: "Simon & Schuster",
      address: { country: "USA", city: "New York" },
      contact_Info: { email: "info@simon.com", mo_number: "678-901-2345" }
    },
    reviews: [
      { username: "SocialGuru", comment: "Timeless advice.", review_number: 5 },
      { username: "Reader4", comment: "Very helpful.", review_number: 4 },
      { username: "ModernReader", comment: "Some ideas feel outdated.", review_number: 5 },
      { username: "Dev Patel", comment: "Very good book.", review_number: 4 },
      { username: "Critic", comment: "Too basic.", review_number: 2 }
    ]
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    genre: "Business",
    price: 360,
    publisher: {
      name: "Crown Business",
      address: { country: "USA", city: "New York" },
      contact_Info: { email: "info@crown.com", mo_number: "789-012-3456" }
    },
    reviews: [
      { username: "Innovator", comment: "Great insights.", review_number: 5 },
      { username: "StartupFan", comment: "Must read.", review_number: 4 },
      { username: "Skeptic", comment: "Didn't agree with his views.", review_number: 2 },
      { username: "Visionary", comment: "Eye-opening concepts.", review_number: 5 },
      { username: "CasualReader", comment: "Good overall.", review_number: 4 }
    ]
  },
  {
    title: "Thinking in Bets",
    author: "Annie Duke",
    genre: "Psychology",
    price: 330,
    publisher: {
      name: "Portfolio",
      address: { country: "USA", city: "New York" },
      contact_Info: { email: "info@portfolio.com", mo_number: "890-123-4567" }
    },
    reviews: [
      { username: "Gambler", comment: "Excellent advice.", review_number: 5 },
      { username: "Analyst", comment: "Very interesting.", review_number: 4 },
      { username: "Beginner", comment: "A bit complex.", review_number: 3 },
      { username: "Strategist", comment: "Helpful decision-making tips.", review_number: 5 },
      { username: "Critic", comment: "Not engaging.", review_number: 2 }
    ]
  },
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    genre: "Philosophy",
    price: 200,
    publisher: {
      name: "Penguin Classics",
      address: { country: "UK", city: "London" },
      contact_Info: { email: "info@penguin.com", mo_number: "901-234-5678" }
    },
    reviews: [
      { username: "Stoic", comment: "Timeless wisdom.", review_number: 5 },
      { username: "Philosopher", comment: "Very deep.", review_number: 4 },
      { username: "CasualReader", comment: "Hard to understand.", review_number: 2 },
      { username: "Thinker", comment: "Great philosophy.", review_number: 5 },
      { username: "Critic", comment: "Dry writing.", review_number: 3 }
    ]
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
    genre: "Psychology",
    price: 280,
    publisher: {
      name: "Beacon Press",
      address: { country: "USA", city: "Boston" },
      contact_Info: { email: "info@beacon.com", mo_number: "234-567-8901" }
    },
    reviews: [
      { username: "Seeker", comment: "Life-changing.", review_number: 5 },
      { username: "Reader5", comment: "Very moving.", review_number: 4 },
      { username: "Critic", comment: "Depressing read.", review_number: 2 },
      { username: "Inspiration", comment: "Made me reflect deeply.", review_number: 5 },
      { username: "CasualReader", comment: "Good but sad.", review_number: 3 }
    ]
  },
  {
    title: "The Art of War",
    author: "Sun Tzu",
    genre: "Strategy",
    price: 250,
    publisher: {
      name: "Oxford University Press",
      address: { country: "China", city: "Beijing" },
      contact_Info: { email: "info@oup.com", mo_number: "345-678-9012" }
    },
    reviews: [
      { username: "Strategist", comment: "Classic military strategy.", review_number: 5 },
      { username: "Tactician", comment: "Highly recommended.", review_number: 5 },
      { username: "ModernThinker", comment: "Still relevant today.", review_number: 4 },
      { username: "Warrior", comment: "Very practical lessons.", review_number: 5 },
      { username: "Critic", comment: "Too old-fashioned.", review_number: 2 }
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

        const bookDataToSend = {
            ...book,
            rating: avgRatingNum.toFixed(1)
        };
        const bookDataString = encodeURIComponent(JSON.stringify(bookDataToSend));

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


