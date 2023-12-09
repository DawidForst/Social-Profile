import React from 'react';
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import userProfile from "./Profile/user.json"
import FriendList from "./FriendList/FriendList";
import friendsData from "./FriendList/friends.json"
import TransactionHistory from './TransactionHistory/TransactionHistory';
import TransactionData from './TransactionHistory/transactions.json'

export const App = (username, tag, avatar, stats, location) => {

  return (
    <div>
     
    <Profile  
      username={userProfile.username} 
      tag={userProfile.tag}
      location={userProfile.location}
      avatar={userProfile.avatar}
      stats={userProfile.stats}
      >
        <Statistics 
          title="UPLOAD STATS"
          
        />
        <FriendList friends={friendsData}/>
<TransactionHistory transacions={TransactionData}/>
    </Profile>
  
  

    </div>


  );
};
