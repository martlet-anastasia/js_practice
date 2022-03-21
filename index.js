// Task 1
/* Функция принимает массив пользователей. Исходные данные см. ниже. Возвращает объект, состоящий из двух полей: female и male. Данные поля являются массивами, в которых содержаться пользователи, подходящие по категории gender соответственно. Также, вместо двух полей first_name и last_name у каждого из объектов должно быть поле fullName в котором будут объеденины убранные поля (first_name и last_name). Количество пользователей может быть не ограничено */

const users = [
  {
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "female",
    ip_address: "26.58.193.2",
  },
  {
    id: 2,
    first_name: "Petr",
    last_name: "Jackson",
    email: "gfrediani1@senate.gov",
    gender: "male",
    ip_address: "229.179.4.212",
  },
];

const groupUsersByGender = (users) => {
  return users.reduce((genderUsersObject, user) => {
    const { first_name, last_name, ...userUpd } = user;
    const gender = userUpd.gender;
    userUpd.fullName = `${first_name} ${last_name}`;

    if (!(gender in genderUsersObject)) {
      genderUsersObject[gender] = [];
    }
    genderUsersObject[gender].push(userUpd);

    return genderUsersObject;
  }, {});
};

// Task 2
/* Преобразуйте массив в объект используя функцию reduce */

const videos = [
  {
    id: 65432445,
    title: "The Chamber",
  },
  {
    id: 675465,
    title: "Fracture",
  },
  {
    id: 70111470,
    title: "Die Hard",
  },
  {
    id: 654356453,
    title: "Bad Boys",
  },
];

const createVideosIdTitleMap = (videosArray) => {
  return videosArray.reduce((videosIdTitleMap, video) => {
    videosIdTitleMap[video.id] = video.title;
    return videosIdTitleMap;
  }, {});
};

// Task 3
/* Выведите массив ids для релизов у которых рейтинг 5.0. */

const newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

const findTopRaitedRealeses = (releasesArray) => {
  const topRaitedRealeses = [];
  releasesArray.forEach((release) =>
    release.rating[0] === 5.0 ? topRaitedRealeses.push(release.id) : null
  );
  return topRaitedRealeses;
};

// Task 4
/* С помощью функций map, reduce, вывести url у которого самая большая площадь */

const boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
  },
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
  },
];

const getBiggestArea = (boxesArray) => {
  return boxesArray.reduce((biggestBox, box) => {
    let biggestArea = biggestBox.width * biggestBox.height;
    let calculatedArea = box.width * box.height;
    biggestBox = biggestArea > calculatedArea ? biggestBox : box;
    return biggestBox;
  }).url;
};

// Task 5
/* Написать функцию, которая принимает в себя массив из числовых и строчных-числовых значений. Данная ф-ция должна вернуть массив, в которос числовые значения исходного массива стали строчными, а строчные - числовыми */

const convertValues = (valArray) =>
  valArray.map((value) =>
    typeof value === "string" ? Number(value) : String(value)
  );

// Task 6
/* Написать функцию, которая принимает в себя 2 массива, а возвращает один, состоящий из 2ух, которые пришли в нее */

const joinArrays = (arr1, arr2) => {
  return arr1.concat(arr2);
};

// Task 7
/* Написать функцию, которая принимает следующие значения: первым аргументом - строковое значение, второым аргументом - допустимое кол-во символов.
Если длина строки больше допустимого кол-ва символов, строка должна обрезаться, а в конец добавляться многоточие */

const cutString = (string, symbols) => {
  if (!((typeof string === "string") & (typeof symbols === "number"))) {
    return "Error, the first argument should be of type string and 2nd - of type integer";
  }

  if (string.length > symbols) {
    let cuttedString = string.slice(0, symbols);
    return `${cuttedString}...`;
  } else {
    return string;
  }
};
