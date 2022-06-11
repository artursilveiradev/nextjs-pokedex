import { render, screen } from '@testing-library/react'
import { Header } from '@/components'

describe('<Header />', () => {
  test('should render correctly', () => {
    render(<Header />)
    
    const logo = screen.getByRole('img')
    
    expect(logo).toHaveAttribute('src', 'images/logo.png')
    
    expect(logo).toHaveAttribute('alt', 'Pokédex logo')
  })
})
