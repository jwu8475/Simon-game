type gameOverProps = {
    setGameState: React.Dispatch<React.SetStateAction<string>>;
    setCurrentPattern: React.Dispatch<React.SetStateAction<number[]>>;
    setPlayerPattern: React.Dispatch<React.SetStateAction<(number | undefined)[]>>;
}

export const Gameover = ({setGameState, setCurrentPattern, setPlayerPattern}: gameOverProps) => {
    return (
        <button onClick={() => {
            setGameState('stopped');
            setCurrentPattern([]);
            setPlayerPattern([]);
        }} className="border-2 border-black rounded">RESET GAME</button>
    )
}