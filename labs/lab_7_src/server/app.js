var express = require("express"),
http = require("http"),
app = express(),
phones = [
// настраиваем список задач копированием
// содержимого из файла todos.OLD.json
];
app.use(express.static(__dirname + "/client"));
http.createServer(app).listen(3000);

// этот маршрут замещает наш файл
// todos.json в примере из части 5
app.get("/phonesDB.json", function (req, res) {
    res.json(phones);
});