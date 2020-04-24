import React, { Component } from 'react';
import { connect } from 'react-redux';
import GuessedWords from './components/GuessedWords/GuessedWords';
import Congrats from './components/Congrats/Congrats';
import Input from './components/Input/Input';
import { getSecretWord } from './actions/';
import './App.css';

class App extends Component {
  render() {
    const { success, guessedWords } = this.props;
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input success={success} />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}
const mapStateToProps = ({ guessedWords, success, secretWord }) => ({
  guessedWords,
  success,
  secretWord,
});
export default connect(mapStateToProps, { getSecretWord })(App);
