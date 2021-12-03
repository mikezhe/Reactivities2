import React, { useEffect } from 'react';
import NavBar from './NavBar';


import {  Container } from 'semantic-ui-react';

import LoadingComponent from './LoadingComponent';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'


import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../stores/activityStore';

function App() {

const {activityStore} = useStore();


  useEffect(() => {

activityStore.loadActivities();

  }, [activityStore])






 if (activityStore.loadInitial)  return <LoadingComponent  content='Loading app'/>

  return (
    <>


      <NavBar />

      <Container style={{ marginTop: '7em' }}>


        <ActivityDashboard />
      </Container>




    </>
  );
}

export default observer(App);
