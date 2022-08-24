import "./App.css";
import ALLArticles from "./components/AllArticles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import SingleTopic from "./components/SingleTopics";
import IndividualArticle from "./components/IndividualArticle";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/allarticles" element={<ALLArticles />} />
        <Route path="/allarticles/:topic" element={<ALLArticles />} />
        <Route path="/topics" element={<SingleTopic />} />
        <Route
          path="/articles/:individual_article"
          element={<IndividualArticle />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
