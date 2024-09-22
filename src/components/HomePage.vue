<template>
    <div class="container">
      <div class="centered">
        <input type="text" v-model="searchQuery" placeholder="Введите ваш запрос" class="search-input">
        <button @click="searchBooks" class="search-button">Поиск</button>
      </div>
      <div v-if="books.length > 0" class="result-list">
        <ul>
          <li v-for="book in books" :key="book.id" class="book-item">
            <div>
              <strong>{{ book.volumeInfo.title }}</strong>
              <div v-if="book.volumeInfo.authors">By: {{ book.volumeInfo.authors.join(', ') }}</div>
            </div>
            <div class="buy-button">
              <button @click="buyBook(book.id)">Купить</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        books: []
      };
    },
    methods: {
      async searchBooks() {
        try {
          const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.searchQuery}`);
          const data = await response.json();
          this.books = data.items || [];
        } catch (error) {
          console.error('Error while fetching data:', error);
        }
      },
      buyBook(bookId) {
        console.log('Buy book with ID:', bookId);
        this.$router.push({ name: 'BuyForm', params: { bookId } });
      }
    }
  };
  </script>
  
  <style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
  }
  
  .centered {
    text-align: center;
  }
  
  .search-input {
    padding: 10px;
    font-size: 16px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  .search-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .search-button:hover {
    background-color: #0056b3;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 15px;
  }
  
  button {
    padding: 8px 16px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #218838;
  }
  
  .result-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .book-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  
  .buy-button {
    text-align: right;
  }
  </style>