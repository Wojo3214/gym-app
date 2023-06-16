import React from 'react';
import { 
  IonButton,
} from '@ionic/react';
import './Button.css';

interface ButtonProps {
  text: string;
  color: string;
  size: string;
  fill: string | null;
  disabled: boolean | null;
  onclick: React.MouseEventHandler<HTMLIonButtonElement> | undefined;
}

const Button: React.FC<ButtonProps> = ({ text, color, size, fill, disabled, onclick }) => {

  const buttonSize = size === "small" ? "small" : "default";
  const buttonFill = fill === "outline" ? "outline" : fill === "clear" ? 'clear' : fill === "default" ? "default" : "default";
  const disabledButton = disabled === true ? true : false;
  const handleOnClick = onclick && onclick;

  return (
    <IonButton color={color} expand='block' shape='round' size={buttonSize} fill={buttonFill} disabled={disabledButton} className="button" onClick={handleOnClick}>{text}</IonButton>
  );
};

export default Button;
