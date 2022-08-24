import axios from "axios";

export const fetchAllArticles = (topic) => {
  return axios
    .get("https://niall-northcoders-backend.herokuapp.com/api/articles", {
      params: { topic },
    })
    .then(({ data }) => {
      return data;
    });
};

export const fetchAllTopics = () => {
  return axios
    .get("https://niall-northcoders-backend.herokuapp.com/api/topics")
    .then(({ data }) => {
      return data;
    });
};

export const fetchSingleTopics = (topic) => {
  return axios
    .get(
      `https://niall-northcoders-backend.herokuapp.com/api/articles?topic=${topic}`
    )
    .then(({ data }) => {
      return data;
    });
};

export const fetchIndividualArticle = (article_id) => {
  return axios
    .get(
      `https://niall-northcoders-backend.herokuapp.com/api/articles/${article_id}`
    )
    .then(({ data }) => {
      return data;
    });
};
