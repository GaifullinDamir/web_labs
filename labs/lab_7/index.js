import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import fs from 'fs';



const port = 8000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const objJSON = fs.readFileSync('public/phonesDB.json');
const obj = JSON.parse(objJSON);

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Hello');
})

app.get('/phones/getPhonesData', (req, res) => {
    res.sendFile(__dirname + '/public/phonesDB.json');
})



// app.get('/category', (req, res) => {
//     res.json(category);
// });

// app.post('/enter', (req, res) => {
//     const data = req.body;
//     data.value = +data.value;
//     repository.data.push(data);

//     console.log(repository);
//     res.sendStatus(200);
// });



app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});