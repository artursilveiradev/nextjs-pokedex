import type { NextApiRequest, NextApiResponse } from 'next'
import Pokedex from 'pokedex-promise-v2'

const pokedex = new Pokedex()

type Pokemon = {
  id: number
  name: string
  sprite: string | null
  description: string | null
} | undefined

type Data = Pokemon[]

type Error = {
  error: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  try {
    const { results: pokemonsList } = await pokedex.getPokemonsList({ limit: 151 }) // first generation only
    
    const pokemons = await Promise.all(
      pokemonsList.map(({ name }) =>
        pokedex.getPokemonByName(name).then(pokemon =>
          pokedex.getPokemonSpeciesByName(name).then(species => {
            if(!Array.isArray(pokemon) && !Array.isArray(species)) {
              const pokemonDescription = species.flavor_text_entries.find(
                ({ language, version }) => language.name === 'en' && version.name === 'firered'
              )?.flavor_text
              
              return {
                id: pokemon.id,
                name: pokemon.name,
                sprite: pokemon.sprites.other.dream_world.front_default,
                description: pokemonDescription ?? null
              }
            }
          })
        )
      )
    )
    res.status(200).json(pokemons)
  } catch (error) {
    res.status(500).json({ error: 'Api route error' })
  }
}
