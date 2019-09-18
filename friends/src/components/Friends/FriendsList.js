import React, { useEffect, useState, useContext } from 'react';
import { Card } from 'semantic-ui-react'

import { axiosWithAuth } from '../../utilites/axiosWithAuth';
import { FriendsContext } from '../../contexts/FriendContext';
import FriendCard from './FriendCard'

const FriendsList = () =>  {

    const [friendsList, setFriendsList] = useState([]);
    const [state, setState] = useContext(FriendsContext);

    console.log('STATE', state)

    useEffect(() => {
        // run action creator when the component mounts
        getData();
      }, [state]);
    
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
                    <FriendCard id={friend.id} key={friend.id} name={friend.name} age={friend.age} email={friend.email} setState={setState}/>
                ))}
            </Card.Group>
      </div>
    );
  
}
  export default FriendsList;