var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/id/:id', function (req, res, next) {
  let id = req.params.id;
  let data;
  if (id != 'random') {
    data = {
      current: { img: "http://t2.gstatic.com/images?q=tbn:ANd9GcT51bw5Y9pBxClTYdTzRU2o0VrZng_XtLPMPwv61tVvGt99BWGB", name: "Лондонський королівський балет: Лебедине Озеро (мовою оригіналу) (0+)" },
      similar: [
        { id: 1, name: "Лондонський королівський балет: Лебедине Озеро (мовою оригіналу) (0+)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWN4QprXFyJ9oNlgVnW5fHZ7eti02Ed2EeVl9q5DABm3ucuY7", status: "like" }, { id: 2, name: "The Favourite (мовою оригіналу) (16+)", img: "http://www.tolkienlibrary.com/press/images/movie-tie-in-The-hobbit.jpg" }, { id: 3, name: "Лондонський королівський балет: Лебедине Озеро (мовою оригіналу) (0+)", img: "https://i.pinimg.com/originals/31/44/92/3144924fe6cbd9ff012367b3919c9393.png" }, { id: 4, name: "Name 4", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQmZnz3oavrZD_9QoZsjEgNQ7ZlTnOTrcETw0B2dMkH3m-1XTF" }, { id: 5, name: "Name 5 Name 5", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWN4QprXFyJ9oNlgVnW5fHZ7eti02Ed2EeVl9q5DABm3ucuY7" }, { id: 6, name: "Name 6", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59EgrAWaRQAChX7wBDlDkf34q7YE17yjhsyqYC3s0SStIxroM" }, { id: 7, name: "Name 7", img: "https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/article_width/public/2018/12/aladdin-disney-remake-ew-cover.jpg?itok=tLQIX9oQ" }, { id: 8, name: "Name 8", img: "https://timedotcom.files.wordpress.com/2014/11/15503211.jpg?quality=85&w=280" }, { id: 9, name: "Name 9", img: "https://www.flightnetwork.com/blog/wp-content/uploads/2014/08/dvd-cover.jpg" }, { id: 10, name: "Name 10", img: "https://images-na.ssl-images-amazon.com/images/I/91HemHHEpEL._SY445_.jpg" }
      ]
    }
  } else {
    data = {
      current: { img: "https://images-na.ssl-images-amazon.com/images/I/91HemHHEpEL._SY445_.jpg", name: "Лондонський королівський балет: Лебедине Озеро (мовою оригіналу) (0+) " + id },
      similar: [
        { id: 1, name: "Name 1", img: "https://images-na.ssl-images-amazon.com/images/I/91HemHHEpEL._SY445_.jpg", status: "like" }, { id: 2, name: "Name 2", img: "http://www.tolkienlibrary.com/press/images/movie-tie-in-The-hobbit.jpg" }, { id: 3, name: "Name 3", img: "https://i.pinimg.com/originals/31/44/92/3144924fe6cbd9ff012367b3919c9393.png" }, { id: 4, name: "Name 4", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQmZnz3oavrZD_9QoZsjEgNQ7ZlTnOTrcETw0B2dMkH3m-1XTF" }, { id: 5, name: "Name 5", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiWN4QprXFyJ9oNlgVnW5fHZ7eti02Ed2EeVl9q5DABm3ucuY7" }, { id: 6, name: "Name 6", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS59EgrAWaRQAChX7wBDlDkf34q7YE17yjhsyqYC3s0SStIxroM" }, { id: 7, name: "Name 7", img: "https://cdn2us.denofgeek.com/sites/denofgeekus/files/styles/article_width/public/2018/12/aladdin-disney-remake-ew-cover.jpg?itok=tLQIX9oQ" }, { id: 8, name: "Name 8", img: "https://timedotcom.files.wordpress.com/2014/11/15503211.jpg?quality=85&w=280" }, { id: 9, name: "Name 9", img: "https://www.flightnetwork.com/blog/wp-content/uploads/2014/08/dvd-cover.jpg" }, { id: 10, name: "Name 10", img: "https://images-na.ssl-images-amazon.com/images/I/91HemHHEpEL._SY445_.jpg" }
      ]
    }
  }


  res.send(data);
});

module.exports = router;
