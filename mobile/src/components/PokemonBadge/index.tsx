import React from 'react';

import TypeIcon from '../TypeIcon';
import { Container, TextDescription } from './styles';

interface Props {
  type: string;
}

const PokemonBadge: React.FC<Props> = ({ type }) => {
  return (
    <Container type={type}>
      <TypeIcon
        type={type}
        width={12}
        color="#fff"
        style={{ marginRight: 5 }}
      />
      <TextDescription>
        {`${type.charAt(0).toUpperCase()}${type.slice(1)}`}
      </TextDescription>
    </Container>
  );
};

export default PokemonBadge;
