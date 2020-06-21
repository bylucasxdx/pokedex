import React from 'react';
import { SvgProps } from 'react-native-svg';

import Bug from '../../assets/types/bug.svg';
import Dark from '../../assets/types/dark.svg';
import Dragon from '../../assets/types/dragon.svg';
import Electric from '../../assets/types/electric.svg';
import Fairy from '../../assets/types/fairy.svg';
import Fighting from '../../assets/types/fighting.svg';
import Fire from '../../assets/types/fire.svg';
import Flying from '../../assets/types/flying.svg';
import Ghost from '../../assets/types/ghost.svg';
import Grass from '../../assets/types/grass.svg';
import Ground from '../../assets/types/ground.svg';
import Ice from '../../assets/types/ice.svg';
import Normal from '../../assets/types/normal.svg';
import Poison from '../../assets/types/poison.svg';
import Psychic from '../../assets/types/psychic.svg';
import Rock from '../../assets/types/rock.svg';
import Steel from '../../assets/types/steel.svg';
import Water from '../../assets/types/water.svg';

interface Icons {
  [key: string]: React.FC<SvgProps>;
}

const icons: Icons = {
  bug: Bug,
  dark: Dark,
  dragon: Dragon,
  electric: Electric,
  fairy: Fairy,
  fighting: Fighting,
  fire: Fire,
  flying: Flying,
  ghost: Ghost,
  grass: Grass,
  ground: Ground,
  ice: Ice,
  normal: Normal,
  poison: Poison,
  psychic: Psychic,
  rock: Rock,
  steel: Steel,
  water: Water,
};

interface Props extends SvgProps {
  type: string;
}

const TypeIcon: React.FC<Props> = ({ type, width, color, style }) => {
  const SelectedIcon = icons[type];

  return <SelectedIcon width={width} color={color} style={style} />;
};

export default TypeIcon;
