import { connect } from 'react-redux';
import { reposCollectionAction } from '../../actions/repos';
import { WithLoadingIndicator } from '../hoc';

const mapStateToProps = state => {
  return {
    isLoading: state.repos.isLoading,
    reposList: state.repos && state.repos.data,
  };
};

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(reposCollectionAction()),
});

export default WrapperComponent => {
  const WrapperComponentWithLoadingIndicator = WithLoadingIndicator(WrapperComponent);

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WrapperComponentWithLoadingIndicator);
};
