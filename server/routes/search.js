var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('movieName/:movieName', function (req, res, next) {
	let arr;
	if (req.params.name != "x") {
		arr = [
			{ id: 1, name: "Лондонський королівський балет: Лебедине Озеро (мовою оригіналу) (0+)" },
			{ id: 2, name: "Name movie 2" },
			{ id: 3, name: "Лондонський королівський балет: Лебедине Озеро (мовою оригіналу) (0+)" },
			{ id: 4, name: "Name movie 4" },
			{ id: 5, name: "Name movie 5" },
			{ id: 6, name: "Name movie 6" }
		];
	} else {
		arr = [];
	}
	res.send(arr);
	console.log(arr)
});

module.exports = router;
