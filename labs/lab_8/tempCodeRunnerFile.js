import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const fs = require('fs');

const port = 8000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Объект для хранения расходов и доходов 
// const repository = {
//     data: [
//     ]
// }

// const category = {
//     "statistics_category": [
//         {
//             "type": "Спорт",
//             "value": 800 
//         },
//         {
//             "type": "Еда",
//             "value": 800 
//         },
//         {
//             "type": "Игры",
//             "value": 800 
//         }
//     ]
// }

const obj = fs.readFileSync('public/phonesDB.json')
console.log(obj);