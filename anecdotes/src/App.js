import { useState } from "react";

const Button = ({ handleClick, title }) => {
  return <button onClick={handleClick}>{title}</button>;
};

const Display = ({ title, content, index }) => {
  if (title === "votes") {
    return (
      <div>
        {"has "}
        {content[index]}
        {" votes"}
      </div>
    );
  }
  return <div>{content[index]}</div>;
};

const Header = ({ content }) => {
  return <h1>{content}</h1>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const [points, newPoints] = useState(new Uint8Array(anecdotes.length));

  const nextAnecdote = () => {
    const newAnecdote = Math.floor(Math.random() * anecdotes.length);
    setSelected(newAnecdote);
  };

  const voteAnecdote = () => {
    const copy = [...points];
    // increment the value in position 2 by one
    copy[selected] += 1;
    newPoints(copy);
  };

  return (
    <div>
      <Header content={"Anecdote of the day"} />
      <Display title={"anecdotes"} content={anecdotes} index={selected} />
      <Display title={"votes"} content={points} index={selected} />
      <Button handleClick={voteAnecdote} title={"vote"} />
      <Button handleClick={nextAnecdote} title={"next anecdote"} />
      <Header content={"Anecdote with most votes"} />
      <Display
        title={"anecdotes"}
        content={anecdotes}
        index={points.indexOf(Math.max(...points))}
      />
      <Display
        title={"votes"}
        content={points}
        index={points.indexOf(Math.max(...points))}
      />
    </div>
  );
};

export default App;
