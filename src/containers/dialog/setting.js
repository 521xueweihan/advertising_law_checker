import { connect } from 'react-redux'

import Setting from '../../components/dialog/setting';

const mapStateToProps = (state) => {
  return {
    ...state.views.theme,
    show: state.views.dialog.show === 'setting',
    words: state.pages.main.words.reduce((prev, next) => prev + '\n' + next)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClose: () => (dispatch({
    type: 'views.dialog.reset'
  }),dispatch({
    type: 'pages.main.changeValue'
  })),
  onToggleNativeMode: () => dispatch({
    type: 'views.theme.toggleNative'
  }),
  onChangeWords: (str) => dispatch({
    type: 'pages.main.changeWords',
    words: str.split('\n')
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);