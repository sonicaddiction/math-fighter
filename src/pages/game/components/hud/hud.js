import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  withStyles,
} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { attackWithCharacter, incrementRound } from '../../actionCreators';

const styles = theme => ({
  card: {
    color: theme.palette.text.secondary,
  },
});

function Hud(props: CharacterProps) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom>
          Battle Info
        </Typography>
        <Typography component="p">Round: {props.round}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={props.onAttack}>Start Round</Button>
      </CardActions>
    </Card>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onAttack: () => {
      dispatch(attackWithCharacter('player', 'enemy'));
      dispatch(attackWithCharacter('enemy', 'player'));
      dispatch(incrementRound());
    },
  };
};

const mapStateToProps = state => {
  return {
    round: state.battle.round.currentRound,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Hud));
