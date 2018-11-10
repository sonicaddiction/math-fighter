import {
  withStyles,
  Card,
  Button,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { damageCharacter } from '../../actionCreators';

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
        <Typography component="p">Round: 4</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={props.onAttack}>Attack</Button>
      </CardActions>
    </Card>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onAttack: () => {
      dispatch(damageCharacter('enemy')(10));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Hud));
