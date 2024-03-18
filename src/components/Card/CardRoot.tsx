type CardRootProps = {
    children?: React.ReactNode
    onClick?: () => void
    variant?: 'progress' | 'completed' | 'wontDo' | 'toDo' | 'default'
}

export function CardRoot({ children, onClick, variant = 'default' }: CardRootProps) {
    const getColorByVariant = (variant = 'default') => {
        switch (variant) {
            case 'progress':
                return '--orange'
        
            case 'completed':
                return '--grape-green'

            case 'wontDo':
                return '--pale-pink'
            
            case 'toDo':
                return '--alice-blue'

            default:
                return '--orange-yellow'
        }
    }

    const color = getColorByVariant(variant)

    return(
        <div
            onClick={onClick}
            className={'w-full max-w-2xl block p-4 rounded-xl'}
            style={{
                backgroundColor: `var(${color})`
            }}
        >
            {children}
        </div>
    )
}