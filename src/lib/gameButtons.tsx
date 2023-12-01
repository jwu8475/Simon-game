import { ButtonProps } from "../components/Button.tsx";

export type gameButtonsType = Omit<ButtonProps, 'setPlayerPattern' | 'setDisableButton'>

const gameButtons: gameButtonsType[] = [
    {
    bgColor: 'bg-red-600',
    onSwitch: false,
    },
    {
      bgColor: 'bg-green-600',
      onSwitch: false,
    },
    {
      bgColor: 'bg-blue-600',
      onSwitch: false,
    },
    {
      bgColor: 'bg-yellow-600',
      onSwitch: false,
    },
];

export type patternArrType = number[];

export const getInitialButtons = () => {
    return gameButtons;
}


export const generateRandomIndex = (max: number) => {
    return Math.floor(Math.random() * max)
}

export const addPattern = (patterns: patternArrType) => {
    patterns.push(generateRandomIndex(4))
}
