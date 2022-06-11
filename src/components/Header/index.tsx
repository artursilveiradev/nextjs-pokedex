import { Row, Image } from '@nextui-org/react'

function Header() {
  return (
    <Row
      as="header" 
      justify="center" 
      align="center"
      css={{
        paddingTop: '$12',
        paddingBottom: '$12'
      }}
    >
      <Image
        width={236}
        src="images/logo.png"
        alt="Pokédex logo"
      />
    </Row>
  )
}

export default Header
