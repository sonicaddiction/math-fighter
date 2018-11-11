import { Card, List, ListItem, withStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

const styles = theme => ({
  card: {
    padding: theme.spacing.unit * 2,
  },
  listItem: {
    padding: 0,
  },
});

function BattleMessages(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <List>
        {props.infoText.map((info, index) => (
          <ListItem className={classes.listItem} key={index} dense={true}>
            {info}
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    infoText: state.battle.round.infoText,
  };
};

export default connect(mapStateToProps)(withStyles(styles)(BattleMessages));
