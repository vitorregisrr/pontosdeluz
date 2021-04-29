import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render with the marker in corect place', () => {
    const place = {
      id: '1',
      name: 'Quilo',
      slug: 'quilo',
      location: {
        longitude: -15,
        latitude: 10,
      },
    }
    render(<Map places={[place]} />)

    expect(screen.getByTitle(/Quilo/i)).toBeInTheDocument()
  })
})
