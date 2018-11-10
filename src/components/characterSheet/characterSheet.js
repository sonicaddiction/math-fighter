import React from 'react';
import KeyValue from '../keyValue/keyValue';
import { withStyles, Paper } from '@material-ui/core';

type CharacterProps = {
  character: Character,
};

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
  },
});

function CharacterSheet(props: CharacterProps) {
  const { classes } = props;

  if (!props.character) {
    return null;
  }

  return (
    <Paper className={classes.paper}>
      <KeyValue description="Name" value={props.character.name} />
      <KeyValue description="Health" value={props.character.health} />
      <KeyValue description="AttackDice" value={props.character.attackDice} />
    </Paper>
  );
}

export default withStyles(styles)(CharacterSheet);
