import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
  const guessedWordsRows = guessedWords.map((word) => (
    <tr key={word.guessedWord} data-test='guessed-word'>
      <td>{word.guessedWord}</td>
      <td>{word.letterMatchCount}</td>
    </tr>
  ));
  return (
    <div data-test='component-guessed-words'>
      {guessedWords && guessedWords.length === 0 && (
        <span data-test='guess-instructions'>
          Try to guess the secret word!
        </span>
      )}
      {guessedWords && guessedWords.length > 0 && (
        <div data-test='guessed-words'>
          <h3>Guessed Words</h3>
          <table>
            <thead>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>{guessedWordsRows}</tbody>
          </table>
        </div>
      )}
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ),
};

export default GuessedWords;
