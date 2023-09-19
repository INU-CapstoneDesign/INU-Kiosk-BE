// [23.09.14.목]
const express = require('express');
const app = express();
const sequelize = require('sequelize');

const db = require('./models/index.js');

const { Menu, Restaurant } = db; // 변수명 수정

// 모델 간의 관계 설정
Restaurant.hasMany(Menu, { foreignKey: 'restaurantId' });
Menu.belongsTo(Restaurant, { foreignKey: 'restaurantId' });

// 미들웨어 사용
app.use(express.json());

// 미들웨어 사용 -> Public 폴더를 정적 파일로 제공
app.use('/img', express.static('public/img'));

// 인트로 페이지
app.get('/', async (req, res) => {
    //
});

// GET 요청: 식당 목록 조회
app.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll({
      include: [{ model: Menu }],
    });

    // 원하는 JSON 형식으로 데이터 구성
    const response = restaurants.map((restaurant) => ({
      id: restaurant.restaurantId,
      category: restaurant.restaurantCategory,
      name: restaurant.restaurantName,
      menu: restaurant.Menus.map((menu) => ({
        id: 1,
        name: '짜장면',
        price: 8000,
        image: `/img/${menu.menuImage}`,
      })),
    }));

    res.json({ restaurants: response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// POST 요쳥: 각 음식의 아이디 값, 이름, 가격, 사진
// app.post('/orders', async(req, res) => {
//     // 
// });

// Running the Server: 포트번호는5000
app.listen(5000, () => {
    console.log('Server is running on 5000');
});