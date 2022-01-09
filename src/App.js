import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi"); // 컴포넌트 생성될 때
    return () => {
      console.log("bye"); // 컴포넌트 없어질 때, clean up
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
