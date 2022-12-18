import React from "react";
import "./App.css";
import useGame from "./useGame";

function App() {
  const { textareaRef, handleChange, text, start, timeRemaining, startGame, wordСount } =
    useGame(20);

  return (
    <main>
      <h1>How fast do you type?</h1>
      <div>
        <p>Try to type these words as many times as possible in 20 sec</p>
        <p>Russia is a terrorist state</p>
      </div>
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
