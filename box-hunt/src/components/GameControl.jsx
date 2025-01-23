import React from 'react'

const GameControl = ({
    gameDuration,
    setGameDuration,
    handleStart,
    handlePause,
    handleReset,
    isPaused,
    isRunning,
    remainingTime,
    postion,
    handleBoxClick,
}) => {
  return (
    <div className='game-control'>
        <input 
            type='number'
            placeholder='Set game duration'
            value={gameDuration}
            onChange={(e) => setGameDuration(Number(e.target.value))}
            disabled={isRunning}
        />
        <button
            onClick={handleStart} disabled={isRunning}
        >Start</button>
        <button
            onClick={handlePause} disabled={!isRunning}
        >{isPaused ? "Resume" : "Pause"}</button>
        <button
            onClick={handleReset}
        >Reset</button>
    </div>
  )
}

export default GameControl