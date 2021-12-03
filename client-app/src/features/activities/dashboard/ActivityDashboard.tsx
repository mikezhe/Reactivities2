import React from 'react';
import { Grid } from 'semantic-ui-react';

import ActivityDetails from '../details/ActivityDetails';
import ActivityList from './ActivityList';
import ActivityForm from '../form/ActivityForm';
import { useStore } from '../../../app/stores/store';
import { observer } from 'mobx-react-lite';


export default  observer ( function ActivityDashboard( ){
      // console.log('sel' +selectedActivity)
      const {activityStore} = useStore();
      const {selectedActivity,editMode} = activityStore;
    return (
      
        <Grid>
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                {
                    <ActivityDetails  />}
                        {editMode && 
                <ActivityForm 
                
              
               
                />}
            </Grid.Column>
        </Grid>
    )
})
