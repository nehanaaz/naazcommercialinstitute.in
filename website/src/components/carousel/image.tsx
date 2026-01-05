import {
  type ComponentProps,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Image } from "@/components/ui/image";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 4000;

export function ImageCarousel({ images }: { images: string[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!api) return;

    // Update current slide
    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
      setProgress(0);
    };

    api.on("select", updateCurrent);
    updateCurrent();

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    if (progress === 100) api.scrollTo((current + 1) % images.length);
  }, [progress]);

  useEffect(() => {
    if (isHovered || !inView) return;

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 5000 / AUTOPLAY_MS));
    }, 50);

    return () => clearInterval(interval as NodeJS.Timeout);
  }, [inView, current, isHovered]);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.4, // 40% visible before autoplay resumes
      },
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="group border-border/50 relative overflow-hidden rounded-3xl border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Carousel Item ${index + 1}`}
                  className="h-[500px] w-full rounded-3xl object-cover lg:h-[600px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <ProgressBarOverlay />
      <ProgressBar
        className="w-1/4"
        api={api}
        progress={progress}
        current={current}
      />
    </div>
  );
}

function ProgressBarOverlay() {
  return (
    <div className="absolute right-0 bottom-0 left-0 h-1/4 bg-linear-to-t from-black to-transparent" />
  );
}

function ProgressBar({
  api,
  className,
  progress,
  current,
  ...props
}: ComponentProps<"div"> & {
  api?: CarouselApi;
  progress: number;
  current: number;
}) {
  const [totalImages, setTotalImages] = useState(0);
  useEffect(() => {
    if (!api) return;

    const onSlidesInit = (api: CarouselApi) => {
      setTotalImages(api?.slideNodes().length || 0);
    };

    onSlidesInit(api);
    api.on("init", onSlidesInit);
    api.on("reInit", onSlidesInit);

    return () => {
      api.off("init", onSlidesInit);
      api.off("reInit", onSlidesInit);
    };
  }, [api]);

  const getProgress = useCallback(
    (progress: number, index: number) => {
      return current === index ? progress : undefined;
    },
    [current],
  );

  return (
    <div
      className={cn(
        "absolute bottom-4 left-1/2 z-100 flex -translate-x-1/2 items-center gap-1",
        className,
      )}
      role="carousel"
      {...props}
    >
      {Array.from({ length: totalImages }).map((_, index) => (
        <ProgressItem key={index} progress={getProgress(progress, index)} />
      ))}
    </div>
  );
}

function ProgressItem({
  className,
  progress,
  ...props
}: ComponentProps<"div"> & { progress?: number }) {
  return (
    <div
      className={cn(
        progress !== undefined ? "w-full flex-auto" : "size-1.5 flex-none",
        "h-1.5 overflow-hidden rounded-lg bg-white/20 opacity-60 transition-all duration-300 group-hover:opacity-100",
        className,
      )}
      role="progressbar"
      {...props}
    >
      <div
        className="h-full rounded-lg bg-white"
        style={{ width: `${progress ?? 0}%` }}
      />
    </div>
  );
}
