import React, { memo, useEffect, useMemo, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  ReposList_container,
  ReposList_row,
  ReposList_cell,
  ReposList_header,
  ReposList_group_by,
} from './ReposList.module.css';

const buildHeader = columns => (
  <div className={ReposList_header}>
    {columns.map((columnName, index) => (
      <div key={index} className={ReposList_cell}>
        {`${columnName.charAt(0).toUpperCase()}${columnName.slice(1)}`}
      </div>
    ))}
  </div>
);

const buildRows = (columns, list) => (
  <Fragment>
    {(list &&
      list.length > 0 &&
      list.map((item, rowIndex) => (
        <div className={ReposList_row} key={rowIndex}>
          {columns.map((columnName, columnIndex) => (
            <div key={columnIndex} className={ReposList_cell}>
              {item[columnName]}
            </div>
          ))}
        </div>
      ))) || <div className={ReposList_row}>No Items to display</div>}
  </Fragment>
);

const ReposList = memo(({ list, onLoad, groupBy, columns }) => {
  useEffect(() => {
    onLoad();
  }, [onLoad]);

  const currentList = useMemo(() => {
    if (groupBy) {
      return Object.values(
        list.reduce((acc, item) => {
          const groupByValue = item[groupBy] || 'Not defined';

          if (!acc[groupByValue]) {
            acc[groupByValue] = {
              groupBy: item[groupBy],
              list: list.filter(listItem => item[groupBy] === listItem[groupBy]),
            };
          }
          return acc;
        }, {}),
      );
    }
    return list;
  }, [list, groupBy]);

  // break component soon
  if (columns && columns.length === 0) {
    return null;
  }

  return (
    <div className={ReposList_container}>
      {!!groupBy && (
        <Fragment>
          {(currentList &&
            currentList.length > 0 &&
            currentList.map((currentItem, index) => (
              <Fragment key={index}>
                <div className={ReposList_group_by}>{currentItem.groupBy}</div>
                {buildHeader(columns)}
                {buildRows(columns, currentItem.list)}
              </Fragment>
            ))) || <div className={ReposList_row}>No Items to display</div>}
        </Fragment>
      )}
      {!groupBy && (
        <Fragment>
          {buildHeader(columns)}
          {buildRows(columns, currentList)}
        </Fragment>
      )}
    </div>
  );
});

ReposList.displayName = 'ReposList';

ReposList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  onLoad: PropTypes.func,
  groupBy: PropTypes.string,
  columns: PropTypes.PropTypes.arrayOf(PropTypes.string).isRequired,
};

ReposList.defaultProps = {
  list: [],
  onLoad: () => {},
  groupBy: undefined,
};

export default ReposList;
