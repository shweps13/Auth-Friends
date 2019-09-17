import React, { useEffect, useState, useContext } from 'react';
import { Card, Button } from 'semantic-ui-react'

import { axiosWithAuth } from '../../utilites/axiosWithAuth';
import { FriendsContext } from '../../contexts/FriendContext'

const FriendsList = () =>  {

    const [friendsList, setFriendsList] = useState([]);
    const [state, setState] = useContext(FriendsContext);

    console.log('STATE', state)

    useEffect(() => {
        // run action creator when the component mounts
        getData();
      }, [state.currentStatus]);
    
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
      </div>
    );
  
}
  export default FriendsList;