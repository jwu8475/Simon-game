import { useState, useEffect, useCallback } from 'react'
import './App.css'
import { Button } from './components/Button.tsx';
import { getInitialButtons, generateRandomIndex, patternArrType, gameButtonsType } from './lib/gameButtons.tsx';
import { Gameover } from './components/Gameover.tsx'

const App = () => {
  const [gameButtons, setGameButtons] = useState(() => getInitialButtons());
  const [currentPattern, setCurrentPattern] = useState(() => [generateRandomIndex(4)]);
  const [disableButton, setDisableButton] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [playerPattern, setPlayerPattern] = useState<(number | undefined)[]>([]);

  const playPattern = useCallback((patternArr: patternArrType, newButtonSetter: React.Dispatch<React.SetStateAction<gameButtonsType[]>>) => {
      setTimeout(() => {
        if (patternArr.length === 0) return setDisableButton(false);
        toggleSwitch(patternArr[0], newButtonSetter, true);
        setTimeout(() => {
          toggleSwitch(patternArr[0], newButtonSetter, false)
          playPattern(patternArr.slice(1), newButtonSetter)
        }, 500)

      }, 500);

  }, [])

  const toggleSwitch = (currPattern: number, setter: React.Dispatch<React.SetStateAction<gameButtonsType[]>>, option: boolean) => {
    setter((prevState) => {
      const currState = [...prevState]
      currState[currPattern].onSwitch = option;
      return currState;
    })
  }

  useEffect(() => {
    setTimeout(() => playPattern(currentPattern, setGameButtons), 500)
  }, [currentPattern, playPattern])

  useEffect(() => {
    for (let i=0; i<playerPattern.length; i++) {
      if (playerPattern[i] !== currentPattern[i]) {
        setGameOver(true);
        setDisableButton(true);
        break;
      }
    }
    if (playerPattern.length === currentPattern.length) {
      setCurrentPattern([...currentPattern, generateRandomIndex(4)])
      setPlayerPattern([])
    }
  }, [playerPattern, currentPattern])

  return (
    <main className='flex h-screen justify-center items-center' >
      <div className='w-48 h-48'>
      {gameButtons.map((gameButton, index) => {
        const {bgColor, onSwitch} = gameButton;
        return (
          <Button bgColor={bgColor} onSwitch={onSwitch} index={index} setPlayerPattern={setPlayerPattern} disableButton={disableButton} key={index}/>
        )
      })}
      </div>
      {gameOver && (<Gameover />)}
    </main>
  )
}

export default App;
