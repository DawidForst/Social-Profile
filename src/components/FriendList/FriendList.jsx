import React from 'react';
import FriendListItem from "components/FriendListItem/FriendListItem";
import css from "./FriendList.module.css"



const FriendList =({ friends}) =>{


return(
<div>
<ul className={css.friend_list}>
<FriendListItem friendsList={friends}/>
</ul>
</div>
   
)

}


export default FriendList;