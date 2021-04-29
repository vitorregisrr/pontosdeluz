import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render with the marker in corect place', () => {
    const place = {
      id: '1',
      name: 'Quilo',
      slug: 'quilo',
      cordinates: {
        longitude: -15,
        latitude: 10,
      },
      visited: true,
      visible: true,
    }
    render(<Map places={[place]} />)

    expect(screen.getByTitle(/Quilo/i)).toBeInTheDocument()
  })
})
