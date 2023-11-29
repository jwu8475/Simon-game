import { useState } from 'react'
import './App.css'
import { Button } from './components/Button.tsx';
import { getInitialButtons } from './lib/gameButtons.tsx';


function App() {
  const [gameButtons, setGameButtons] = useState(() => getInitialButtons())

  return (
    <main className='flex h-screen justify-center items-center' >
      <div className='w-48 h-48 '>
      {gameButtons.map((gameButton, index) => {
        const {bgColor, onSwitch} = gameButton;
        return (
          <Button bgColor={bgColor} onSwitch={onSwitch} index={index} key={index}/>
        )
      })}
      </div>
    </main>
  )
}

export default App
