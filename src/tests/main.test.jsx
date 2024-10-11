import { it, expect, describe, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import {userEvent} from '@testing-library/user-event'
import App from '../App.jsx'
import { Navbar } from '../components/Navbar.jsx'
import { MemoryRouter } from 'react-router-dom'

describe('group', () => {
  it('should', () => {
    expect(1).toBeTruthy()
  })
})

describe('cart', () => {
  it('should', () => {
    
  })
})

vi.mock('../hooks/useFetch', () => ({
  default: () => ({
    data: [{ id: 1, title: 'Product 1', price: 100, image: 'url', }],
  isLoading: false,
  error: null,
  })
}))

describe('Homepage', () => { 
  it('renders the navbar alongside the mainpage', () => {
    render(
      <MemoryRouter>
        <Navbar/>
        <App/>
      </MemoryRouter>
    )

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument()
    
    expect(screen.getByRole("heading").textContent).toMatch(/Sample Shopfront/i)
  })

  it('increments shopping cart after adding an item to the cart', async() => {
    const user = userEvent.setup()

    render(<>
      <MemoryRouter>
        <Navbar/>
        <App/>
      </MemoryRouter>

    </>)
    const buttons = screen.getAllByRole('button', { name: 'Add to Cart' })
    
    await user.click(buttons[0])

    expect(screen.getByRole("link", {name: "cart"}).firstChild.textContent).toMatch(/1/i)
  })
 })