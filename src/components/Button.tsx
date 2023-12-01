import { useState, useEffect, memo } from 'react'

export type ButtonProps = {
    bgColor: string;
    onSwitch: boolean;
    index?: number;
    disableButton?: boolean;
    setPlayerPattern: React.Dispatch<React.SetStateAction<(number | undefined)[]>>;
    setDisableButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Button = memo(({ bgColor, onSwitch, index, disableButton, setDisableButton, setPlayerPattern }: ButtonProps) => {
    const [brightness, setBrightness] = useState('');
    
    const handleClick = () => {
        if (!disableButton) {
            setDisableButton(true)
            setPlayerPattern((prevPattern) => prevPattern ? [...prevPattern, index] : [index]);
            setBrightness('brightness-150')
            setTimeout(() => {
                setBrightness('')
                setDisableButton(false)
            }, 500)
        }
    }

    useEffect(() => {
        onSwitch ? setBrightness('brightness-150') : setBrightness('')
    }, [onSwitch])

    return (
        <button onClick={handleClick} className={`${bgColor} ${brightness} w-24 h-24`} />
    )
})