import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time");

  // state가 변할때마다 호출되지 않고 한번만 실행시키고 싶은 함수는 useEffect 사용
  useEffect(() => {
    console.log("only onece");
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
