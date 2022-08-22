export const fetchAllArticles = () => {
  return fetch(
    "https://niall-northcoders-backend.herokuapp.com/api/articles"
  ).then((res) => {
    console.log(res);
    return res.json();
  });
};
