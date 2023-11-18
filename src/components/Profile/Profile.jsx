import userProfile from './user.json'
import React from 'react';
import css from "./Profile.module.css"

const Profile = ({username, tag, location, avatar, stats, children}) =>{



    return(

        <div className={css.profile}>
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