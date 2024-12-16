import "./App.css";
import Button from "./components/Button/Button";
import TextInput from "./components/TextInput/TextInput";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Button
        text="Click me"
        variant="primary"
        onClickHandler={() => {
          console.log("Button clicked");
        }}
      />
      <Button
        text="Click me"
        variant="secondary"
        onClickHandler={() => {
          console.log("Button clicked");
        }}
      />
      <TextInput
        label="Enter some text"
        placeholder="Type here"
        value=""
        onChangeHandler={(e) => {
          console.log(e.target.value);
        }}
      />
    </>
  );
}

export default App;
