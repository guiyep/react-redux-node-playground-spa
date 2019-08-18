import React, { memo, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ReposList } from '../../components/repos-list';
import { ReposContainer } from '../../components/repos-container';
import { FilterLangs } from '../../components/filter-langs';
import { UsersList_container, UsersList_filters, UsersList_list } from './UsersList.module.css';
import queryString from 'query-string';

const filterByLangText = 'language';

const reservedWords = {
  'C#': 'Csharp',
  'C++': 'Cplusplus',
  Cplusplus: 'C++',
  Csharp: 'C#',
};

const columns = ['name', 'languages'];

const fixReservedWord = lang => (lang && reservedWords[lang]) || lang;

const UsersList = memo(({ reposList, onLoad, location, history }) => {
  const onLangTextChanged = useCallback(
    lang => {
      history.push(`?${filterByLangText}=${fixReservedWord(lang)}`);
    },
    [history],
  );

  const queryStringObject = queryString.parse(location.search);
  const searchByLang = fixReservedWord(queryStringObject[filterByLangText]);

  const repos = useMemo(() => {
    // filter and map at the same time
    return reposList.reduce((acc, repo) => {
      const hasValue =
        searchByLang && searchByLang.length > 0 ? repo.languages && repo.languages.includes(searchByLang) : true;
      if (hasValue) {
        acc.push({ ...repo, languages: repo.languages.join(', ') });
      }
      return acc;
    }, []);
  }, [reposList, searchByLang]);

  const langOptions = useMemo(
    () =>
      Object.keys(
        reposList.reduce((acc, { languages }) => {
          languages.forEach(lang => {
            acc[lang] = true;
          });

          return acc;
        }, {}),
      ),
    [reposList],
  );

  return (
    <div className={UsersList_container}>
      <div className={UsersList_filters}>
        <FilterLangs defaultSelection={searchByLang} options={langOptions} onChange={onLangTextChanged} />
      </div>
      <div className={UsersList_list}>
        <ReposList list={repos} onLoad={onLoad} groupBy="owner" columns={columns} />
      </div>
    </div>
  );
});

UsersList.displayName = 'UsersList';

UsersList.propTypes = {
  reposList: PropTypes.array,
};

UsersList.defaultProps = {
  reposList: [],
};

export default ReposContainer(UsersList);
