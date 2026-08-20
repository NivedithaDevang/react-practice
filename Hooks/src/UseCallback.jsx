import { useCallback, useState } from "react";

function CallBack() {
  const [count, setCount] = useState(0);

  const sayHello = useCallback(() => {
    alert("Hello!");
  }, []);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={sayHello}>
        Say Hello
      </button>
    </div>
  );
}

export default CallBack;