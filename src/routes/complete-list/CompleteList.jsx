import React, { memo, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ReposList } from '../../components/repos-list';
import { ReposContainer } from '../../components/repos-container';
import { FilterOwners } from '../../components/filter-owners';
import { CompleteList_container, CompleteList_filters, CompleteList_list } from './CompleteList.module.css';
import queryString from 'query-string';

const filterByOwnerText = 'owner';

const columns = ['name', 'owner', 'languages'];

const CompleteList = memo(({ reposList, onLoad, location, history }) => {
  const onOwnerTextChanged = useCallback(
    e => {
      const currentOwner = e.target.value;
      if (!currentOwner) {
        history.push(`#`);
      } else {
        history.push(`?${filterByOwnerText}=${e.target.value}`);
      }
    },
    [history],
  );

  const queryStringObject = queryString.parse(location.search);
  const searchByOwner = queryStringObject[filterByOwnerText];

  const repos = useMemo(() => {
    // filter and map at the same time
    return reposList.reduce((acc, repo) => {
      const hasValue =
        searchByOwner && searchByOwner.length > 0 ? repo.owner && repo.owner.includes(searchByOwner) : true;
      if (hasValue) {
        acc.push({ ...repo, languages: repo.languages.join(', ') });
      }
      return acc;
    }, []);
  }, [reposList, searchByOwner]);

  return (
    <div className={CompleteList_container}>
      <div className={CompleteList_filters}>
        <FilterOwners onChange={onOwnerTextChanged} value={searchByOwner} />
      </div>
      <div className={CompleteList_list}>
        <ReposList list={repos} onLoad={onLoad} columns={columns} />
      </div>
    </div>
  );
});

CompleteList.displayName = 'CompleteList';

CompleteList.propTypes = {
  reposList: PropTypes.arrayOf(PropTypes.object),
};

CompleteList.defaultProps = {
  reposList: [],
};

export default ReposContainer(CompleteList);
