import { connect } from 'react-redux'

import Setting from '../../components/dialog/setting';

const mapStateToProps = (state) => {
  return {
    ...state.views.theme,
    show: state.views.dialog.show === 'setting'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClose: () => dispatch({
    type: 'views.dialog.reset'
  })
  ,
  onToggleNativeMode: () => dispatch({
    type: 'views.theme.toggleNative'
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);