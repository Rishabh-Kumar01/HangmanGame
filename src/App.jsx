import "./App.css";
import Button from "./components/Button/Button";

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
    </>
  );
}

export default App;
