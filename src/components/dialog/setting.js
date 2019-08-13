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

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  content: {
    width: 400
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 150,
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  textInput: {
    width: '100%'
  },
});

class Setting extends React.Component {
  static propTypes = {
    // State
    show: PropTypes.bool,
    native: PropTypes.bool,
    words: PropTypes.string,
    // Dispatcher
    onClose: PropTypes.func,
    onToggleNativeMode: PropTypes.func,
    onChangeWords: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      words: props.words
    }
  }

  onChangeWords = e => {
    this.setState({ words: e.target.value }, () => this.props.onChangeWords(this.state.words));
  }

  render() {
    const { classes } = this.props;

    return (
      <Dialog
        open={this.props.show}
        onClose={this.props.onClose}
        scroll='paper'
      >
        <DialogTitle>设置</DialogTitle>
        <DialogContent className={classes.content}>
          <FormLabel>语言 / Language</FormLabel>
          <FormGroup>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>
                语言
              </InputLabel>
              <Select
                value={this.props.language}
                onChange={null}
                input={<OutlinedInput labelWidth={150} name='language' />}
              >
                <MenuItem value='zh-chs'>简体中文</MenuItem>
              </Select>
            </FormControl>
          </FormGroup>
          <Divider className={classes.divider} />
          <FormLabel>关键词列表</FormLabel>
          <FormGroup>
            <FormControl variant="outlined" className={classes.formControl}>
              <TextField
                label="一词一行"
                margin="dense"
                variant="outlined"
                multiline
                rowsMax={5}
                className={classes.textInput}
                value={this.state.words}
                onChange={this.onChangeWords}
              />
            </FormControl>
          </FormGroup>
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

export default withStyles(styles)(Setting);