import { connect } from 'react-redux'

import Fab from '../../components/views/fab';

const mapStateToProps = (state) => {
  return {
    ...state.views.drawer
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onToggleDrawer: () => dispatch({
    type: 'views.drawer.toggleDrawer'
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fab);