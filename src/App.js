import "./App.css";
import ALLArticles from "./components/AllArticles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import SingleTopic from "./components/SingleTopics";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/allarticles" element={<ALLArticles />} />
        <Route path="/allarticles/:topic" element={<ALLArticles />} />
        <Route path="/articles/:article_id" element={<SingleTopic />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
