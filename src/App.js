import "./App.css";
import ALLArticles from "./components/AllArticles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/allarticles" element={<ALLArticles />} />
      </Routes>
      <Main />
      <Footer />
    </>
  );
}

export default App;
