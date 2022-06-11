import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import Home from '@/pages'

describe('<Home />', () => {
  test('Should render correctly', async () => {
    render(<Home />)
    
    const loading = screen.getByLabelText('Loading')

    expect(loading).toBeInTheDocument()

    await waitForElementToBeRemoved(loading)

    expect(loading).not.toBeInTheDocument()

    expect(screen.getAllByRole('section')).toHaveLength(2)
  })
})
