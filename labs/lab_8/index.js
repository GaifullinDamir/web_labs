import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
// import fs from 'fs';



const port = 8000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// const objJSON = fs.readFileSync('public/phonesDB.json');

const storage = {
};

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());

app.get('/test', (req, res) => {
    res.send('Hello');
})

app.get('/getPhonesData', (req, res) => {
    res.sendFile(__dirname + '/public/phonesDB.json');
})

app.post('/enter', (req, res) => {
    let username = req.body.username;
    let userAge = req.body.age;
    if(username !='' && userAge!=''){
        storage[username] = userAge;
        console.log(storage);
        res.sendStatus(200);
    }
    if(username =="")
        res.sendStatus(400);

})



app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});