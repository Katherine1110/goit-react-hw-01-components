import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendsList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        // <li>
        <FriendListItem
          key={id}
          className={styles.item}
          isOnline={isOnline}
          avatar={avatar}
          id={id}
          name={name}
        />
        // </li>
      ))}
    </ul>
  );
};

export default FriendList;
