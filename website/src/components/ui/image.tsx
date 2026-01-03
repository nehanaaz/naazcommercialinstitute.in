export function Image({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
    const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = '/placeholder.svg';
    };

    return <img {...props} onError={handleError} />;
}