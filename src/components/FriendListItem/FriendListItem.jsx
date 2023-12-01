import React from "react";

const FriendListItem = ({test}) =>{

return(

    <div>

<ul>

 {test.map((friend,i)=>{
    //  console.log(i);
     return(
        <li key={i} ><img src={friend.avatar}
                        alt=""
        />
           
                    <p> {friend.name}</p>
        </li>
     );
 })}
</ul>
</div>



)}


export default FriendListItem