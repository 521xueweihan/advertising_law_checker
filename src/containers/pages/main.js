import { connect } from 'react-redux'

import Main from '../../components/pages/main';

const mapStateToProps = (state) => {
  return {
    open: state.views.drawer.show === '',
    value: state.pages.main.value
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChange: (value) => dispatch({
    type: 'pages.main.changeValue',
    value
  })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);