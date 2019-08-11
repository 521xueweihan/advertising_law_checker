import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import SettingIcon from 'mdi-material-ui/SettingsOutline';
import InfoIcon from 'mdi-material-ui/InformationOutline';
import ThemeIcon from 'mdi-material-ui/Palette';

const styles = theme => ({
  list: {
    width: 250,
    opacity: 0.9,
  }
});

class MainDrawer extends React.Component {
  static propTypes = {
    // State
    show: PropTypes.string,
    open: PropTypes.bool,
    // Dispatcher
    onToggleDialog: PropTypes.func,
    onToggleDrawer: PropTypes.func
  };

  render() {
    const { classes } = this.props;

    return (
      <Drawer
        open={this.props.open}
        onClose={this.props.onToggleDrawer}
      >
        <List className={classes.list}>
          <ListItem button onClick={() => this.props.onToggleDialog('setting')}>
            <ListItemIcon>
              <SettingIcon />
            </ListItemIcon>
            <ListItemText primary='设置' />
          </ListItem>
          <ListItem button onClick={() => this.props.onToggleDialog('about')}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary='关于' />
          </ListItem>
          <ListItem button onClick={() => this.props.onToggleDialog('theme')}>
            <ListItemIcon>
              <ThemeIcon />
            </ListItemIcon>
            <ListItemText primary='皮肤主题' />
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(MainDrawer);
