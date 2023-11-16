import friendsData from "./friends.json"
import React from 'react';


const FriendList =({friends, children}) =>{

    console.log({friendsData})


return(

    <div>
     <ul>
        {friends.map((friend, i)=>(
            
            <li>
                <div key={friend[i]}></div>
                <img src={friend.avatar}></img>
                <p>is online: {friend.isOnline}</p>
                {friend.name}
            </li>



))}

</ul>
    </div>
)

}


export default FriendList;