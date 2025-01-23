import React, { useEffect, useState } from 'react'

const GameArea = ({
    isPaused,
    gameDuration,
    handleBoxClick,
}) => {

    const [postion, setPosition] = useState({
        top: 50,
        left: 50,
    });

    useEffect(() => {
        if(isPaused) return;

        const interval = setInterval(() => {
            setPosition({
                top: Math.random() * 90,
                left: Math.random() * 90,
            });
        }, gameDuration*1000);

        return () => clearInterval(interval);
    }, [isPaused]);

  return (
    <div className='game-area'>
        <div 
            className="red-box"
            style={{
                top: `${postion.top}%`,
                left: `${postion.left}%`,
            }}
            onClick={handleBoxClick}
        >
        </div>
    </div>
  )
}

export default GameArea