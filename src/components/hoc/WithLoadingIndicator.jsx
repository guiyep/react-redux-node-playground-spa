import React, { Fragment } from 'react';

export const WithLoadingIndicator = WrapperComponent => props => (
  <Fragment>
    {!props.data && props.isLoading && 'loading data...'}
    <WrapperComponent {...props} />
  </Fragment>
);
