import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import './HomePage.css';
import TextField from '../components/textField/TextField';

const HomePage: React.FC = () => {
  const textFieldConfig = [
    {
      type:'text',
      label: "ABC",
      errorText: "Fill out container",
      inputMode: 'text',
      placeholder: "DJSKJDHAKJ",
      required: true,
    },
    {
      type:'tel',
      label: "BCD",
      errorText: "Fill out container",
      inputMode: 'text',
      placeholder: "DJSKJDHAKJ",
      required: true,
    }
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        This is home page
        {textFieldConfig.map((textField, index) => (
          <TextField 
            key={index} 
            type={textField.type} 
            label={textField.label} 
            errorText={textField.errorText} 
            inputMode={textField.inputMode} 
            placeholder={textField.placeholder} 
            required={textField.required}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
