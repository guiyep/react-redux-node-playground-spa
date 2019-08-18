import React from 'react';
import { create } from 'react-test-renderer';
import FilterLangs from './FilterLangs';
import ReactDOM from 'react-dom';

const options = ['test', '1', '2', '3'];

describe('FilterLangs', () => {
  test('it matches the snapshot', () => {
    const component = create(<FilterLangs options={options} onChange={() => {}} defaultSelection="test" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FilterLangs options={options} onChange={() => {}} defaultSelection="test" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
