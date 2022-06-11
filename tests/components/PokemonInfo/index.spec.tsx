import { render, screen } from '@testing-library/react'
import { PokemonInfo } from '@/components'

const pokemon = {
  id: 25,
  name: 'pikachu',
  sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
  description: 'It has small electric sacs on both its cheeks. If threatened, it looses electric charges from the sacs.'
}

describe('<PokemonInfo />', () => {
  test('should render correctly', () => {
    render(<PokemonInfo pokemon={pokemon} />)
    
    const pokemonSprite = screen.getByRole('img')

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(`#0${pokemon.id} - ${pokemon.name}`)
    
    expect(pokemonSprite).toHaveAttribute('src', pokemon.sprite)

    expect(pokemonSprite).toHaveAttribute('alt', `${pokemon.name} sprite`)

    expect(screen.getByText(pokemon.description)).toBeInTheDocument()
  })
})
