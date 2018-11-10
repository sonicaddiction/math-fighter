import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import KeyValue from '../keyValue/keyValue';
import type { Character } from '../../types/gameEngine';

type CharacterProps = {
  character: Character,
};

function CharacterSheet(props: CharacterProps) {
  if (!props.character) {
    return null;
  }

  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Character sheet
        </Typography>
        <KeyValue description="Name" value={props.character.name} />
        <KeyValue description="Health" value={props.character.health} />
        <KeyValue description="AttackDice" value={props.character.attackDice} />
      </CardContent>
    </Card>
  );
}

export default CharacterSheet;
