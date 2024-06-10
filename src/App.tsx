import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";
import SecondApp from "./second/SecondApp";

const App = () => {
  const [count, setCount] = useState<number>(1);
  return (
    <div>
      <Heading title={"Hello World"} />
      <Section title={"True title"}>This is my section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["one", "two", "three"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />

      <br />
      <SecondApp />
    </div>
  );
};

export default App;
