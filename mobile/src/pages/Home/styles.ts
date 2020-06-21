import styled, { css } from 'styled-components/native';

import { colors } from '../../styles';

interface PokemonBadgeProps {
  background?: string;
  type: string;
}

interface PokemonCardProps {
  background?: string;
  type: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 35px;
  background: #fff;
`;

export const Menu = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

export const Description = styled.Text`
  margin-top: 10px;
  font-size: 16px;
`;

export const CardsContainer = styled.ScrollView``;

export const PokemonCard = styled.View<PokemonCardProps>`
  margin-top: 30px;
  height: 115px;
  border-radius: 10px;
  padding: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${(props) => {
    const backgroundColor =
      colors[
        `background${props.type.charAt(0).toUpperCase() + props.type.slice(1)}`
      ] || '#fff';

    return css`
      background-color: ${backgroundColor};
    `;
  }}
`;

export const PokemonDescription = styled.View`
  flex: 1;
`;

export const PokemonNumber = styled.Text`
  font-size: 12px;
  font-weight: bold;
  line-height: 14px;
`;

export const PokemonName = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
`;

export const PokemonBadgeContainer = styled.View`
  flex-direction: row;
`;
