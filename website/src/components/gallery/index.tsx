import { Image } from "@/components/ui/image";

export interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    images?: string[];
}

export function Gallery({ title, images, ...props }: GalleryProps) {
    if (!images || images.length === 0) return null;
    return (
        <div {...props}>
            {images.length === 1 && (
                <button className="w-full aspect-video rounded-lg overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <Image
                        src={images[0] || "/placeholder.svg"}
                        alt={title || ""}
                        className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
                    />
                </button>
            )}

            {images.length === 2 && (
                <div className="grid grid-cols-2 gap-2">
                {images.map((img, idx) => (
                    <button key={idx} className="aspect-[3/4] rounded-lg overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <Image
                            src={img || "/placeholder.svg"}
                            alt={`${title} ${idx + 1}`}
                            className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
                        />
                    </button>
                ))}
                </div>
            )}

            {images.length >= 3 && (
                <div className="grid grid-cols-2 gap-2 h-[400px]">
                    <button
                        className="row-span-2 rounded-lg overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        <Image
                            src={images[0] || "/placeholder.svg"}
                            alt={`${title} 1`}
                            className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
                        />
                    </button>
                    <button
                        className="rounded-lg overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        <Image
                            src={images[1] || "/placeholder.svg"}
                            alt={`${title} 2`}
                            className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
                        />
                    </button>
                    <button
                        className="relative rounded-lg overflow-hidden bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                        <Image
                            src={images[2] || "/placeholder.svg"}
                            alt={`${title} 3`}
                            className="w-full h-full object-cover"
                        />
                        {images.length > 3 && (
                            <div className="absolute inset-0 bg-foreground/10 flex items-center justify-center backdrop-blur-xs">
                                <span className="text-background text-2xl font-medium">
                                +{images.length - 3} more
                                </span>
                            </div>
                        )}
                    </button>
                </div>
            )}
        </div>
    );
}