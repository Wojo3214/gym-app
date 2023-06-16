import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { barbell, person, home } from 'ionicons/icons';
import HomePage from './pages/HomePage';
import TrainingPage from './pages/TrainingPage';
import ProfilePage from './pages/ProfilePage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/homePage">
            <HomePage />
          </Route>
          <Route exact path="/trainingPage">
            <TrainingPage />
          </Route>
          <Route path="/profilePage">
            <ProfilePage />
          </Route>
          <Route exact path="/">
            <Redirect to="/homePage" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="HomePage" href="/homePage">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>HomePage</IonLabel>
          </IonTabButton>
          <IonTabButton tab="TrainingPage" href="/trainingPage">
            <IonIcon aria-hidden="true" icon={barbell} />
            <IonLabel>Training list</IonLabel>
          </IonTabButton>
          <IonTabButton tab="ProfilePage" href="/profilePage">
            <IonIcon aria-hidden="true" icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
