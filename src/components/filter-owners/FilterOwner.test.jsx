import React from 'react';
import { create } from 'react-test-renderer';
import FilterOwners from './FilterOwners';
import ReactDOM from 'react-dom';

describe('FilterOwners', () => {
  test('it matches the snapshot', () => {
    const component = create(<FilterOwners onChange={() => {}} value="test" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilterOwners onChange={() => {}} value="test" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
