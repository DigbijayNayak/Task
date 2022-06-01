import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { eye } from 'ionicons/icons';

const Home: React.FC = () => {
  const [text, setText] = useState<string>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='#b4ebf0'>
          <IonTitle color=''>MyFirst App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard class="container card" color='#b4ebf0'>
          <IonCardHeader>
            <IonCardTitle color='dark'>Administration Login</IonCardTitle>
            <IonText>Please enter your admin credentials to gain access</IonText>
          </IonCardHeader>

          <IonCardContent>
            <IonItem class='box' id='detail'>
              <IonInput value={text} placeholder="Enter Name" id='input'></IonInput>
            </IonItem>
            
            <IonItem class='box' id='detail'>
              <IonInput value={text} placeholder="Password" id='input'></IonInput>
              <IonIcon slot='end' icon={eye}></IonIcon>
            </IonItem>

            <IonButton color="tertiary" class='log' shape="round" id='detail'>LogIn</IonButton>

            <p id='detail'>
            <IonText><a href="#">Forget Password?</a></IonText>
            </p>
            <p id='detail'>
            <IonText>New to Indigo? <a href="#">Register Here</a></IonText>
            </p>
          </IonCardContent>
        </IonCard>       
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
