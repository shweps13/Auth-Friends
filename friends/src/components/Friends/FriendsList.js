import React from 'react';
import Loader from 'react-loader-spinner';

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
      <div>
          <h2>
            Friends are here
          </h2>
          
          {this.state.friendsList.map(friend => (
                  <div key={friend.id}>
                    <div>
                      <p>{friend.name}</p>
                    </div>
                    </div>
                ))}
      </div>
    );
  }
}
  export default FriendsList;