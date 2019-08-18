import { LOAD_REPOS_ACTION, START_LOAD_REPOS_ACTION, ERROR_LOAD_REPOS_ACTION } from '../../constants/repos';

export const reposReducer = (state = {}, action) => {
  switch (action.type) {
    case START_LOAD_REPOS_ACTION:
      return {
        isLoading: true,
      };
    case LOAD_REPOS_ACTION:
      return {
        data: action.payload,
      };
    case ERROR_LOAD_REPOS_ACTION:
      return {
        withError: true,
      };
    default:
      return state;
  }
};
