import { useState, useRef, useEffect } from "react";

function useGame(startingTime = 15) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [wordCount, setWordCount] = useState(0);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeRemaining, start]);

  function startGame() {
    setStart(true);
    setTimeRemaining(startingTime);
    setText("");
    setWordCount(0);
    textareaRef.current.disabled = false;
    textareaRef.current.focus();
  }

  function endGame() {
    setStart(false);
    setWordCount(countWords());
  }

  return { textareaRef, handleChange, text, start, timeRemaining, startGame, wordСount: wordCount };
}

export default useGame;
