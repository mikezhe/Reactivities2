import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header , List} from 'semantic-ui-react';


interface ServerData {
  Id : string
  Title: string,
  Description: string,
  Date: Date,
   Category  :string ,
   City : string,
 Venue: string
}
function App() {


const [activities,setActivities] = useState<ServerData[]>();
useEffect(() => {
  axios.get<ServerData[]>('http://localhost:5000/api/activities').then(response => {
    console.log(response);
   
    setActivities(response.data);
  })
},[])

  return (
    <div>
      <Header as ='h2' icon='users' content='Reactivities'/>

  
      <List>
      {activities?.map(function (activity: any) {
            return (
              <List.Item key={activity.id}>
                {activity.title}
              </List.Item>
            );
          })}
      </List>
        
     
        
     
    </div>
  );
}

export default App;
