"use client"

import * as React from "react"

export function Image({ src, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
    const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = '/placeholder.svg';
    };

    return <img {...props} src={src || '/placeholder.svg'} onError={handleError} />;
}