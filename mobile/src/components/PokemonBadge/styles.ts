import styled, { css } from 'styled-components/native';
import { colors } from '../../styles';

interface Props {
  type: string;
}

export const Container = styled.View<Props>`
  height: 25px;
  max-width: 60px;
  padding: 5px;
  border-radius: 3px;
  margin-right: 5px;
  margin-top: 5px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${(props) => {
    const backgroundColor =
      colors[
        `color${props.type.charAt(0).toUpperCase() + props.type.slice(1)}`
      ] || '#fff';

    return css`
      background-color: ${backgroundColor};
    `;
  }}
`;

export const TextDescription = styled.Text`
  color: #fff;
  font-size: 12px;
`;
