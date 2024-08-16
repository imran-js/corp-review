type Props = {};

function Footer({}: Props) {
  return (
    <footer className="footer">
      <small>
        <p>
          &copy; Copyrights by <a target="blank" href="www.imranirshad.com"></a>{" "}
          .Intending for Learning Purpose only.
        </p>
      </small>
      <small className="u-bold u-italic">
        <p>
          <b>Not allowed</b> to use for your own teaching materia
        </p>
      </small>
    </footer>
  );
}

export default Footer;
