import styled, { css } from 'styled-components/native';
import { Feather as FeatherIcon } from '@expo/vector-icons';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #f2f2f2;
  border-radius: 10px;
  margin-top: 25px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #f2f2f2;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #747476;
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 12px;
`;
