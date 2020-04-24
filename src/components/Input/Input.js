import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../actions';

export class UnconnectedInput extends Component {
  state = {
    currentGuess: '',
  };
  handleChange = (e) => {
    this.setState({ currentGuess: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { currentGuess } = this.state;
    if (currentGuess && currentGuess.length > 0) {
      this.props.guessWord(currentGuess);
    }
  };
  render() {
    const contents = this.props.success ? null : (
      <form className='form-inline'>
        <input
          type='text'
          data-test='input-box'
          className='mb-2 mx-sm-3'
          placeholder='Enter guess'
          onChange={this.handleChange}
          value={this.state.currentGuess}
        />
        <input
          type='submit'
          value='Submit'
          data-test='submit-button'
          onClick={this.handleSubmit}
          className='btn btn-primary'
        />
      </form>
    );
    return <div data-test='component-input'>{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => ({
  success,
});

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
