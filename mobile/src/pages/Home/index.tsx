import React, { useRef, useState, useEffect } from 'react';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import PokemonCardImage from '../../components/PokemonCardImage';

import {
  Container,
  Title,
  Description,
  CardsContainer,
  PokemonCard,
  Menu,
  PokemonName,
  PokemonDescription,
  PokemonNumber,
  PokemonBadge,
  PokemonBadgeText,
  PokemonBadgeContainer,
} from './styles';

import GenerationIcon from '../../assets/icons/generation.svg';
import FilterIcon from '../../assets/icons/filter.svg';
import SortIcon from '../../assets/icons/sort.svg';

import pokemonApi from '../../services/pokemonApi';

import Input from '../../components/Input';
import Grass from '../../assets/types/grass.svg';
import Poison from '../../assets/types/poison.svg';
import Fire from '../../assets/types/fire.svg';
import Water from '../../assets/types/water.svg';

interface Pokemon {
  id: string;
  name: string;
  height: number,
  main_type: string;
  types: string[];
  image_url: string;
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    pokemonApi.get('/').then(response => {
      setPokemons(response.data);
    });
  });

  return (
    <Container>
      <Menu>
        <GenerationIcon width={20} height={20} />
        <FilterIcon width={20} height={20} style={{ marginLeft: 25 }} />
        <SortIcon width={20} height={20} style={{ marginLeft: 25 }} />
      </Menu>
      <Title>Pokédex</Title>

      <Description>
        Search for Pokémon by name or using the National Pokédex number.
      </Description>

      <Form
        ref={formRef}
        onSubmit={() => {
          return 'a';
        }}
      >
        <Input
          name="name"
          icon="search"
          placeholder="What pokemon are you looking for?"
        />
      </Form>

      <CardsContainer showsVerticalScrollIndicator={false}>
        {pokemons.map(pokemon => (
          <PokemonCard type={pokemon.main_type}>
            <PokemonDescription>
              <PokemonNumber>#{pokemon.id}</PokemonNumber>
              <PokemonName>{pokemon.name}</PokemonName>

              <PokemonBadgeContainer>
                {pokemon.types.map(type => (
                  <PokemonBadge type={type}>
                    <Grass width={12} style={{ marginRight: 5 }} />
                    <PokemonBadgeText>{type}</PokemonBadgeText>
                  </PokemonBadge>
                ))}
              </PokemonBadgeContainer>
            </PokemonDescription>

            <PokemonCardImage code={pokemon.id} />
          </PokemonCard>
        ))}

        <PokemonCard type="fire">
          <PokemonDescription>
            <PokemonNumber>#004</PokemonNumber>
            <PokemonName>Charmander</PokemonName>

            <PokemonBadgeContainer>
              <PokemonBadge type="fire">
                <Fire width={12} style={{ marginRight: 5 }} />
                <PokemonBadgeText>Fire</PokemonBadgeText>
              </PokemonBadge>
            </PokemonBadgeContainer>
          </PokemonDescription>

          <PokemonCardImage code="004" />
        </PokemonCard>

        <PokemonCard type="water">
          <PokemonDescription>
            <PokemonNumber>#007</PokemonNumber>
            <PokemonName>Squirtle</PokemonName>

            <PokemonBadgeContainer>
              <PokemonBadge type="water">
                <Water width={12} style={{ marginRight: 5 }} />
                <PokemonBadgeText>Water</PokemonBadgeText>
              </PokemonBadge>
            </PokemonBadgeContainer>
          </PokemonDescription>

          <PokemonCardImage code="007" />
        </PokemonCard>

        <PokemonCard type="water">
          <PokemonDescription>
            <PokemonNumber>#007</PokemonNumber>
            <PokemonName>Squirtle</PokemonName>

            <PokemonBadgeContainer>
              <PokemonBadge type="water">
                <Water width={12} style={{ marginRight: 5 }} />
                <PokemonBadgeText>Water</PokemonBadgeText>
              </PokemonBadge>
            </PokemonBadgeContainer>
          </PokemonDescription>

          <PokemonCardImage code="008" />
        </PokemonCard>
      </CardsContainer>
    </Container>
  );
};

export default Home;
