import React from "react";
import { useState } from "react";

const Header = ({ header }) => {
  return <h1>{header}</h1>;
};

const Button = ({ handleClick, title }) => {
  return <button onClick={handleClick}>{title}</button>;
};

const Statistics = ({ good, neutral, bad, total }) => {
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  if (total === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div>
      <StatisticLine title={"good"} value={good} />
      <StatisticLine title={"neutral"} value={neutral} />
      <StatisticLine title={"bad"} value={bad} />
      <StatisticLine title={"all"} value={total} />
      <StatisticLine title={"average"} value={average} />
      <StatisticLine title={"positive"} value={positive} />
    </div>
  );
};

const StatisticLine = ({ title, value }) => {
  if (title === "positive") {
    return (
      <div>
        <table>
          <tr>
            <td>{title}</td>
            <td>
              {value} {"%"}
            </td>
          </tr>
        </table>
      </div>
    );
  }
  return (
    <div>
      <table>
        <tr>
          <td>{title}</td>
          <td>{value}</td>
        </tr>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const increaseGood = () => {
    const newGood = good + 1;
    const newTotal = total + 1;
    setTotal(newTotal);
    setGood(newGood);
  };

  const increaseNeutral = () => {
    const newNeutral = neutral + 1;
    const newTotal = total + 1;
    setTotal(newTotal);
    setNeutral(newNeutral);
  };

  const increaseBad = () => {
    const newBad = bad + 1;
    const newTotal = total + 1;
    setTotal(newTotal);
    setBad(newBad);
  };

  const heading1 = "give feedback";

  return (
    <div>
      <Header header={heading1} />
      <Button handleClick={increaseGood} title={"good"} />
      <Button handleClick={increaseNeutral} title={"neutral"} />
      <Button handleClick={increaseBad} title={"bad"} />
      <Header header={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
