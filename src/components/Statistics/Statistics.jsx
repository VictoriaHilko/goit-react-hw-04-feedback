import css from './Statistics.module.css';
import PropTypes from "prop-types";

export const Statistics = (({ good, neutral, bad, totalCount, positivePercentage }) => {
    return (
        <ul className={css.list}>
            <li className={css.listItems}>
                <span className={css.itemName}>Good:</span>
                <span>{good}</span>
            </li>
            <li className={css.listItems}>
                <span className={css.itemName}>Neutral:</span>
                <span>{neutral}</span>
            </li>
            <li className={css.listItems}>
                <span className={css.itemName}>Bad:</span>
                <span>{bad}</span>
            </li>
            <li className={css.listItems}>
                <span>Total:</span>
                <span className={css.stat}>{totalCount}</span>
            </li>
            <li className={css.listItems}>
                <span className={css.itemName}>Positive feedback:</span>
                <span className={css.stat}>{positivePercentage}%</span>
            </li>
        </ul>
    );
});

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };