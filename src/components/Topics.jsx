import { useEffect, useState } from "react";
import { fetchAllTopics } from "../api-util";
import { Link } from "react-router-dom";
// import PropagateLoader from "react-spinners/PropagateLoader";

const Topics = () => {
  const [loading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchAllTopics().then((topicData) => {
      setTopics(topicData.topics);
      setIsLoading(false);
    });
  }, []);

  if (loading) return <p>is loading</p>;
  return (
    <div className="topics-options-container">
      <ul className="topicslist">
        {topics.map((topic) => {
          return (
            <main className="topics-wrapper">
              <li key={topic.slug}>
                <Link to={`/allarticles/${topic.slug}`}>
                  <h1 className="options">{topic.slug}</h1>
                </Link>
              </li>
            </main>
          );
        })}
      </ul>
    </div>
  );
};

export default Topics;
