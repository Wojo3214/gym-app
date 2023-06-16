import React from 'react';
import { 
  IonInput,
  IonItem
} from '@ionic/react';
import './TextField.css';

interface TextFieldProps {
  //Possible options: 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week'
  type: any;
  label: string;
  errorText: string;
  //Possible options: 'text' | 'none' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'
  inputMode: any;
  placeholder: string;
  required?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({ type, label, errorText, inputMode, placeholder, required }) => {

  return (
    <IonItem lines='none'>
      <IonInput type={type} label={label} labelPlacement="floating" errorText={errorText} inputMode={inputMode} placeholder={placeholder} required={required}></IonInput>
    </IonItem>
  );
};

export default TextField;
