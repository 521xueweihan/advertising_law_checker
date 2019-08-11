import { connect } from 'react-redux'

import Main from '../../components/pages/main';

const mapStateToProps = (state) => {
  return {
    open: state.views.drawer.show === ''
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);