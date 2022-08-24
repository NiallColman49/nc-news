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

export const fetchIndividualArticle = (articleId) => {
  return axios
    .get(
      `https://niall-northcoders-backend.herokuapp.com/api/articles/${articleId}`
    )
    .then(({ data }) => {
      return data;
    });
};

export const patchArticleUpVotes = (articleId) => {
  return axios
    .patch(
      `https://niall-northcoders-backend.herokuapp.com/api/articles/${articleId}`,
      {
        inc_votes: 1,
      }
    )
    .then(({ data }) => {
      return data;
    });
};

export const patchArticleDownVotes = (articleId) => {
  return axios
    .patch(
      `https://niall-northcoders-backend.herokuapp.com/api/articles/${articleId}`,
      {
        inc_votes: -1,
      }
    )
    .then(({ data }) => {
      return data;
    });
};

export const fetchArticleComments = (articleId) => {
  return axios
    .get(
      `https://niall-northcoders-backend.herokuapp.com/api/articles/${articleId}/comments`
    )
    .then(({ data }) => {
      return data;
    });
};
