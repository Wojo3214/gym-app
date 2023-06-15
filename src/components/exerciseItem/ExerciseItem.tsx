import React from 'react';
import { 
  IonItem, 
  IonLabel, 
  IonItemOptions,
  IonItemOption,
  IonItemSliding,
  IonIcon
} from '@ionic/react';
import { create, trash } from 'ionicons/icons';
import './ExerciseItem.css';

interface ExerciseProps {
  title: string;
  preps: number;
  sets: number;
}

const ExerciseItem: React.FC<ExerciseProps> = ({ title, preps, sets }) => {
  return (
    <>
    <IonItemSliding className='item-sliding'>
      <IonItem button detail={false} lines="none" className='exercise-item'>
        <IonLabel>
            <h2>{title}</h2>
            <p>{sets} sets - {preps} preps</p>
        </IonLabel>
      </IonItem>
      <IonItemOptions>
        <IonItemOption className="item-option">
          <IonIcon slot="icon-only" icon={create}></IonIcon>
        </IonItemOption>
        <IonItemOption color="danger" className="item-option">
          <IonIcon slot="icon-only" icon={trash}></IonIcon>
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
    </>
  );
};

export default ExerciseItem;
