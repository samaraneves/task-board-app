import '@testing-library/jest-dom';
import { render } from '@testing-library/react'
import { Title } from '@/components/Title'

describe('<Title /> component', () => {
    test('should render <Title /> component in home', () => {
        const { getByText } = render(<Title />)

        expect(getByText('My Task Board')).toBeInTheDocument();
    })
})

describe('<Card /> component', () => {
    test('should render <Card /> component in home', () => {
        const { getByText } = render(
            <Card
                iconStart='clock'
                iconEnd='progress'
                description='Task in Progress'
                fontSize='lg'
                status='progress'
            />
        )

        expect(getByText('Task in Progress')).toBeInTheDocument();
    })
