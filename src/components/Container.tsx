import FeedbackList from "./FeedbackList";
import Header from "./Header";

type Props = {};

function Container({}: Props) {
  return (
    <main className="container">
      <Header />
      <FeedbackList />
    </main>
  );
}

export default Container;
