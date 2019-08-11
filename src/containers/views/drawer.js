import { connect } from 'react-redux'

import Drawer from '../../components/views/drawer';

const mapStateToProps = (state) => {
  return {
    ...state.views.drawer
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onToggleDialog: (name) => dispatch({
    type: 'views.drawer.toggleDialog',
    name
  }),
  onToggleDrawer: () => dispatch({
    type: 'views.drawer.toggleDrawer',
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drawer);