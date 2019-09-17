import React, { useEffect, useState } from 'react';
import { Card, Button } from 'semantic-ui-react'

import { axiosWithAuth } from '../../utilites/axiosWithAuth';


const FriendsList = () =>  {

    const [friendsList, setFriendsList] = useState([]);
    const [updateList, setUpdateList] = useState([]);

    const upd = () => {
        setUpdateList(updateList + 1)
    }


    useEffect(() => {
        // run action creator when the component mounts
        getData();
      }, [updateList]);
    
    const getData = () => {
        axiosWithAuth()
          .get('/friends')
          .then(res => {
              console.log("List of friends: ", res.data);
              setFriendsList(res.data);
          })
          .catch(err => console.log(err));
    };



    return (
      <div className="FriendList">
          <h2>
            Friends are here
          </h2>
            <Card.Group centered>
                {friendsList.map(friend => (
                    <Card key={friend.id}>
                        <Card.Content>
                            <Card.Header>{friend.name}</Card.Header>
                            <Card.Meta>Age: {friend.age}</Card.Meta>
                            <Card.Description>Email: {friend.email}</Card.Description>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>
            <Button secondary onClick={upd}>Refresh</Button>
      </div>
    );
  
}
  export default FriendsList;