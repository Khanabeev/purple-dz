function urlToString(urlObject) {
  let urlParams = [];
  for (let key in urlObject) {
    urlParams.push(`${key}=${urlObject[key]}`);
  }
  return urlParams.join("&");
}

const urlParams = {
  search: "Вася",
  take: 10,
};

console.log(urlToString(urlParams)); // search=Вася&take=10
