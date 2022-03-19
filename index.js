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

const UserGenderArray = (users) => {
  const usersGroupedByGender = {
    women: [],
    men: [],
  };

  users.forEach((user) => {
    const { first_name, last_name, ...userUpd } = user;
    userUpd.fullName = `${first_name} ${last_name}`;

    if (user.gender === "female") {
      usersGroupedByGender.women.push(userUpd);
    } else {
      usersGroupedByGender.men.push(userUpd);
    }
  });

  return usersGroupedByGender;
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

const ArrayToObject = (array) => {
  return array.reduce((resArr, object) => {
    resArr[object.id] = object.title;
    return resArr;
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

const bestReleases = (releasesArray) => {
  const selectedReleases = [];
  releasesArray.forEach((obj) =>
    obj.rating[0] === 5.0 ? selectedReleases.push(obj.id) : null
  );
  return selectedReleases;
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

const getBiggestArea = (boxArray) => {
  return boxArray.reduce((biggestObj, obj) => {
    biggestObj =
      biggestObj.width * biggestObj.height > obj.width * obj.height
        ? biggestObj
        : obj;
    return biggestObj;
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
  // Check lenght of each array, add values (do push) to the biggest array to decrease number of iterations for forEach
  if (arr1.length > arr2.length) {
    arr2.forEach((val) => arr1.push(val));
    return arr1;
  } else {
    arr1.forEach((val) => arr2.push(val));
    return arr2;
  }
};

// Task 7
/* Написать функцию, которая принимает следующие значения: первым аргументом - строковое значение, второым аргументом - допустимое кол-во символов.
Если длина строки больше допустимого кол-ва символов, строка должна обрезаться, а в конец добавляться многоточие */

const cutString = (string, symbols) => {
  if (!((typeof string === "string") & (typeof symbols === "number"))) {
    return "Error, the first argument should be of type string and 2nd - of type integer";
  }

  let stringAsArray = string.split("");
  if (stringAsArray.length > symbols) {
    stringAsArray = stringAsArray.slice(0, symbols);
    return `${stringAsArray.join("")}...`;
  } else {
    return string;
  }
};
