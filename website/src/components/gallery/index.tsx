import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

export interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    images?: string[];
}

export function Gallery({ title, images, ...props }: GalleryProps) {
    if (!images || images.length === 0) return null;
    return (
        <div {...props}>
            {images.length === 1 && (
                <GalleryImage image={images[0]} title={title} className="w-full aspect-video" />
            )}

            {images.length === 2 && (
                <div className="grid grid-cols-2 gap-2 w-full aspect-video">
                {images.map((img, idx) => (
                    <GalleryImage key={idx} image={img} title={`${title} ${idx + 1}`} className="aspect-[3/4]" />
                ))}
                </div>
            )}

            {images.length >= 3 && (
                <div className="grid grid-cols-2 gap-2 h-[400px] w-full aspect-video">
                    <GalleryImage image={images[0]} title={`${title} 1`} className="row-span-2" />
                    <GalleryImage image={images[1]} title={`${title} 2`} />
                    <GalleryImage image={images[2]} title={`${title} 3`} more={images.length - 3} />
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

function GalleryImage({ image, title, more, className, ...props }: GalleryImageProps) {
    return (
        <button
            className={cn("relative cursor-pointer rounded-lg overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring", className)}
            {...props}
        >
            <Image
                src={image || "/placeholder.svg"}
                alt={`${title} 1`}
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
            />
            {more && (
                <div className="absolute inset-0 bg-foreground/10 flex items-center justify-center backdrop-blur-xs">
                    <span className="text-background text-2xl font-medium">
                    +{more} more
                    </span>
                </div>
            )}
        </button>
    )
}