import { ButtonProps } from "../components/button.tsx";

const gameButtons: ButtonProps[] = [
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

export const getInitialButtons = () => {
    return gameButtons;
}
