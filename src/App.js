import REACT from "react";

const App = () => {
  const dom = "Hi!"
  const onClickText = () => {
    console.log(dom);
  }
  return (
    <>
    <h1>Hello World</h1>
    <div>{dom}</div>
    <input type="text" onClick={onClickText} />
    </>
  );
}

export default App;
