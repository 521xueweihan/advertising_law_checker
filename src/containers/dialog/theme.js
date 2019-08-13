import { connect } from 'react-redux'

import Theme from '../../components/dialog/theme';

const mapStateToProps = (state) => {
  return {
    ...state.views.theme,
    show: state.views.dialog.show === 'theme'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClose: () => dispatch({
    type: 'views.dialog.reset'
  }),
  onChangePrimaryColor: (color) => dispatch({
    type: 'views.theme.color.changePrimary',
    color
  }),
  onChangeSecondaryColor: (color) => dispatch({
    type: 'views.theme.color.changeSecondary',
    color
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Theme);