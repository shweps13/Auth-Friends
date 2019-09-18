import React, { useContext } from 'react';
import { Card, Button } from 'semantic-ui-react'

import { FriendsContext } from '../../contexts/FriendContext';
import { axiosWithAuth } from '../../utilites/axiosWithAuth';

const FriendCard = (props) =>  {
    const [state, setState] = useContext(FriendsContext);

    const deleteFriend = () => {
        axiosWithAuth()
          .delete(`/friends/${props.id}`)
          .then(res => {
              console.log(`Friend with id ${props.id} deleted`);
              setState(res.data)
          })
          .catch(err => console.log(err));
    };


    return (

    <Card>
        <Card.Content>
            <Card.Header>{props.name}</Card.Header>
            <Card.Meta>Age: {props.age}</Card.Meta>
            <Card.Description>Email: {props.email}</Card.Description>
        </Card.Content>
        <Button onClick={deleteFriend} >Delete</Button>
    </Card>
    );


}

export default FriendCard;