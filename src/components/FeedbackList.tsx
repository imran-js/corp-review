type Props = {};
import { useEffect, useState } from "react";
import FeedBackItem from "./FeedBackListComponents/FeedBackItem";
import Spinner from "./Spinner";

export default function FeedbackList({}: Props) {
  const [feedbackList, setFeedbackList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchFeedbackItems = async () => {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
      if (!response.ok) throw new Error();
      const data = await response.json();
      setFeedbackList(data.feedbacks);
    };

    fetchFeedbackItems();
    setIsLoading(false);
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}

      {feedbackList.map((item) => (
        <FeedBackItem key={item.id} feedbackItem={item} />
      ))}
    </ol>
  );
}
