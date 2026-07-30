//Project_15 code to create a pink dot that follows the mouse pointer around the screen

import { useState, useEffect } from 'react';

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {
    function handleMove(e) {//e is the event object that contains information about the pointer movement
      setPosition({ x: e.clientX, y: e.clientY });
    }
    return () => window.removeEventListener('pointermove', handleMove);
  }, []);

  return (
    <>
      <label>
        <input type="checkbox"
          checked={canMove}
          onChange={e => setCanMove(e.target.checked)} 
        />
        The dot is allowed to move
      </label>
      <hr />
      <div style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,// move the dot to the mouse position
        pointerEvents: 'none',// so that it doesn't block other elements
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }} />
    </>
  );
}