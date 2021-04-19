import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem'
import styles from './FriendsList.module.css'

const FriendList = ({ friends }) => {
    return <ul className={styles.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
            <li key={id} className={styles.item}>
                <FriendListItem
                    isOnline={isOnline}
                    avatar={avatar}
                    id={id}
                    name={name}
                />
        {/* <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p> */}
    </li>
        ))}
</ul>

}

export default FriendList;