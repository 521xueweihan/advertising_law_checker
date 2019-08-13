import { connect } from 'react-redux'

import State from '../../components/dialog/state';

const mapStateToProps = (state) => {
  return {
    show: state.views.dialog.show === 'state',
    rows: state.pages.main.wordState
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClose: () => dispatch({
    type: 'views.dialog.reset'
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(State);