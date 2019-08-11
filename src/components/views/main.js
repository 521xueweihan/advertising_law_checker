import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';

import AboutDialog from '../../containers/dialog/about';
import ThemeDialog from '../../containers/dialog/theme';
import SettingDialog from '../../containers/dialog/setting';

import MainPage from '../../containers/pages/main';

import Fab from '../../containers/views/fab';
import Drawer from '../../containers/views/drawer';

const styles = theme => ({
  main: {
    height: '100%',
    width: '100%',
    marginLeft: "auto",
    marginRight: "auto",
    position: 'relative'
  }
});

class Main extends React.Component {
  static propTypes = {
    theme: PropTypes.object
  };

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={this.props.theme}>
        {/* Dialogs */}
        <AboutDialog />
        <ThemeDialog />
        <SettingDialog />
        {/* Views*/}
        <Fab />
        <Drawer />
        {/* Pages */}
        <div className={classes.main}>
          <MainPage />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(Main);
