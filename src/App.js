import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const STARTING_TIME = 5;

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [wordСount, setWordСount] = useState(0);
  const [start, setStart] = useState(false);

  const textareaRef = useRef(null);

  function handleChange(event) {
    setText(event.target.value);
  }

  function countWords() {
    const wordsArray = text.trim().split(" ");
    return wordsArray.filter((word) => word !== "").length;
  }

  useEffect(() => {
    if (timeRemaining > 0 && start) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, start]);

  function startGame() {
    setStart(true);
    setTimeRemaining(STARTING_TIME);
    setText("");
    setWordСount(0);
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
  }

  function endGame() {
    setStart(false);
    setWordСount(countWords());
  }

  return (
    <main>
      <h1>How fast do you type?</h1>
      <textarea value={text} onChange={handleChange} disabled={!start} ref={textareaRef} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={start}>
        Start
      </button>
      <h1>Word count: {wordСount}</h1>
    </main>
  );
}

export default App;
