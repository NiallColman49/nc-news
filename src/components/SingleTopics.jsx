import { useEffect, useState } from "react";
import { fetchSingleTopics } from "../api-util";
import { useParams } from "react-router-dom";
import Topics from "./Topics";
import PropagateLoader from "react-spinners/PropagateLoader";

const SingleTopic = () => {
  const [singleTopic, setSingleTopic] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const { topics } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchSingleTopics(topics).then((topicData) => {
      setSingleTopic(topicData);
      setIsLoading(false);
    });
  }, [topics]);

  if (loading) return <PropagateLoader />;
  return (
    <>
      <Topics />
      <ul>
        {singleTopic.map((data) => {
          console.log(data);
          return (
            <div className="topics-data">
              <li>
                <h1 className="data-title">{data.title}</h1>
                <p className="data-author">
                  <span>Author: </span>
                  {data.author}
                </p>
                <p className="data-body">{data.body.slice(0, 175)}</p>
                <p className="data-comment">
                  <span>Comment count: </span>
                  {data.comment_count}
                </p>
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default SingleTopic;
