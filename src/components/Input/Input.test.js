import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory } from '../../../test/testUtils';
import Input from './Input';

/**
 * Factory function to create a ShallowWrapper for the Input component.
 * @function setup
 * @param {object} initialState - Initial state of this setup.
 * @param {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />);
  console.log(wrapper.debug());
};

setup();

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {});
    test('renders input box', () => {});
    test('renders submit button', () => {});
  });
  describe('word has been guessed', () => {
    test('renders component without error', () => {});
    test('does not renders input box', () => {});
    test('does not renders submit button', () => {});
  });
});

describe('update state', () => {});
