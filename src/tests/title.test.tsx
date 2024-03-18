import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import { Title } from '@/components/Title'

describe('<Title /> component', () => {
    beforeEach(() => {
        render(<Title />) 
    })
    test('should render <Title /> component text in home', () => {
        expect(screen.getByText('My Task Board')).toBeInTheDocument();
    })

    test('should displays Images', () => {
        const images = document.querySelectorAll("img")

        expect(images[0].src).toContain(/Logo/i)
        expect(images[1].src).toContain(/Duotone_edit/i)
    })
})