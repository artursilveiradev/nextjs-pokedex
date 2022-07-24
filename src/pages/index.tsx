import { Fragment, useState, useEffect } from 'react'
import Head from 'next/head'
import { Container, Row, Loading, Grid } from '@nextui-org/react'
import { Header, PokemonInfo } from '@/components'

type Pokemon = {
  id: number
  name: string
  sprite: string | null
  description: string | null
}

function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    (function() {
      setIsLoading(true)
      fetch('/api/pokemons')
        .then(response => response.json())
          .then(pokemons => setPokemons(pokemons))
            .finally(() => setIsLoading(false))
    })()
  }, [])

  return (
    <Fragment>
      
      <Head>
        <title>Next.js Pokédex</title>
        <meta name="description" content="Pokedéx example using Next.js" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Container sm>
        <Header />
        {isLoading && (
          <Row justify="center" align="center">
            <Loading loadingCss={{ $$loadingColor: '#3a6bb8' }} />
          </Row>
        )}
        <Grid.Container gap={2} justify="center">
          {pokemons?.map(pokemon => (
            <Grid
              key={pokemon.id}
              xs={8}
              sm={6}
              md={4}
            >
              <PokemonInfo pokemon={pokemon} />
            </Grid>
          ))}
        </Grid.Container>
      </Container>

    </Fragment>
  )
}

export default Home
