// project 27 - Coin Toss Game


import { useState } from 'react';

    function App() {
        const [result, setResult] = useState(null); // 'heads' or 'tails'
        const [isFlipping, setIsFlipping] = useState(false);

        const handleFlip = () => {
            setIsFlipping(true);
            // Simulate a delay for visual effect
            setTimeout(() => {
                const outcome = Math.random() < 0.5 ? 'heads' : 'tails';
                setResult(outcome);
                setIsFlipping(false);
            }); // 1 second delay
        };

        return (
            <div>
                <h1>Coin Toss Game</h1>
                <button onClick={handleFlip} disabled={isFlipping}>
                    {isFlipping ? 'Flipping...' : 'Flip Coin'}
                </button>
                {result && <p>Result: {result}</p>}
                {/* Optional: Add CoinDisplay component here */}
            </div>
        );
    }

    export default App;