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

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  content: {
    width: 400
  },
  text: {
    marginLeft: 20
  }
});

class Theme extends React.Component {
  static propTypes = {
    // State
    show: PropTypes.bool,
    // Dispatcher
    onClose: PropTypes.func,
    onChangePrimaryColor: PropTypes.func,
  };

  state = {
    selecting: 0
  };

  onChangeChoser = (e, n) => this.setState({ selecting: n });

  render() {
    const { classes } = this.props;

    return (
      <Dialog
        open={this.props.show}
        onClose={this.props.onClose}
        scroll='paper'
      >
        <DialogTitle>主题</DialogTitle>
        <DialogContent className={classes.content}>
          <Tabs
            value={this.state.selecting}
            onChange={this.onChangeChoser}
            indicatorColor='primary'
            textColor='primary'
            variant='fullWidth'
          >
            <Tab label='主色' />
            <Tab label='副色' />
          </Tabs>
          <List>
            {
              [
                {
                  color: '#39c',
                  name: "蓝"
                }].map(n => {
                  let onClick, selecting;
                  switch(this.state.selecting) {
                    case 0:
                      onClick = () => this.props.onChangePrimaryColor(n.color);
                      selecting = this.props.color.primary === n.color;
                      break;
                    case 1:
                      onClick = () => this.props.onChangeSecondaryColor(n.color);
                      selecting = this.props.color.secondary === n.color;
                      break;
                    default:
                      throw new Error('未知的标签页');
                  }

                  return (<ListItem
                    button 
                    onClick={onClick}
                    key={n.color}
                  >
                    <Avatar style={{ backgroundColor: n.color }} />
                    <ListItemText className={classes.text} primary={n.name} secondary={selecting ? "已选中" : ""} />
                  </ListItem>);
                })
              }
          </List>
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

export default withStyles(styles)(Theme);