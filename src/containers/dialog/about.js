import { connect } from 'react-redux'

import About from '../../components/dialog/about';

const mapStateToProps = (state) => {
  return {
    show: state.views.dialog.show === 'about'
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
)(About);