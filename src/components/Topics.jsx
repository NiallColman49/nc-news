import { useEffect, useState } from "react";
import { fetchAllTopics } from "../api-util";
import { Link } from "react-router-dom";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchAllTopics().then((topicData) => {
      setTopics(topicData.topics);
    });
  }, []);

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
