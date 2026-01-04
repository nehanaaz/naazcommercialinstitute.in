import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";
import { useCallback } from "react";
import { viewer } from "@/components/image-viewer";

export interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    images?: string[];
    onImageClick?: () => void;
}

export function Gallery({ title, images, onImageClick, ...props }: GalleryProps) {
    const onClick = useCallback((index?: number) => {
        return () => {
            onImageClick?.();
            viewer.setAlbum(images?.map((src) => ({ src })) || []);
            viewer.open(index);
        }
    }, [images, viewer, onImageClick]);

    if (!images || images.length === 0) return null;
    return (
        <div {...props}>
            {images.length === 1 && (
                <GalleryImage image={images[0]} title={title} className="w-full aspect-video" onClick={onClick(0)} />
            )}

            {images.length === 2 && (
                <div className="grid grid-cols-2 gap-2 w-full">
                {images.map((img, idx) => (
                    <GalleryImage key={idx} image={img} title={`${title} ${idx + 1}`} className="aspect-[3/4]" onClick={onClick(idx)} />
                ))}
                </div>
            )}

            {images.length >= 3 && (
                <div className="grid grid-cols-2 gap-2 h-[400px] w-full">
                    <GalleryImage image={images[0]} title={`${title} 1`} className="row-span-2" onClick={onClick(0)} />
                    <GalleryImage image={images[1]} title={`${title} 2`} onClick={onClick(1)} />
                    <GalleryImage image={images[2]} title={`${title} 3`} more={images.length - 3} onClick={onClick(2)} />
                </div>
            )}
        </div>
    );
}

interface GalleryImageProps extends React.HTMLAttributes<HTMLButtonElement> {
    title?: string;
    image?: string;
    more?: number;
}

function GalleryImage({ image, title, more, className, onClick, ...props }: GalleryImageProps) {
    return (
        <button
            className={cn("relative h-full w-full cursor-pointer rounded-lg overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className)}
            onClick={onClick}
            {...props}
        >
            <Image
                src={image || "/placeholder.svg"}
                alt={`${title} 1`}
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
            />
            {more && (
                <div className="absolute inset-0 bg-foreground/10 flex items-center justify-center backdrop-blur-xs pointer-events-none">
                    <span className="text-background text-2xl font-medium">
                    +{more} more
                    </span>
                </div>
            )}
        </button>
    )
}