import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from '../../actions';

class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
      <form className='form-inline'>
        <input
          type='text'
          data-test='input-box'
          className='mb-2 mx-sm-3'
          placeholder='Enter guess'
        />
        <input
          type='submit'
          value='Submit'
          data-test='submit-button'
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

export default connect(mapStateToProps, { guessWord })(Input);
