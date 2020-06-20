import { Router } from 'express';
import Pokedex from 'pokedex-promise-v2';

const routes = Router();

/** @todo Reestruturar */
routes.get('/', async (req, res) => {
    const page = Number(req.params.page) || 1;
    const limit = 10 * page;
    const offset = 10 * (page - 1);

    const p = new Pokedex();

    const response = await p.getPokemonsList({
        limit,
        offset
    });

    const pokemons = await Promise.all(
        response.results.map(async result => {
            const pokemon = await p.getPokemonByName(result['name']);
            const id = pokemon.id.toString().padStart(3, '0');
            const image_url = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
            const types = pokemon.types.map(type => type.type.name);

            return {
                id,
                name: pokemon.name,
                height: pokemon.height,
                types,
                main_type: types[0],
                image_url,
            };
        }),
    );

    return res.json(pokemons)
});

export default routes;