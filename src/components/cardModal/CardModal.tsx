import React, { useState, useRef, useEffect } from 'react';
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonList,
  IonBackdrop,
  IonFooter
} from '@ionic/react';
import ExerciseItem from '../exerciseItem/ExerciseItem';

interface CardModalProps {
  title: string;
  content: React.ReactNode;
  currentPage: HTMLElement | null;
}

const CardModal: React.FC<CardModalProps> = ({ title, content, currentPage }) => {
  
  const modal = useRef<HTMLIonModalElement>(null);

  function dismiss() {
    modal.current?.dismiss();
  }

  return (
    <>
      <IonModal ref={modal} trigger="open-modal" presentingElement={currentPage!} className='card-modal'>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{title}</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => dismiss()}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          {content}
        </IonContent>
        <IonFooter>
          <IonToolbar className='abc'>
            <IonButton fill="solid" expand="full" shape='round'>
                Next
            </IonButton>
          </IonToolbar>
        </IonFooter>
      </IonModal>
    </>
  );
}

export default CardModal;