import React from 'react';
import FriendListItem from '../Friends/FriendListItem/FriendListItem';
import styles from './FriendsList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={styles.item}>
          <FriendListItem
            isOnline={isOnline}
            avatar={avatar}
            id={id}
            name={name}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
