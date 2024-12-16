import React from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function TextInputForm({ handleFormSubmit, handleTextInputChange }) {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          label="Enter a word or phrase"
          placeholder="Type here..."
          onChangeHandler={handleTextInputChange}
        />
      </div>
      <div>
        <Button text="Show / Hide" variant="primary" />
      </div>

      <div>
        <Button text="Submit" variant="secondary" type="submit" />
      </div>
    </form>
  );
}

export default TextInputForm;
