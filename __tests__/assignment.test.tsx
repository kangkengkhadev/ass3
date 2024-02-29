import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

describe('Page', () => {
  it('renders a page', () => {
    render(<Page/>)
    const lb = screen.getByText("Get started by editing")
    expect(lb).toBeInTheDocument()
  })
})