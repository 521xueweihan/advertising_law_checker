import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    width: 400,
    opacity: 0.8,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 5
  }
});

class MainPage extends React.Component {
  static propTypes = {
    // State
    open: PropTypes.bool
  };

  render() {
    const { classes } = this.props;

    return (
      <Fade in={this.props.open}>
        <Card className={classes.card}>
          <CardContent>

          </CardContent>
        </Card>
      </Fade>
    );
  }
}

export default withStyles(styles)(MainPage);
