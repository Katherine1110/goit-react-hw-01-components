import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function randomColor() {
  return ( '#' + Math.floor(Math.random() * 16777215).toString(16)); 
} 
// console.log(randomColor)

const Statistics = ({ title, stats }) => {
    return <section className={styles.statistics}>
        {title && <h2 className="title">{title}</h2>}
    <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
            <li key={id}
                className={styles.item}
                style={{ backgroundColor: randomColor() }}>
            <span className="label">{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
            </li>
        ))}
    </ul>
</section>
}

Statistics.defaultProps = {
    title: undefined
}

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string
}

export default Statistics;