import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  MouseEvent,
  KeyboardEvent,
} from "react";

interface User {
  id: number;
  username: string;
}

type fibFunction = (n: number) => number;

const fib: fibFunction = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};
const num: number = 33;

const SecondApp = () => {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef(null);

  useEffect(() => {
    console.log("mounting");
    console.log("Users:", users);
    return () => console.log("unmounting");
  }, []);

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 2),
    []
  );
  const result = useMemo(() => fib(num), [num]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
    </div>
  );
};
export default SecondApp;
