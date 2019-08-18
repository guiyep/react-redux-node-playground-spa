import React from 'react';
import { create } from 'react-test-renderer';
import ReposList from './ReposList';
import ReactDOM from 'react-dom';

const list = [
  {
    name: 'react',
    owner: 'afishlee0',
    languages: ['Scala', 'C#'],
  },
  {
    name: 'webpack',
    owner: 'kwenger5',
    languages: ['Scala'],
  },
  {
    name: 'angular',
    owner: 'shonnan1',
    languages: ['Scala'],
  },
];

describe('ReposList', () => {
  test('it matches the snapshot 1', () => {
    const component = create(<ReposList list={list} columns={['name', 'owner', 'languages']} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('it matches the snapshot 2', () => {
    const component = create(<ReposList list={list} columns={['name', 'languages']} groupBy="owner"/>);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('ReposList renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReposList list={list} columns={['name', 'owner', 'languages']} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('ReposList with group renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReposList list={list} columns={['name', 'languages']} groupBy="owner"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});

