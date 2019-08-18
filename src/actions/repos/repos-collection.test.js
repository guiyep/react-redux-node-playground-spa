import { reposCollectionAction } from './repos-collection';
import { LOAD_REPOS_ACTION, START_LOAD_REPOS_ACTION } from '../../constants/repos';

describe('reposCollectionAction', () => {
  it('return if was already loaded', async () => {
    const dispatch = jest.fn();

    const getState = () => ({
      data: [],
    });

    const result = await reposCollectionAction()(dispatch, getState);

    expect(result).toBeUndefined();
  });

  it('to get local storage value', () => {
    const dispatch = jest.fn();
    const getItem = jest.fn();
    const getState = () => ({});

    const localStorage = {
      getItem,
    };

    reposCollectionAction()(dispatch, getState, localStorage);

    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it(`to get local storage value and dispatch ${LOAD_REPOS_ACTION} with storage value`, () => {
    const mockValue = JSON.stringify({});
    const dispatch = jest.fn();
    const getItem = () => mockValue;
    const getState = () => ({});

    const localStorage = {
      getItem,
    };

    reposCollectionAction()(dispatch, getState, localStorage);
    expect(dispatch).toBeCalledWith({ type: LOAD_REPOS_ACTION, payload: JSON.parse(mockValue) });
  });

  it(`to dispatch ${START_LOAD_REPOS_ACTION} when there is not data in local storage`, () => {
    const dispatch = jest.fn();
    const getItem = () => undefined;
    const getState = () => ({});

    const localStorage = {
      getItem,
    };

    reposCollectionAction()(dispatch, getState, localStorage);
    expect(dispatch).toBeCalledWith({ type: START_LOAD_REPOS_ACTION });
  });

  it(`to dispatch ${START_LOAD_REPOS_ACTION} and then fetch data using fetch`, () => {
    const dispatch = jest.fn();
    const getItem = () => undefined;
    const getState = () => ({});

    const localStorage = {
      getItem,
    };

    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    reposCollectionAction()(dispatch, getState, localStorage);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/repos', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  // TO BE CONTINUE :)
});
