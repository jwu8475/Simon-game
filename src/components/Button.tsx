import { useState, useEffect } from 'react'

export type ButtonProps = {
    bgColor: string;
    onSwitch: boolean;
    index?: number;
}

export const Button = ({ bgColor, onSwitch, index }: ButtonProps) => {
    const [brightness, setBrightness] = useState('');

    useEffect(() => {
        onSwitch ? setBrightness('brightness-150') : setBrightness('')
    }, [onSwitch])

    return (
        <button className={`${bgColor} ${brightness} w-24 h-24 `} />
    )
}