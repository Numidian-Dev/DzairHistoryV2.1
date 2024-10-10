require('dotenv').config();
const express = require("express");
const cors = require("cors");
const articles = require("./api/data");
const books = require("./api/dataBooks");
const axios = require("axios");
const _ = require("lodash");
const legals = require("./api/legals");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/articles", (req, res) => {
  res.json(articles);
});
app.get("/api/articles/:link", (req, res) => {
  const link = req.params.link;
  const article = articles.find((article) => article.link === link);
  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ error: "Article not found" });
  }
});

app.get("/api/categorie/:categorie", (req, res) => {
  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const categorieParams = removeAccents(req.params.categorie.toLowerCase());

  const categorie = articles.filter(
    (article) =>
      removeAccents(article.categorie.toLowerCase()) === categorieParams
  );
  const totalArticles = categorie.length;
  if (categorie.length > 0) {
    res.json({
      totalArticles: totalArticles,
      articles: categorie,
    });
  } else {
    res.status(404).json({ error: "Article not found" });
  }
});

app.get("/api/article/:categorie/page/:page", (req, res) => {
  const removeAccents = (str) => {
    if (typeof str !== "string") return str;
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const categorie = removeAccents(req.params.categorie.toLowerCase());
  const page = parseInt(req.params.page);
  const articlesPerPage = 5;
  const startIndex = (page - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;

  const posts = articles.filter(
    (category) => removeAccents(category.categorie.toLowerCase()) === categorie
  );
  const ajustedPosts = posts.sort((a, b) => b.id - a.id).slice(4);
  const totalPages = Math.ceil(ajustedPosts.length / articlesPerPage);

  const paginatedArticles = ajustedPosts.slice(startIndex, endIndex);

  res.json({
    totalPages: totalPages,
    currentPage: page,
    totalArticles: paginatedArticles.length,
    data: paginatedArticles,
  });
});

app.get("/api/books/page/:page", async (req, res) => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/users/118007517861050913153/bookshelves/1001/volumes?key=AIzaSyDQCaGgOkyX0W4euYoe4dl7eGJe-zfHzmw`)
  const data = await response.data.items
   
  const page = req.params.page
  const bookPerPage = 6
  const startIndex = (page - 1) * bookPerPage
  const endIndex = startIndex + bookPerPage
  
  const totalPage = Math.ceil(data.length/bookPerPage)
  const pagination = data.slice(startIndex,endIndex)
  
  res.json({
    totalPages:totalPage,
    currentPage:page,
    totalBooks:pagination.length,
    data:pagination,
  });
});
app.get("/api/instagram-posts", async (req, res) => {
  const TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;

  //const TOKEN = "IGQWRPenFXbmx0dFJ0OXQ1ZAkFxVTllTTZAVLUdGb2VQQVNtZADRYY0NLNnA5STVQRTd5ZAjBxbHotaEtESUpyR0k1YXE4QmxqeDRhRE5uTHJCOU1Ob3hvblp6QVl3aUF4UkQ3WGl5Yi1rRlJJSkVwUFhuUTRWamhqS2sZD";
  const response =  await axios.get(`https://graph.instagram.com/v17.0/me/media?fields=id,caption,media_type,media_url,timestamp&access_token=${TOKEN}`);
  const posts = await response.data;
  res.json(posts);
}); 

app.get("/api/books", async (req, res) => {
const response = await axios.get(`https://www.googleapis.com/books/v1/users/118007517861050913153/bookshelves/1001/volumes?key=AIzaSyDQCaGgOkyX0W4euYoe4dl7eGJe-zfHzmw`)
const data = await response.data.items
  res.json(data);
});

app.get("/api/books/:id", async (req, res) => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/users/118007517861050913153/bookshelves/1001/volumes?key=AIzaSyDQCaGgOkyX0W4euYoe4dl7eGJe-zfHzmw`)
  const data = await response.data.items
   
  const param = req.params.id
  const book = data.filter(f=> f.id === param)
  res.json(book);
});

app.get("/api/articles/search/:title", (req, res) => {
  const title = _.deburr(req.params.title).toLowerCase();
  const result = articles.filter((article) =>
    _.deburr(article.title).toLowerCase().includes(title)
  );
  if (result.length === 0) {
    res.json("Aucun article trouver");
  }
  res.json(result);
});

app.get("/api/books/search/:query", async (req, res) => {

  const response = await axios.get(`https://www.googleapis.com/books/v1/users/118007517861050913153/bookshelves/1001/volumes?key=AIzaSyDQCaGgOkyX0W4euYoe4dl7eGJe-zfHzmw`)
  const data = await response.data.items
   

  const query = _.deburr(req.params.query).toLowerCase();

  const resultat = data.filter((book) => {
    const title = _.deburr(book.volumeInfo.title)?.toLowerCase() ?? "";
    const author =
      typeof book.volumeInfo.authors === "string"
        ? _.deburr(book.volumeInfo.authors).toLowerCase()
        : "";
    return _.deburr(title).includes(query) || _.deburr(author).includes(query);
  });

  res.json(resultat);
});

app.get("/api/legals/:param", (req, res)=>{

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const param = removeAccents(req.params.param.toLowerCase().replace(/['\s]/g, "-"));
  const legal = legals.filter(filtre => removeAccents(filtre.title.toLowerCase().replace(/['\s]/g, "-")).includes(param))
  
  res.json(legal)
})

module.exports = app;
