import React from 'react';
import { Card } from 'semantic-ui-react'

import { axiosWithAuth } from '../../utilites/axiosWithAuth';


class FriendsList extends React.Component  {
    state = {
        friendsList: []
      };
    
    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axiosWithAuth()
          .get('/friends')
          .then(res => {
              console.log("List of friends: ", res.data);
            this.setState({
                friendsList: res.data
            })
          })
          .catch(err => console.log(err));
    };


    render() {

    return (
      <div className="FriendList">
          <h2>
            Friends are here
          </h2>
            <Card.Group centered>
                {this.state.friendsList.map(friend => (
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
}
  export default FriendsList;