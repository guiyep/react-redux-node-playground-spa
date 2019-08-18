import { LOAD_REPOS_ACTION, START_LOAD_REPOS_ACTION, ERROR_LOAD_REPOS_ACTION } from '../../constants/repos';

export const uniqueIdentifier = 'repos-local-storage';

export const reposCollectionAction = () => async (dispatch, getState, localStorage = window.localStorage) => {
  try {
    const state = getState();
    if (state.data) {
      return;
    }

    const savedData = localStorage.getItem(uniqueIdentifier);
    if (savedData) {
      dispatch({
        type: LOAD_REPOS_ACTION,
        payload: JSON.parse(savedData),
      });
      
    } else {
      dispatch({
        type: START_LOAD_REPOS_ACTION,
      });

      const response = await fetch('/api/repos', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status !== 200) {
        dispatch({
          type: ERROR_LOAD_REPOS_ACTION,
        });

        return;
      }

      const { repositories } = await response.json();
      localStorage.setItem(uniqueIdentifier, JSON.stringify(repositories));

      dispatch({
        type: LOAD_REPOS_ACTION,
        payload: repositories,
      });

      return;
    }
  } catch (ex) {
    dispatch({
      type: ERROR_LOAD_REPOS_ACTION,
    });

    return ex;
  }
};
