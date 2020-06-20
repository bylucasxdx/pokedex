import React from 'react';

import Pokeball from '../../assets/patterns/pokeball.png';
import { PokemonImageContainer, PokemonImage } from './styles';

interface Props {
  code: string;
}

const PokemonCardImage: React.FC<Props> = ({ code }) => {
  return (
    <PokemonImageContainer
      source={Pokeball}
      imageStyle={{ opacity: 0.1, width: 165 }}
    >
      <PokemonImage
        source={{
          uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${code}.png`,
        }}
      />
    </PokemonImageContainer>
  );
};

export default PokemonCardImage;
