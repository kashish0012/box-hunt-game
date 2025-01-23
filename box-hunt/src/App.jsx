import React, { useState } from 'react';
import './App.css'
import GameControl from './components/GameControl'
import GameArea from './components/GameArea';
import ReactionTable from './components/ReactionTable';

function App() {
  const [gameDuration, setGameDuration] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [lastClickTime, setLastClickTime] = useState(null);
  const [reactionTime, setReactionTime] = useState([]);

  const handleStart = () => {
    if(gameDuration > 0){
      setIsRunning(true);
      setIsPaused(false);
      setReactionTime([]);
      setStartTime(Date.now());
      setLastClickTime(null);
    } else {
      alert('Please set a valid game duration');
    }
  };

  const handlePause = () => {
    setIsPaused((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setGameDuration(0);
    setStartTime(null);
    setLastClickTime(null);
    setReactionTime([]);
  };

  const handleBoxClick = () => {
    if(isRunning && !isPaused){
      const currentTime = Date.now();
      const reactionTimeFromStart = ((currentTime - startTime) / 1000).toFixed(2);
      const reactionTimeFromLast = lastClickTime ? ((currentTime - lastClickTime) / 1000).toFixed(2) : reactionTimeFromStart;
      setReactionTime((prev) => [
        ...prev, 
        {timeFromStart: reactionTimeFromStart, timeFromLast: reactionTimeFromLast}
      ]);
      setLastClickTime(currentTime);
      setIsPaused((prev) => !prev);
    }
  };

  return (
    <>
      <h1>Box Hunt</h1>
      <GameControl
        gameDuration={gameDuration}
        setGameDuration={setGameDuration}
        isRunning={isRunning}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePause={handlePause}
        handleReset={handleReset}
      />
      {isRunning && (
        <GameArea
          isPaused={isPaused}
          gameDuration={gameDuration}
          handleBoxClick={handleBoxClick}
        />
      )}
      {reactionTime.length > 0 && <ReactionTable reactionTime={reactionTime} />}
    </>
  )
}

export default App
