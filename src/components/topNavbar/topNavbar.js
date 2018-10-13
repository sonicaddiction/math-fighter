import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

type Props = {};

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

function TopNavbar(props) {
  const { classes } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <div className={classes.grow}>Kristofer's Page</div>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/contact" color="inherit">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(TopNavbar);
