import React from 'react';
// import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (<table className={styles.transactionHistory}>
    <thead className={styles.thead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody className={styles.tbody}>
      {items.map(({ amount, currency, id, type }) => (
        <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
      ))}
      
    </tbody>
  </table>)}

export default TransactionHistory;