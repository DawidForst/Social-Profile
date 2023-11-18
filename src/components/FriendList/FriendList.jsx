import friendsData from "./friends.json"
import React from 'react';
import FriendListItem from "components/FriendListItem/FriendListItem";


const FriendList =({ friends}) =>{


return(
<div>
    
<FriendListItem test={friends}/>

</div>
   
)

}


export default FriendList;