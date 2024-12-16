import React from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

function TextInputForm({
  inputType,
  handleFormSubmit,
  handleTextInputChange,
  handleShowHideClick,
}) {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <TextInput
          label="Enter a word or phrase"
          placeholder="Type here..."
          type={inputType}
          onChangeHandler={handleTextInputChange}
        />
      </div>
      <div>
        <Button
          text="Show / Hide"
          variant="primary"
          onClickHandler={handleShowHideClick}
        />
      </div>

      <div>
        <Button text="Submit" variant="secondary" type="submit" />
      </div>
    </form>
  );
}

export default TextInputForm;
