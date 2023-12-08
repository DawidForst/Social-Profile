import React from "react";
import css from "./FriendListItem.module.css"

const FriendListItem = ({friendsList}) =>{

return(

    <div>



 {friendsList.map((friend,i)=>{
    //  console.log(i);
     return(
        
        <li className={css.item} 
            key={i} >
            <span className={`${css.status} ${!friend.isOnline ? css.offline : css.status }`}>{friend.isOnline}</span>

            
            <img className={css.avatar} src={friend.avatar}  alt="User avatar" />
            <p className={css.name}> {friend.name}</p>
        </li>
     );
 })}

</div>



)}


export default FriendListItem