import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import '../App.css';


function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: { flex: 0.33 },
  },
});

class BooksTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Caderno 3" />
            <Tab label="Caderno 2" />
            <Tab label="Carderno 1" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}>
          <TabContainer dir={theme.direction}>
            <Link to="/index/3">
              <img src="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Windows.png" alt="Caderno 3" className="mainImage" />
            </Link>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Link to="/index/2">
              <img src="https://cdn2.iconfinder.com/data/icons/metro-ui-dock/512/Microsoft.png" alt="Caderno 2" className="mainImage" />
            </Link>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Link to="/index/1">
              <img src="https://cdn2.iconfinder.com/data/icons/metro-ui-icon-set/512/Microsoft_New_Logo.png" alt="Caderno 1" className="mainImage" />
            </Link>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

BooksTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(BooksTabs);