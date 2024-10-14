
interface ColumnWrapperProps {
    children: React.ReactNode;
    title: string;
}

export const ColumnWrapper = ({ children, title }: ColumnWrapperProps) => {
    return (
        <div style={{ width: '20rem', height: '100%', display: 'flex', flexDirection: 'column', maxHeight: '70vh', position: 'relative' }}>
            <h2>{title}</h2>
            <div style={{  border: '1px solid', overflow: 'auto', flexGrow: 1,  padding: '20px' }}>
                {children}
            </div>
        </div>
    )
}