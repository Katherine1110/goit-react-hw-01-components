import React from 'react';
// import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

// const colors = {
//     online:
// }

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      {isOnline ? (
        <span className={styles.status}>{isOnline}online</span>
      ) : (
        <span className={styles.offline}>{isOnline}offline</span>
      )}
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p class={styles.name}>{name}</p>
    </>
  );
};

export default FriendListItem;
