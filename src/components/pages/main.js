import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { withStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    width: '90%',
    opacity: 0.8,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 5
  },
  textInput: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: 10
  },
  textOutput: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    margin: 10,
    padding: 10,
    textAlign: 'left'
  }
});

class MainPage extends React.Component {
  static propTypes = {
    // State
    open: PropTypes.bool,
    value: PropTypes.string,
    valueTranslated: PropTypes.string,
    // Dispatcher
    onChange: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    }
  }

  onChange = e => {
    this.setState({ value: e.target.value }, () => this.props.onChange(this.state.value));
  }

  render() {
    const { classes } = this.props;

    return (
      <Fade in={this.props.open}>
        <Card className={classes.card}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                label="输入检测文本"
                margin="dense"
                variant="outlined"
                multiline
                className={classes.textInput}
                value={this.state.value}
                onChange={this.onChange}
                />
              </Grid>
              <Grid item xs={6}>
                <Card className={classes.textOutput}>
                  <Typography variant="body1">{this.props.valueTranslated}</Typography>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Fade>
    );
  }
}

export default withStyles(styles)(MainPage);
