document.addEventListener('DOMContentLoaded', function () {
  const app = document.getElementById('app');

  function addBook(title, author) {
      const book = document.createElement('div');
      book.className = 'book';
      book.innerHTML = `<h3>${title}</h3><p>By ${author}</p>`;
      app.appendChild(book);
  }

  // Example books
  addBook('Book 1', 'Author A');
  addBook('Book 2', 'Author B');
  // Add more books as needed
});
