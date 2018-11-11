import { withStyles, List, ListItem, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

const styles = theme => ({
  listItem: {
    padding: 0,
  },
});

function BattleMessages(props) {
  const { classes } = props;

  return (
    <List>
      {props.infoText.map((info, index) => (
        <ListItem className={classes.listItem} key={index} dense={true}>
          {info}
        </ListItem>
      ))}
    </List>
  );
}

const mapStateToProps = state => {
  return {
    infoText: state.battle.round.infoText,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(BattleMessages));
