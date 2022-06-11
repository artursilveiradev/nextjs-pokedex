import { rest } from 'msw'

const pokemons = [
  {
    id: 25,
    name: 'pikachu',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
    description: 'It has small electric sacs on both its\ncheeks. If threatened, it looses electric\ncharges from the sacs.'
  },
  {
    id: 26,
    name: 'raichu',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg',
    description: 'Its electric charges can reach even\n100,000 volts. Careless contact can cause\neven an Indian elephant to faint.'
  }
]

export const handlers = [
  rest.get('/api/pokemons', (req, res, ctx) => {
    return res(
      ctx.json(pokemons)
    )
  })
]
