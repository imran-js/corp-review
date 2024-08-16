import Pattern from "./HeaderComponents/Pattern";
import FeedbackForm from "./HeaderComponents/FeedbackForm";
import Logo from "./HeaderComponents/Logo";
import PageHeading from "./HeaderComponents/PageHeading";

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm />
    </header>
  );
}

export default Header;
