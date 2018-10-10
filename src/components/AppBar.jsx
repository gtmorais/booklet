import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';  
import '../App.css';
import Drawer from '@material-ui/core/Drawer';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

class ButtonAppBar extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  render() {
    const { classes, theme } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>aaaaaaaaa</List>
        <Divider />
        <List>bbbbbbb</List>
        <Divider />
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>

            <IconButton onClick={this.toggleDrawer('left', true)}>
              <MenuIcon>
              </MenuIcon>
            </IconButton>

            <Typography variant="title" color="inherit" className={classes.flex}>
              Title
          </Typography>
            <Link to="/" className="navBarLink">
              <Button className="navBarLink">Home</Button>
            </Link>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  };
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
