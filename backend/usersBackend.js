var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var users = [
  {
    "id": 1144,
    "username": "https://api.genderize.io",
    "name": "Abc123",
    "password": "da4b078088c6b09a68a7350369ad4fad"
  },
  {
    "id": 1174,
    "username": "https://web-api-test1.herokuapp.com",
    "name": "dftyuu",
    "password": "da4b078088c6b09a68a7350369ad4fad"
  },
  {
    "id": 1184,
    "username": "Siva",
    "name": "dftyuu",
    "password": "da4b078088c6b09a68a7350369ad4fad"
  },
  {
    "id": 1194,
    "username": "Siva",
    "name": "dftyuu",
    "password": "da4b078088c6b09a68a7350369ad4fad"
  },
  {
    "id": 1204,
    "username": "Siva",
    "name": "dftyuu",
    "password": "da4b078088c6b09a68a7350369ad4fad"
  },
  {
    "id": 1214,
    "username": "Siva",
    "name": "dftyuu",
    "password": "da4b078088c6b09a68a7350369ad4fad"
  },
  {
    "id": 1234,
    "username": "Siva",
    "name": "dftyuu",
    "password": "da4b078088c6b09a68a7350369ad4fad"
  },
  {
    "id": 1244,
    "username": "Siva",
    "name": "dftyuu",
    "password": "da4b078088c6b09a68a7350369ad4fad"
  },
  {
    "id": 1254,
    "username": "Siva",
    "name": "dftyuu",
    "password": "da4b078088c6b09a68a7350369ad4fad"
  },
  {
    "id": 1274,
    "username": "Siva",
    "name": "dftyuu",
    "password": "da4b078088c6b09a68a7350369ad4fad"
  },
  {
    "id": 1294,
    "username": "Siva",
    "name": "dftyuu",
    "password": "da4b078088c6b09a68a7350369ad4fad"
  },
  {
    "id": 1304,
    "username": "Siva",
    "name": "dftyuu",
    "password": "da4b078088c6b09a68a7350369ad4fad"
  },
  {
    "id": 1314,
    "username": "Siva",
    "name": "dftyuu",
    "password": "da4b078088c6b09a68a7350369ad4fad"
  },
  {
    "id": 1324,
    "username": "Siva",
    "name": "dftyuu",
    "password": "da4b078088c6b09a68a7350369ad4fad"
  },
  {
    "id": 1334,
    "username": "Siva",
    "name": "dftyuu",
    "password": "da4b078088c6b09a68a7350369ad4fad"
  },
  {
    "id": 1344,
    "username": "Siva",
    "name": "Qwfqwf",
    "password": "da4b078088c6b09a68a7350369ad4fad"
  },
  {
    "id": 1354,
    "username": "Siva",
    "name": "dftyuu",
    "password": "da4b078088c6b09a68a7350369ad4fad"
  },
  {
    "id": 1364,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 1374,
    "username": "Haovnf",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 1384,
    "username": "Haovnfdd",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 1394,
    "username": "username",
    "name": "name",
    "password": "5f4dcc3b5aa765d61d8327deb882cf99"
  },
  {
    "id": 1424,
    "username": "hamdi",
    "name": "Hello",
    "password": "43423adfc48147f0ed1777d0080dd802"
  },
  {
    "id": 1604,
    "username": "1a",
    "name": "Dna the man",
    "password": "efaa153b0f682ae5170a3184fa0df28c"
  },
  {
    "id": 1624,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 1654,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 1914,
    "username": "Testname",
    "name": "Test change name",
    "password": "de7f219bb18da434f8bc8face48c42b1"
  },
  {
    "id": 1934,
    "username": "Test Name",
    "name": "Dipak Stha",
    "password": "37b4e2d82900d5e94b8da524fbeb33c0"
  },
  {
    "id": 1944,
    "username": "Test Name",
    "name": "Dipak Stha",
    "password": "37b4e2d82900d5e94b8da524fbeb33c0"
  },
  {
    "id": 1954,
    "username": "check",
    "name": "check name",
    "password": "25d55ad283aa400af464c76d713c07ad"
  },
  {
    "id": 1964,
    "username": "check",
    "name": "check name",
    "password": "25d55ad283aa400af464c76d713c07ad"
  },
  {
    "id": 1974,
    "username": "check",
    "name": "check name",
    "password": "25d55ad283aa400af464c76d713c07ad"
  },
  {
    "id": 1984,
    "username": "check",
    "name": "check name",
    "password": "25d55ad283aa400af464c76d713c07ad"
  },
  {
    "id": 1994,
    "username": "check",
    "name": "check name",
    "password": "25d55ad283aa400af464c76d713c07ad"
  },
  {
    "id": 2004,
    "username": "check",
    "name": "check name",
    "password": "25d55ad283aa400af464c76d713c07ad"
  },
  {
    "id": 2014,
    "username": "check",
    "name": "check name",
    "password": "25d55ad283aa400af464c76d713c07ad"
  },
  {
    "id": 2024,
    "username": "check",
    "name": "check name",
    "password": "25d55ad283aa400af464c76d713c07ad"
  },
  {
    "id": 2034,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2054,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2064,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2074,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2084,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2094,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2104,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2114,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2124,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2134,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2144,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2194,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2224,
    "username": "arba aja",
    "name": "arba ganteng",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2234,
    "username": "madrus again",
    "name": "said madrus",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2254,
    "username": "arba sore ",
    "name": "arba 14.36",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2264,
    "username": "coba arba",
    "name": "coba lagi arba 14.38",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2274,
    "username": "madrus",
    "name": "Said Madrus",
    "password": "ac43724f16e9241d990427ab7c8f4228"
  },
  {
    "id": 2284,
    "username": "madrus",
    "name": "Said Madrus",
    "password": "ac43724f16e9241d990427ab7c8f4228"
  },
  {
    "id": 2294,
    "username": "toni",
    "name": "Toni Braxton",
    "password": "ac43724f16e9241d990427ab7c8f4228"
  },
  {
    "id": 2304,
    "username": "test sore 15.42",
    "name": "arga mozza",
    "password": "4be8736d13c32bd95538e6a080ebcd76"
  },
  {
    "id": 2314,
    "username": "eva",
    "name": "Fathiya",
    "password": "e1514c553907188ee7182f34c50a7903"
  },
  {
    "id": 2334,
    "username": "TestDev",
    "name": "TestDev 1",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2344,
    "username": "",
    "name": "",
    "password": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "id": 2354,
    "username": "Haaovn",
    "name": "gochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2364,
    "username": "Haaovn",
    "name": "gochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2374,
    "username": "Haaovn",
    "name": "gochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2384,
    "username": "Haaovn",
    "name": "gochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2394,
    "username": "sraza",
    "name": "Salman",
    "password": "b6af3f19458ec8e6faff8ee1e0440ecb"
  },
  {
    "id": 2404,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2414,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2424,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2434,
    "username": "Haov22n",
    "name": "vungochao",
    "password": "4f9887a60c652f2df3dc0106b75bc2bf"
  },
  {
    "id": 2444,
    "username": "Haov22n",
    "name": "vungochao",
    "password": "4f9887a60c652f2df3dc0106b75bc2bf"
  },
  {
    "id": 2454,
    "username": "Haov22n",
    "name": "vungochao",
    "password": "4f9887a60c652f2df3dc0106b75bc2bf"
  },
  {
    "id": 2464,
    "username": "Haov22n",
    "name": "vungochao",
    "password": "4f9887a60c652f2df3dc0106b75bc2bf"
  },
  {
    "id": 2474,
    "username": "Haov22n",
    "name": "vungochao",
    "password": "4f9887a60c652f2df3dc0106b75bc2bf"
  },
  {
    "id": 2484,
    "username": "Haov22n",
    "name": "vungochao",
    "password": "4f9887a60c652f2df3dc0106b75bc2bf"
  },
  {
    "id": 2494,
    "username": "Haov22n",
    "name": "vungochao",
    "password": "4f9887a60c652f2df3dc0106b75bc2bf"
  },
  {
    "id": 2504,
    "username": "Qasim",
    "name": "vungochao",
    "password": "4f9887a60c652f2df3dc0106b75bc2bf"
  },
  {
    "id": 2524,
    "username": "Saad001",
    "name": "Saad",
    "password": "c33367701511b4f6020ec61ded352059"
  },
  {
    "id": 2534,
    "username": "Amina001",
    "name": "Amina",
    "password": "3b712de48137572f3849aabd5666a4e3"
  },
  {
    "id": 2544,
    "username": "Hamza001",
    "name": "Hamza",
    "password": "3147da8ab4a0437c15ef51a5cc7f2dc4"
  },
  {
    "id": 2554,
    "username": "Nadeem001",
    "name": "Nadeem",
    "password": "eb89f40da6a539dd1b1776e522459763"
  },
  {
    "id": 2564,
    "username": "Saad001",
    "name": "Saad Ali",
    "password": "c33367701511b4f6020ec61ded352059"
  },
  {
    "id": 2574,
    "username": "Amina001",
    "name": "Amina Khalid",
    "password": "3b712de48137572f3849aabd5666a4e3"
  },
  {
    "id": 2584,
    "username": "Hamza001",
    "name": "Hamza Qureshi",
    "password": "3147da8ab4a0437c15ef51a5cc7f2dc4"
  },
  {
    "id": 2614,
    "username": "kieuhuyen",
    "name": "kieungan",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2624,
    "username": "amina29",
    "name": "AminaN",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2634,
    "username": "nabeel17",
    "name": "Nabeel",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2644,
    "username": "emaan08",
    "name": "Emaan",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2654,
    "username": "shahzeb21",
    "name": "Shahzeb",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2674,
    "username": "kieuhuyen",
    "name": "buicaokieuhuyen",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2684,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2694,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2714,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2724,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2734,
    "username": "rosid",
    "name": "vnurrosid",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2744,
    "username": "rosid",
    "name": "vnurrosid",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2754,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2764,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2774,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2784,
    "username": "adadadad",
    "name": "dadadad",
    "password": "0d06fd8cb26eb57f1a690f493663cc55"
  },
  {
    "id": 2794,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2804,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2814,
    "username": "linh",
    "name": "lethilinh",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2824,
    "username": "wefadsf",
    "name": "sadfasdf",
    "password": "aee0014b14124efe03c361e1eed93589"
  },
  {
    "id": 2834,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2854,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2864,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2874,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2884,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2894,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2904,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2914,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2924,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2934,
    "username": "Name-6765",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2944,
    "username": "Name-25283",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2954,
    "username": "Name-54525",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2964,
    "username": "Name-75104",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2974,
    "username": "Name-25562",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2984,
    "username": "Name-64217",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 2994,
    "username": "Name-87222",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 3004,
    "username": "Name-30238",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  },
  {
    "id": 3024,
    "username": "Mario",
    "name": "mariojorge",
    "password": "c33367701511b4f6020ec61ded352059"
  },
  {
    "id": 3054,
    "username": "Haovn",
    "name": "vungochao",
    "password": "e10adc3949ba59abbe56e057f20f883e"
  }
]


app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/list', function (req, res) {
  res.json(users);
});

app.get('/list/:id', function (req, res) {
  users.forEach(function (user) {
    if (user.id == req.params.id) {
      res.json(user);
      return;
    }
  });
  res.status(404).end();
});

app.post('/list', function (req, res) {
  users.push(req.body);
  res.json(true);
});

app.listen(process.env.PORT || 3412);