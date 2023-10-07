import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, handleClick }) => {

    const optionsKey = Object.keys(options);

    return (
            <ul className={css.container}>
                {optionsKey.map((option, index) => {
                    const label = option.charAt(0).toUpperCase() + option.slice(1);

                    return (
                        <li key={index}>
                            <button type="button" className={css.feedbackButton} onClick={() => handleClick(option)}>
                                {label}
                            </button>
                        </li>
                    );
                })}
            </ul>
    );
};


