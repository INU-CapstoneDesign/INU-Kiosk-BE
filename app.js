// 수정1
const express = require('express');

const app = express();

const db = require('./models/index');

const { Menus } = db;

// 미들웨어 사용
app.use(express.json());

// 인트로 페이지
app.get('/', async (req, res) => {
    //
});

// GET 요청: 식당 목록 조회
app.get('/restaurants', async (req, res) => {
    //
});

// POST 요쳥: 각 음식의 아이디 값, 이름, 가격, 사진
app.post('/orders', async(req, res) => {
    // 
});

// Running the Server: 포트번호는5000
app.listen(5000, () => {
    console.log('Server is running on 5000');
});