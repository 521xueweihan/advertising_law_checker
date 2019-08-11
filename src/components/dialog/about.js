import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  textAlignRight: {
    textAlign: 'right'
  }
});

class About extends React.Component {
  static propTypes = {
    // State
    show: PropTypes.bool,
    // Dispatcher
    onClose: PropTypes.func
  }

  render() {
    const { classes } = this.props;

    return (
      <Dialog
        open={this.props.show}
        onClose={this.props.onClose}
        scroll='paper'
      >
        <DialogTitle>关于</DialogTitle>
        <DialogContent>
          <Typography paragraph variant='body1'>
            检测违反最新广告法工具。还处于前期研发阶段。
          </Typography>
          <Button variant='contained' onClick={() => window.open('https://github.com/521xueweihan/advertising_law_checker')}>
            该软件的开源地址
          </Button>
          <Typography paragraph variant='body1'>
            (https://github.com/521xueweihan/advertising_law_checker)
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color='primary'>
            {'确定'}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(About);