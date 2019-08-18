import { LOAD_REPOS_ACTION, START_LOAD_REPOS_ACTION, ERROR_LOAD_REPOS_ACTION } from '../../constants/repos';
import { reposReducer } from './repos-reducer';

const payload = ['111', '222'];

describe('reposReducer', () => {
  test(`${LOAD_REPOS_ACTION} toBeDefined`, () => {
    const state = {};
    const result = reposReducer(state, { type: LOAD_REPOS_ACTION, payload });

    expect(result).toBeDefined();
    expect(result).toHaveProperty('data');
    expect(result.data).toBeDefined();
  });

  test(`${LOAD_REPOS_ACTION} to match result`, () => {
    const state = {};
    const result = reposReducer(state, { type: LOAD_REPOS_ACTION, payload });

    expect(result.data).toBe(payload);
  });

  test(`${START_LOAD_REPOS_ACTION} toBeDefined`, () => {
    const state = {};
    const result = reposReducer(state, { type: START_LOAD_REPOS_ACTION, isLoading: true });

    expect(result).toBeDefined();
    expect(result).toHaveProperty('isLoading');
    expect(result.isLoading).toBeDefined();
  });

  test(`${START_LOAD_REPOS_ACTION} to match result`, () => {
    const state = {};
    const result = reposReducer(state, { type: START_LOAD_REPOS_ACTION, isLoading: true });

    expect(result.isLoading).toEqual(true);
  });

  test(`${ERROR_LOAD_REPOS_ACTION} toBeDefined`, () => {
    const state = {};
    const result = reposReducer(state, { type: ERROR_LOAD_REPOS_ACTION, withError: true });

    expect(result).toBeDefined();
    expect(result).toHaveProperty('withError');
    expect(result.withError).toBeDefined();
  });

  test(`${ERROR_LOAD_REPOS_ACTION} to match result`, () => {
    const state = {};
    const result = reposReducer(state, { type: ERROR_LOAD_REPOS_ACTION, withError: true });

    expect(result.withError).toEqual(true);
  });

  test(`to have a default result if unknown`, () => {
    const state = {};
    const result = reposReducer(state, { type: 'unknown' });

    expect(result).toBeDefined();
    expect(result).toBe(state);
  });
});
