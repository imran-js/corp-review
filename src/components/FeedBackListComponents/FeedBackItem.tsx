import { TriangleUpIcon } from "@radix-ui/react-icons";

export type FeedBackItems = {
  badgeLetter: string;
  company: string;
  daysAgo: number;
  id: number;
  text: string;
  upvoteCount: number;
};

type FeedBackItemsProps = {
  feedbackItem: FeedBackItems;
};

function FeedBackItem({ feedbackItem }: FeedBackItemsProps) {
  const { badgeLetter, upvoteCount, company, text, daysAgo } = feedbackItem;
  return (
    <>
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>{upvoteCount}</span>
        </button>
        <div>
          <p>{badgeLetter}</p>
        </div>
        <div>
          <p>{company}</p>
          <p>{text}</p>
        </div>
        <div>{daysAgo}d</div>
      </li>
    </>
  );
}

export default FeedBackItem;
