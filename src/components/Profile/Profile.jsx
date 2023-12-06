// import userProfile from './user.json'
import React from 'react';
import css from "./Profile.module.css"

const Profile = ({username, tag, location, avatar, stats, children}) =>{



    return(

      <div className={css.profile}>
        
      <div className={css.description}>
          <div className={css.avatar_container}>
            <img
              src={avatar || "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"}
              alt="User avatar"
              className={css.avatar}
            />
         </div>
          <p className={css.name}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>

          <ul className={css.stats}>
              <li>
                <p className={css.label}> Followers </p>
                <p className={css.quantity}>{stats.followers}</p>
              </li>
              <li>
                <p className={css.label}>Views</p>
                <p className={css.quantity}> {stats.views}</p>
               </li>
              <li>
                <p className={css.label}>Likes </p>
                <p className={css.quantity}>{stats.likes}</p>
              </li>



          </ul>
         
          {children}
        </div>



      </div>
    )
}

export default Profile