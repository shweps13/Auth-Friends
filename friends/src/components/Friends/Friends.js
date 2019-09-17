import React, { useState } from 'react';

import FriendsList from './FriendsList'
import FriendsForm from './FriendsForm'
import { FriendsContext } from '../../contexts/FriendContext'

function Friends() {
  const [state, setState] = useState({
    currentStatus: null,
    currentList: []
  });

  return (
    <FriendsContext.Provider value={[state, setState]}>
      <div>
          <FriendsForm />
          <FriendsList />
      </div>
    </FriendsContext.Provider>
  );
}

export default Friends;
