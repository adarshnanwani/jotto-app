import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is false.)
 */
const Congrats = ({ success }) => {
  return success ? (
    <div data-test='component-congrats'>
      <span data-test='congrats-message'>
        Congratulation! You guessed the word!
      </span>
    </div>
  ) : (
    <div data-test='component-congrats'></div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
