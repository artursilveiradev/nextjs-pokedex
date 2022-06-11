import { Card, Col, Row, Text } from '@nextui-org/react'

type Pokemon = {
  id: number
  name: string
  sprite: string | null
  description: string | null
}

type PokemonInfoProps = {
  pokemon: Pokemon
}

function PokemonInfo({ pokemon }: PokemonInfoProps) {
  return (
    <Card>
      <Card.Header css={{ textAlign: 'center' }}>
        <Col>
          <Text h3 transform="capitalize">
            #{String(pokemon.id).padStart(3, '0')} - {pokemon.name}
          </Text>
        </Col>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        {pokemon.sprite && (
          <Card.Image
            src={pokemon.sprite}
            width={118}
            height={118}
            alt={`${pokemon.name} sprite`}
          />
        )}
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        {pokemon.description && (
          <Row>
            <Text>{pokemon.description}</Text>
          </Row>
        )}
      </Card.Footer>
    </Card>
  )
}

export default PokemonInfo
