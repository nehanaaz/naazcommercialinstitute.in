import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";
import { useCallback } from "react";
import { viewer } from "@/components/image-viewer";

export interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  images?: string[];
  onImageClick?: () => void;
}

export function Gallery({
  title,
  images,
  onImageClick,
  ...props
}: GalleryProps) {
  const onClick = useCallback(
    (index?: number) => {
      return () => {
        onImageClick?.();
        viewer.setAlbum(images?.map((src) => ({ src })) || []);
        viewer.open(index);
      };
    },
    [images, viewer, onImageClick],
  );

  if (!images || images.length === 0) return null;
  return (
    <div {...props}>
      {images.length === 1 && (
        <GalleryImage
          image={images[0]}
          title={title}
          className="aspect-video w-full"
          onClick={onClick(0)}
        />
      )}

      {images.length === 2 && (
        <div className="grid w-full grid-cols-2 gap-2">
          {images.map((img, idx) => (
            <GalleryImage
              key={idx}
              image={img}
              title={`${title} ${idx + 1}`}
              className="aspect-[3/4]"
              onClick={onClick(idx)}
            />
          ))}
        </div>
      )}

      {images.length >= 3 && (
        <div className="grid h-[400px] w-full grid-cols-2 gap-2">
          <GalleryImage
            image={images[0]}
            title={`${title} 1`}
            className="row-span-2"
            onClick={onClick(0)}
          />
          <GalleryImage
            image={images[1]}
            title={`${title} 2`}
            onClick={onClick(1)}
          />
          <GalleryImage
            image={images[2]}
            title={`${title} 3`}
            more={images.length - 3}
            onClick={onClick(2)}
          />
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

function GalleryImage({
  image,
  title,
  more,
  className,
  onClick,
  ...props
}: GalleryImageProps) {
  return (
    <button
      className={cn(
        "bg-muted focus-visible:ring-ring relative h-full w-full cursor-pointer overflow-hidden rounded-lg focus-visible:ring-2 focus-visible:outline-none",
        className,
      )}
      onClick={onClick}
      {...props}
    >
      <Image
        src={image || "/placeholder.svg"}
        alt={`${title} 1`}
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-102"
      />
      {more && (
        <div className="bg-foreground/10 pointer-events-none absolute inset-0 flex items-center justify-center backdrop-blur-xs">
          <span className="text-background text-2xl font-medium">
            +{more} more
          </span>
        </div>
      )}
    </button>
  );
}
