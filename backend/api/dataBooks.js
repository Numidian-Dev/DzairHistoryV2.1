const axios = require("axios");

let books = [];

axios
  .get(
    `https://www.googleapis.com/books/v1/users/118007517861050913153/bookshelves/1001/volumes?key=AIzaSyDQCaGgOkyX0W4euYoe4dl7eGJe-zfHzmw`
  )
  .then((res) => {
    const data = res.data.items;
    data.forEach((item) => {
      books.push(item);
    });
  });



module.exports = books;