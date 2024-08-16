import { useState } from "react";

const MAX_CHARACTERS = 150;

function FeedbackForm() {
  const [text, setText] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const TypedText = e.target.value;
    if (TypedText.length > MAX_CHARACTERS) {
      return;
    }
    setText(TypedText);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    setText("");
  };

  return (
    <form className="form">
      <textarea
        value={text}
        onChange={onChangeHandler}
        name="textarea"
        id="textarea"
        placeholder="l"
        maxLength={MAX_CHARACTERS}
      ></textarea>
      <label htmlFor="textarea">
        Enter you'r feedback here. Remember to #hashtag the company
      </label>
      <div>
        <p className="u-italic">{MAX_CHARACTERS - text.length}</p>
        <button onSubmit={onSubmitHandler}>Submit</button>
      </div>
    </form>
  );
}

export default FeedbackForm;
