import userProfile from './user.json'
import React from 'react';
import Statistics from 'components/Statistics/Statistics';

const Profile = ({username, tag, location, avatar, stats, children}) =>{



    return(

        <div class="profile">
        <div class="description">
        <img
          src={avatar || "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}
          alt="User avatar"
          className="avatar"
        />
          <p class="name">{username}</p>
          <p class="tag">{tag}</p>
          <p class="location">{location}</p>
        </div>

      </div>
    )
}

export default Profile